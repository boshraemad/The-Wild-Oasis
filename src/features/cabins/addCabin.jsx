import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
export default function AddCabin() {
    const [openForm , setOpenForm]=useState("");
  return (
    <div>
    <Button size="medium" variation="primary" onClick={()=>setOpenForm((openForm)=>!openForm)}>add New Cabin</Button>
      {
        openForm&&<Modal onClose={()=>setOpenForm(openForm =>!openForm)}><CreateCabinForm onClose={()=>setOpenForm(openForm =>!openForm)}/></Modal>
      }
    </div>
  )
}
