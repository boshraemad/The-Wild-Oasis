import styled from "styled-components";
import {formatCurrency} from "../../utils/helpers"
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabins";
import { useCreateCabin } from "./useCreateCabin";
import { BiSolidDuplicate } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { deleteCabin } from "../../services/apiCabins";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const FlexContainer=styled.div`
  display:flex;
  gap:4px;
`
export default function CabinRow({cabin}) {
  const {id:cabinId ,image , name , maxCapacity , regularPrice , discount } = cabin;
  const {isDeleting , deleteCabins}=useDeleteCabin(cabinId);
  const {isCreating , creatingCabin}=useCreateCabin();

  const handleDuplicating=()=>{
    const newCabin={
      name:`cope of ${name}`,
      maxCapacity 
      , regularPrice
      , discount
      ,image
    }

    creatingCabin(newCabin);
  }
  return (
<>
    <TableRow role="row">
        <Img src={image}/>
        <Cabin>{name}</Cabin>
        <Cabin>{maxCapacity}</Cabin>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{formatCurrency(discount)}</Discount>
       <FlexContainer>
       <button disabled={isCreating} onClick={()=>handleDuplicating()}><BiSolidDuplicate/></button>
       <Modal>
        <Modal.open opens="delete">
        {/* onClick={cabinId=>deleteCabins(cabinId)}
        disabled={isDeleting} */}
        <button><MdDelete/></button>
        </Modal.open>
        <Modal.window name="delete">
          <ConfirmDelete resourceName="Cabin" disabled={isDeleting} onConfirm={deleteCabins}/>
        </Modal.window>
       </Modal>
       <Modal>
        <Modal.open opens="edit">
        <button><MdEdit/></button>
        </Modal.open>
        <Modal.window name="edit">
        <CreateCabinForm editCabin={cabin}/>
        </Modal.window>
       </Modal>
       </FlexContainer>
    </TableRow>
</>
  )
}
