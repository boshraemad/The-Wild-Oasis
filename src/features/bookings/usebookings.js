import { useQuery } from "@tanstack/react-query"
import {getBookings} from "../../services/apiBookings"
import { useSearchParams } from "react-router-dom"
import { PAGE_SIZE } from "../../utils/constants"
import { useQueryClient } from "@tanstack/react-query"

export const useBookings=()=>{
    const query=useQueryClient();
    const [searchParams]=useSearchParams();
    const filterValue=searchParams.get("status");
    const filter = !filterValue || filterValue === "all" ? null : {field:"status" , method:"" , value:filterValue};
    const sortByRaw = searchParams.get("sort-by") || "startDate-desc";
    const [field, direction] = sortByRaw.split("-");
    const sortBy={field , direction}
    
    const page = Number(searchParams.get("page")) || 1;
    const { data: { data: bookings, count } = {} , error , isLoading}=useQuery({
        queryKey:["bookings" , filter , sortBy , page],
        queryFn:()=>getBookings({filter , sortBy , page}),
      })

      const pageCount = Math.ceil(count / PAGE_SIZE);

      if(page < pageCount)
        query.prefetchQuery({
      queryKey:["bookings" , filter , sortBy , page + 1],
      queryFn:()=>getBookings({filter , sortBy , page:page+1})
    })

    if(page > 1)
      query.prefetchQuery({
    queryKey:["bookings" , filter , sortBy , page - 1],
    queryFn:()=>getBookings({filter , sortBy , page:page-1})
  })
      return {bookings , isLoading , count}
}