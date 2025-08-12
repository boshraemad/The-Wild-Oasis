import { useQuery } from "@tanstack/react-query"
import {getBookings} from "../../services/apiBookings"
import { useSearchParams } from "react-router-dom"

export const useBookings=()=>{
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

      return {bookings , isLoading , count}
}