import styled from "styled-components";
import {
  HiOutlineHome,
  HiOutlineCalendarDays,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
const StyledPageNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
`;
const StyledNavLink = styled(NavLink)`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 500;
  width: 100%;
  padding: 1rem 2.4rem;
  justify-content: flex-start;
  color: var(--color-grey-600);
  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-900);
    background-color: var(--color-grey-50);
  }
  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function PageNav() {
  return (
    <StyledPageNav>
      <StyledNavLink to="/dashboard">
        <HiOutlineHome />
        <span>Home</span>
      </StyledNavLink>
      <StyledNavLink to="/bookings">
        <HiOutlineCalendarDays />
        <span>Bookings</span>
      </StyledNavLink>
      <StyledNavLink to="/cabins">
        <HiOutlineHomeModern />
        <span>Cabins</span>
      </StyledNavLink>
      <StyledNavLink to="/users">
        <HiOutlineUsers />
        <span>Users</span>
      </StyledNavLink>
      <StyledNavLink to="/settings">
        <HiOutlineCog6Tooth />
        <span>Settings</span>
      </StyledNavLink>
    </StyledPageNav>
  );
}

export default PageNav;
