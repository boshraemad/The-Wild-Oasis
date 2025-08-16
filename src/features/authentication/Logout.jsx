import ButtonIcon from "../../ui/ButtonIcon";
import { IoMdLogOut } from "react-icons/io";
import SpinnerMini from "../../ui/SpinnerMini"
import useLogout from "./useLogout";
export default function Logout() {
    const {isLoading , logoutUser} = useLogout();
  return (
   <ButtonIcon disabled={isLoading} onClick={logoutUser}>{isLoading ? <SpinnerMini/> : <IoMdLogOut/>}</ButtonIcon>
  )
}
