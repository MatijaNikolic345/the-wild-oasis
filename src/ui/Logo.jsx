import styled, { css } from "styled-components";
import { useDarkMode } from "../context/DarkMode";

const StyledLogo = styled.img`
  width: 64%;
  ${(props) =>
    props.type === "login" &&
    css`
      width: 15rem;
    `}
`;

function Logo({ type = null }) {
  const { isDark } = useDarkMode();
  const src = isDark === false ? "/logo-light.png" : "/logo-dark.png";
  return <StyledLogo type={type} src={src} alt="Logo"></StyledLogo>;
}

export default Logo;
