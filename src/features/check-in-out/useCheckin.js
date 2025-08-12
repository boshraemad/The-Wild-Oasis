import { useNavigate } from "react-router-dom"
import { useQueryClient , useMutation} from "@tanstack/react-query"
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
export default function useCheckin() {
    const queryClient=useQueryClient();
    const navigate=useNavigate();

    const {mutate:checkingin , isLoading:isCheckingIn} = useMutation({
        mutationFn:({bookingId , breakfast})=>updateBooking(bookingId , {
            status: "checked-in",
            isPaid: true,
            ...breakfast
        }),

        onSuccess:(data)=>{
            toast.success(`booking ${data.id} is checkedin successfully`);
            queryClient.invalidateQueries({active:true});
            navigate("/");
        },
        
        onError:()=>{
            toast.error("failed to checkin the booking");
        }

    })

    return {checkingin , isCheckingIn}
}
