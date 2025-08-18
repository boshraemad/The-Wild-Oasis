import styled from "styled-components";
import useRecentBookings from "../dashboard/useRecentBookings";
import useRecentStays from "./useRecentStays";
import { useCabins } from "../cabins/useCabins";
import Spinner from "../../ui/Spinner"
import Stats from "./Stats";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;


export default function DashboardLayout({children}) {
  const {bookings , isLoading:isLoading1 , numDays} = useRecentBookings();
  const {confirmedStays , stays , isLoading:isLoading2} = useRecentStays();
  const {data} = useCabins();

  if(isLoading1 || isLoading2) return;
  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings}  numDays={numDays} confirmedStays={confirmedStays} cabinsNum={data?.length}/>
    </StyledDashboardLayout>
  )
}
