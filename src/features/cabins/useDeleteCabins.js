import { useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeleteCabin=(cabinId)=>{
    const queryClient=useQueryClient();

    const {isLoading:isDeleting , mutate:deleteCabins}=useMutation({
      mutationFn:()=>deleteCabin(cabinId),
  
      onSuccess:()=>{
        toast.success("cabin deleted successfully");
        queryClient.refetchQueries();
      }
      ,
      onError:()=>{
        toast.error("couldnt delete cabin")
      }
    })

    return {isDeleting , deleteCabins}
}