import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { HiArrowUpOnSquare } from "react-icons/hi2";
import { useCheckout } from "../check-in-out/useCheckout";

import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteBooking } from "./useDeleteBooking";
import Empty from "../../ui/Empty";
import { useState } from "react";
import ButtonDelete from "../../ui/ButtonDelete";
import ButtonCancel from "../../ui/ButtonCancel";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const moveBack = useMoveBack();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  if (!booking) return <Empty resourceName="booking" />;

  const { status, id: bookingId } = booking;
  function handleDeleteBooking() {
    deleteBooking(bookingId);
  }
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="vertical2">
        <Row type="horizontal">
          <HeadingGroup>
            <Heading as="h1">Booking #{bookingId}</Heading>
            <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
          </HeadingGroup>
          <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
        </Row>
      </Row>
      <Row type="vertical2">
        <BookingDataBox booking={booking} />
      </Row>
      <Row type="vertical2">
        <ButtonGroup>
          {status === "unconfirmed" && (
            <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
              Check in
            </Button>
          )}

          {status === "checked-in" && (
            <Button
              onClick={() => checkout(bookingId)}
              disabled={isCheckingOut}
            >
              <HiArrowUpOnSquare />
              Check out
            </Button>
          )}

          <ButtonDelete onClick={() => setConfirmDelete(!confirmDelete)}>
            Delete booking
          </ButtonDelete>
          {confirmDelete && (
            <ConfirmDelete
              confirmDelete={confirmDelete}
              setConfirmDelete={setConfirmDelete}
              isDeleting={isDeleting}
              handleDelete={handleDeleteBooking}
            ></ConfirmDelete>
          )}

          <ButtonCancel onClick={moveBack}>Back</ButtonCancel>
        </ButtonGroup>
      </Row>
    </>
  );
}

export default BookingDetail;
