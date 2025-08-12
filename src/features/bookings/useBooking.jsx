import { getBookingById } from "../../services/apiBookings";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function useBooking() {
    const {bookingId} = useParams();

    const {data , error , isLoading}=useQuery({
        queryKey:["booking"],
        queryFn:()=>getBookingById(bookingId),
        retry:false
      })

      return {data , isLoading}
}
