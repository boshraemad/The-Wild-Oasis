import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { login } from "../../services/apiAuth"
import { useNavigate } from "react-router-dom"
export default function useLogin() {
    const navigate = useNavigate();
  const {mutate:loginUser , isLoading} = useMutation({
    mutationFn:(data)=>login(data),
    onSuccess:(data)=>{
        toast.success("user logged in Successfully");
        navigate("/");
    },
    onError:(error)=>{
        console.log(error);
        toast.error(error.message);
    }
  })

  return {isLoading , loginUser}
}
