import { format, isToday } from "date-fns";
import styled from "styled-components";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import Tag from "../../ui/Tag";
import Menues from "../../ui/Menues";
import {
  HiEye,
  HiMiniArrowDownOnSquare,
  HiMiniArrowUpOnSquare,
  HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useDeleteBooking } from "./useDeleteBooking";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";

const StyledBookingRow = styled.div`
  height: 7rem;
  display: grid;
  position: relative;
  grid-template-columns: 0.7fr 2.2fr 2.8fr 1.5fr 1fr 0.5fr;
  gap: 3.5rem;
  background-color: var(--color-grey-0);
  color: var(--color-grey-600);
  font-size: 1.4rem;
  align-items: center;
  padding: 0rem 2.5rem;

  border-top: 1px solid var(--color-grey-100);
`;
const Text = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  font-family: Sono;
`;
const Price = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  font-family: Sono;
`;
const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

/* guests: { fullName: guestName, email },
cabins: { name: cabinName }, */
function BookingRow({
  booking: {
    id: bookingId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  const navigate = useNavigate();
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const [confirmDelete, setConfirmDelete] = useState(false);
  return (
    <StyledBookingRow>
      <Text>{cabinName}</Text>
      <Stacked>
        <span>{guestName}</span> <span>{email}</span>
      </Stacked>
      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>
      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
      <Price>{formatCurrency(totalPrice)}</Price>
      <Menues>
        <Menues.Menu></Menues.Menu>
        <Menues.Options>
          <Menues.Option onClick={() => navigate(`/bookings/${bookingId}`)}>
            <HiEye /> <span>See details</span>
          </Menues.Option>
          {status === "unconfirmed" && (
            <Menues.Option onClick={() => navigate(`/checkin/${bookingId}`)}>
              <HiMiniArrowUpOnSquare /> <span>Check in</span>
            </Menues.Option>
          )}
          {status === "checked-in" && (
            <Menues.Option>
              <HiMiniArrowDownOnSquare /> <span>Check out</span>
            </Menues.Option>
          )}
          <Menues.Option onClick={() => setConfirmDelete(!confirmDelete)}>
            <HiTrash></HiTrash>
            <span>Delete booking</span>
          </Menues.Option>
          {confirmDelete && (
            <ConfirmDelete
              confirmDelete={confirmDelete}
              setConfirmDelete={setConfirmDelete}
              isDeleting={isDeleting}
              handleDelete={() => deleteBooking(bookingId)}
            ></ConfirmDelete>
          )}
        </Menues.Options>
      </Menues>
    </StyledBookingRow>
  );
}

export default BookingRow;
