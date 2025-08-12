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
    
    const {data:bookings , error , isLoading}=useQuery({
        queryKey:["bookings" , filter , sortBy],
        queryFn:()=>getBookings({filter , sortBy}),
      })

      return {bookings , isLoading}
}