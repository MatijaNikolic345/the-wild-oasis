import styled from "styled-components";
import Logo from "./Logo";
import PageNav from "./PageNav";
import Uploader from "../data/Uploader";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  grid-row: 1/-1;
  border-right: 1px solid var(--color-grey-100);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <PageNav />
      <Uploader />
    </StyledSidebar>
  );
}

export default Sidebar;
