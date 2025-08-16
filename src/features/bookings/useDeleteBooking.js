import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export const useDeleteBooking=()=>{
    const queryClient=useQueryClient();

    const {isLoading:isDeleting , mutate:deletingBooking}=useMutation({
      mutationFn:(bookingId)=>deleteBooking(bookingId),
  
      onSuccess:()=>{
        toast.success(`Booking deleted successfully`);
        queryClient.invalidateQueries({active:true});
      }
      ,
      onError:()=>{
        toast.error("Failed to delete Booking")
      }
    })

    return {deletingBooking , isDeleting}
}