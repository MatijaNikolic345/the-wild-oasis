import styled from "styled-components";
import { useRecentStays } from "./useRecentStays";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";

import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";
import useCabins from "../cabins/useCabins";
import Row from "../../ui/Row";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const { confirmedStays, isLoading: isLoading2, numDays } = useRecentStays();
  const { data: cabins, isLoading: isLoading3 } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <Row type="vertical2">
      <StyledDashboardLayout>
        <Stats
          bookings={bookings}
          confirmedStays={confirmedStays}
          numDays={numDays}
          cabinCount={cabins.length}
        />

        <TodayActivity />
        <DurationChart confirmedStays={confirmedStays} />
        <SalesChart bookings={bookings} numDays={numDays} />
      </StyledDashboardLayout>
    </Row>
  );
}

export default DashboardLayout;
