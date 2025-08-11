import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

export default function AddCabin(){
    return(
        <Modal>
            <Modal.open opens="cabin-form">
                <Button size="medium" variation="primary">Add Cabin</Button>
            </Modal.open>
            <Modal.window name="cabin-form">
                <CreateCabinForm/>
            </Modal.window>
        </Modal>
    )
}

//before using compound component structure

// export default function AddCabin() {
//     const [openForm , setOpenForm]=useState("");
//   return (
//     <div>
//     <Button size="medium" variation="primary" onClick={()=>setOpenForm((openForm)=>!openForm)}>add New Cabin</Button>
//       {
//         openForm&&<Modal onClose={()=>setOpenForm(openForm =>!openForm)}><CreateCabinForm onClose={()=>setOpenForm(openForm =>!openForm)}/></Modal>
//       }
//     </div>
//   )
// }
