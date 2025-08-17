import { useMutation , useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { login } from "../../services/apiAuth"
import { useNavigate } from "react-router-dom"

export default function useLogin() {
    
const queryClient = useQueryClient();
    const navigate = useNavigate();
  const {mutate:loginUser , isLoading} = useMutation({
    mutationFn:(data)=>login(data),
    onSuccess:(data)=>{
        toast.success("user logged in Successfully");
        queryClient.setQueryData(["user"] , data.user)
        navigate("/");
    },
    onError:(error)=>{
        toast.error(error.message);
    }
  })

  return {isLoading , loginUser}
}
