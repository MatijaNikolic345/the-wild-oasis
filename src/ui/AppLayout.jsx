import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  width: 100%;
  height: 100dvh;
`;
const Main = styled.main`
  background-color: var(--color-grey-50);
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: 3.4rem 3rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Sidebar />
    </StyledAppLayout>
  );
}

export default AppLayout;
