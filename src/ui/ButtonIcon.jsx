import styled, { css } from "styled-components";

const StyledButtonIcon = styled.button`
  height: 3.4rem;
  width: 3.4rem;
  background-color: var(--color-grey-0);
  border-radius: 5px;
  svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
    transition: all 0.3s;
  }
  ${(props) =>
    props.variant === "black" &&
    css`
      svg {
        color: var(--color-grey-600);
      }
    `}
  &:hover {
    background-color: var(--color-grey-100);
  }
`;

function ButtonIcon({ children, onClick }) {
  return <StyledButtonIcon onClick={onClick}>{children}</StyledButtonIcon>;
}

export default ButtonIcon;
