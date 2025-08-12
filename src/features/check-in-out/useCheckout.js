import { useQueryClient , useMutation} from "@tanstack/react-query"
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
export default function useCheckin() {
    const queryClient=useQueryClient();

    const {mutate:checkingout , isLoading:isCheckingout} = useMutation({
        mutationFn:(bookingId)=>updateBooking(bookingId , {
            status:"checked-out"
        }),

        onSuccess:(data)=>{
            toast.success(`booking ${data.id} is checkedout successfully`);
            queryClient.invalidateQueries({active:true});
        },
        
        onError:()=>{
            toast.error("failed to checkout the booking");
        }

    })

    return {checkingout , isCheckingout}
}