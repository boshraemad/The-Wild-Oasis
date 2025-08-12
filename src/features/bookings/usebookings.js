import { useQuery } from "@tanstack/react-query"
import {getBookings} from "../../services/apiBookings"

export const useBookings=()=>{
    const {data:bookings , error , isLoading}=useQuery({
        queryKey:["bookings"],
        queryFn:getBookings,
      })

      return {bookings , isLoading}
}