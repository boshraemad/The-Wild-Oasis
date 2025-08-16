import { useMutation , useQueryClient} from "@tanstack/react-query"
import { logout } from "../../services/apiAuth"
import { useNavigate } from "react-router-dom"
export default function useLogout() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
  const {mutate:logoutUser , isLoading} = useMutation({
    mutationFn:logout,
    onSuccess:()=>{
        queryClient.clear();
        navigate("/login" , {replace:true});
    }
  })

  return {isLoading , logoutUser}
}
