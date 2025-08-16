import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm"
import AddCabin from "../features/cabins/addCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import { useCabins } from "../features/cabins/useCabins";
function Cabins() {
  const {isLoading} = useCabins();
  return (
    <>
      <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <CabinTableOperations/>
    </Row>
    <Row type="vertical">
      <CabinTable/>
      {!isLoading &&  <AddCabin/>}
    </Row>
    </>

  );
}

export default Cabins;
