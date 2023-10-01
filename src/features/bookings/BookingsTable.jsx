import styled from "styled-components";

import Heading from "../../ui/Heading";

import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";
import useBookings from "./useBookings";
import BookingRow from "./BookingRow";
import { subtractDates } from "../../utils/helpers";
import Button from "../../ui/Button";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { PAGE_COUNT } from "../../utils/constants";

const StyledBookingsTable = styled.div`
  border: 1px solid var(--color-grey-200);
  border-bottom: none;
  margin-top: 1.6rem;
  width: 100%;
  border-radius: 5px;
`;
const TableHeader = styled.header`
  display: grid;
  padding: 1.8rem 2.5rem;
  gap: 3.5rem;
  grid-template-columns: 0.7fr 2.2fr 2.8fr 1.5fr 1fr 0.5fr;
`;
const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Footer = styled.footer`
  margin-top: -2.2rem;
  padding: 2rem;
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
  margin-bottom: 3rem;
  & span {
    font-weight: 600;
  }
  border-bottom: 1px solid var(--color-grey-200);
  border-left: 1px solid var(--color-grey-200);
  border-right: 1px solid var(--color-grey-200);
  border-bottom-left-radius: var(--border-radius-md);
  border-bottom-right-radius: var(--border-radius-md);
`;

function BookingsTable() {
  const { bookings, isLoading, page, count, pageCount } = useBookings();

  const [searchParams, setSearchParams] = useSearchParams();
  const filterType = searchParams.get("status") || "all";
  const sortType = searchParams.get("sortBy") || "startDate-asc";

  if (isLoading) return <Spinner />;
  function handlePrevious() {
    searchParams.set("page", page - 1);
    setSearchParams(searchParams);
  }
  function handleNext() {
    searchParams.set("page", page + 1);
    setSearchParams(searchParams);
  }

  let filteredBookings = bookings;

  if (filterType === "all") filteredBookings = bookings;
  if (filterType === "checked-out")
    filteredBookings = bookings.filter(
      (booking) => booking.status === "checked-out"
    );
  if (filterType === "checked-in")
    filteredBookings = bookings.filter(
      (booking) => booking.status === "checked-in"
    );
  if (filterType === "unconfirmed")
    filteredBookings = bookings.filter(
      (booking) => booking.status === "unconfirmed"
    );
  if (sortType === "startDate-asc")
    filteredBookings.sort((a, b) => subtractDates(b.startDate, a.startDate));
  if (sortType === "startDate-desc")
    filteredBookings.sort((a, b) => subtractDates(a.startDate, b.startDate));
  if (sortType === "totalPrice-low")
    filteredBookings.sort((a, b) => a.totalPrice - b.totalPrice);
  if (sortType === "totalPrice-high")
    filteredBookings.sort((a, b) => b.totalPrice - a.totalPrice);
  const curPageCount =
    filteredBookings.length < 10 && page === 1 ? 1 : pageCount;
  return (
    <>
      <StyledBookingsTable>
        <TableHeader>
          <Heading type="medium">Cabin</Heading>
          <Heading type="medium">Guest</Heading>
          <Heading type="medium">Dates</Heading>
          <Heading type="medium">Status</Heading>
          <Heading type="medium">Amount</Heading>
        </TableHeader>
        {filteredBookings.map((booking) => (
          <BookingRow key={booking.id} booking={booking} />
        ))}
      </StyledBookingsTable>
      {curPageCount > 1 && (
        <Footer>
          <p>
            Showing <span>{(page - 1) * PAGE_COUNT + 1}</span> to{" "}
            <span>{page * PAGE_COUNT > count ? count : page * PAGE_COUNT}</span>{" "}
            of <span>{count}</span> results
          </p>
          <ButtonDiv>
            <Button
              type="pagination"
              $side="previous"
              disabled={page === 1}
              onClick={handlePrevious}
            >
              <HiChevronLeft />
              Previous
            </Button>
            <Button
              type="pagination"
              $side="next"
              disabled={pageCount === page}
              onClick={handleNext}
            >
              Next
              <HiChevronRight />
            </Button>
          </ButtonDiv>
        </Footer>
      )}
    </>
  );
}

export default BookingsTable;
