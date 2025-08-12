import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import { useMoveBack } from "../../hooks/useMoveBack";
import useBooking from "../bookings/useBooking";
import Spinner from "../../ui/Spinner"
import { useState , useEffect} from "react";
import Checkbox from "../../ui/Checkbox"
import useCheckin from "./useCheckin";
import { useSettings } from "../settings/useSettings";
import { formatCurrency } from "../../utils/helpers";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid , setConfirmPaid]=useState(false);
  const [breakfast , setBreakfast]=useState(false);
  const moveBack = useMoveBack();
  const {data:booking={}, isLoading} = useBooking();
  const {checkingin , isCheckingIn}=useCheckin();
  const {settings , isLoading:isSetting}=useSettings();

  const {
    id:bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  useEffect(()=>{
    setConfirmPaid(booking.isPaid)
  } , [booking])

  function handleCheckin() {
    if(!confirmPaid) return;
    if(breakfast){
      checkingin({bookingId ,breakfast: {
        hasBreakfast: true,
        extraPrice: optionalBreakfast,
        totalPrice: totalPrice + optionalBreakfast,
      }})
    }else{
    checkingin({bookingId , breakfast:{}});
    }
  }

  if(isLoading || isSetting) return <Spinner/>

  const optionalBreakfast = settings.breakfastPrice * numGuests * numNights;
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      {
        !hasBreakfast &&  
        <Box>
        <Checkbox id="breakfast" checked={breakfast} onChange={()=>{setBreakfast(!breakfast);
          setConfirmPaid(false)
        }}>Add Breakfast {" "}{formatCurrency(optionalBreakfast)} </Checkbox>
        </Box>
      }
      <Box>
        <Checkbox id="confirm" checked={confirmPaid} onChange={()=>{setConfirmPaid(!confirmPaid)}} disabled={confirmPaid || isCheckingIn}>I confirm that {guests.fullName} has checked in the amount {breakfast ? formatCurrency(totalPrice + optionalBreakfast) :formatCurrency(totalPrice)} </Checkbox>
      </Box>
      <ButtonGroup>
        {
          booking.status === "unconfirmed" &&  <Button size="small" variation="primary" onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn }>Check in booking #{bookingId}</Button>
        }
        <Button variation="secondary" size="small" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
