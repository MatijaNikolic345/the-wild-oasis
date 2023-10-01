import styled from "styled-components";

import Row from "../../ui/Row";

import BookingsHeading from "./BookingsHeading";
import BookingsTable from "./BookingsTable";

const StyledBookingsLayout = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
`;

function BookingsLayout() {
  return (
    <StyledBookingsLayout>
      <Row type="vertical">
        <BookingsHeading />
        <Row type="vertical">
          <BookingsTable />
        </Row>
      </Row>
    </StyledBookingsLayout>
  );
}

export default BookingsLayout;
