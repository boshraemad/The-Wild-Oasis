import { useQuery } from "@tanstack/react-query"
import {getBookings} from "../../services/apiBookings"
import { useSearchParams } from "react-router-dom"

export const useBookings=()=>{
    const [searchParams]=useSearchParams();
    const filterValue=searchParams.get("status");
    const filter = !filterValue || filterValue === "all" ? null : {field:"status" , method:"" , value:filterValue};
    const {data:bookings , error , isLoading}=useQuery({
        queryKey:["bookings" , filter],
        queryFn:()=>getBookings({filter}),
      })

      return {bookings , isLoading}
}