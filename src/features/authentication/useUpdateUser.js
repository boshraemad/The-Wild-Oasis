import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../../services/apiAuth";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useUpdateUser() {
    const queryClient = useQueryClient();
  const {mutate:updatingUser , isLoading:isUpdating} = useMutation({
    mutationFn:(data)=>updateUser(data),
    onSuccess:({user})=>{
        toast.success("successfully updated user");
        queryClient.setQueryData(["user"] , user)
    },
    onError:()=>{
        toast.error("couldnt update user")
    }
  })

  return {isUpdating , updatingUser}
}
