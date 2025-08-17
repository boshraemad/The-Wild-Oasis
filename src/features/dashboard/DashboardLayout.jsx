import styled from "styled-components";
import useRecentBookings from "../dashboard/useRecentBookings";
import useRecentStays from "./useRecentStays";
import Spinner from "../../ui/Spinner"
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;


export default function DashboardLayout({children}) {
  const {bookings , isLoading:isLoading1} = useRecentBookings();
  const {recentStays , stays , isLoading:isLoading2} = useRecentStays();
  console.log(bookings , stays , recentStays)
  if(isLoading1 || isLoading2) return;
  return (
    <StyledDashboardLayout>
      {children}
    </StyledDashboardLayout>
  )
}
