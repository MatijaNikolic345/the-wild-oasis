import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  return (
    <>
      <Row type="vertical2">
        <Row type="horizontal">
          <Heading as="h1">Dashboard</Heading>
          <DashboardFilter />
        </Row>
      </Row>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
