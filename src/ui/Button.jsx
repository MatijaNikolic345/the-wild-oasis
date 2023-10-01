import styled, { css } from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  font-size: 1.4rem;
  font-weight: 500;

  &:hover {
    color: var(--color-brand-50);
    background-color: var(--color-brand-700);
  }
  ${(props) =>
    props.variation === "secondary" &&
    css`
      color: var(--color-grey-600);
      background: var(--color-grey-0);
    `}
  ${(props) =>
    props.type === "medium" &&
    css`
      padding: 1.2rem 1.6rem;
      color: var(--color-brand-50);
      background-color: var(--color-brand-600);
    `}
  ${(props) =>
    props.type === "small" &&
    css`
      padding: 0.8rem 1.2rem;
      color: var(--color-brand-50);
      background-color: var(--color-brand-600);
    `}
      ${(props) =>
    props.type === "very-small" &&
    css`
      padding: 0.4rem 0.2rem;
      font-size: 1.2rem;
      text-transform: uppercase;
      color: var(--color-brand-50);
      background-color: var(--color-brand-600);
    `}
    ${(props) =>
    props.type === "pagination" &&
    css`
      padding: 0.8rem 1.2rem;
      color: var(--color-grey-700);
      background-color: var(--color-grey-50);
      box-shadow: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      & svg {
        height: 1.7rem;
        width: 1.7rem;
      }
    `}
    ${(props) =>
    props.$side === "previous" &&
    css`
      padding-left: 0.5rem;
    `}
    ${(props) =>
    props.$side === "next" &&
    css`
      padding-right: 0.5rem;
    `}
`;
Button.defaultProps = {
  type: "medium",
};

export default Button;
