import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { signup } from "../../services/apiAuth"

export default function useSignup() {
  const {isLoading , mutate:signupUser} = useMutation({
    mutationFn:signup,
    onSuccess:()=>{
        toast.success(
            "Account successfully created! Please verufy the new account from the user's email address."
          );
    },
    onError:(error)=>{
        toast.error(error.message);
    }
  })

  return {isLoading , signupUser}
}
