import { useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm"
function Cabins() {
  const [openForm , setOpenForm]=useState("");

  return (
    <>
      <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>
    <Row type="vertical">
      <CabinTable/>
      <button onClick={()=>setOpenForm((openForm)=>!openForm)}>add New Cabin</button>
      {
        openForm&&<CreateCabinForm/>
      }
    </Row>
    </>

  );
}

export default Cabins;
