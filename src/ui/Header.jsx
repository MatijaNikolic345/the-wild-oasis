import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineMoon, HiOutlineSun, HiOutlineUser } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkMode";
import { useNavigate } from "react-router-dom";
import Logout from "../features/authentication/Logout";
import UserAvatar from "../features/authentication/UserAvatar";
const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.4rem 4.2rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 3rem;
  justify-content: flex-end;
  align-items: center;
`;
const ButtonDiv = styled.div`
  display: flex;
  gap: 0.6rem;
`;

function Header() {
  const { isDark, setIsDark } = useDarkMode();
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <UserAvatar></UserAvatar>
      <ButtonDiv>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
        <ButtonIcon onClick={() => setIsDark((isDark) => !isDark)}>
          {isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
        </ButtonIcon>
        <Logout></Logout>
      </ButtonDiv>
    </StyledHeader>
  );
}

export default Header;
