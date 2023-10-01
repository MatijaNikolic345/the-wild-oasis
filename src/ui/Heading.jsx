import styled, { css } from "styled-components";

const Heading = styled.h2`
  ${(props) =>
    props.type === "large" &&
    css`
      color: var(--color-grey-700);
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.type === "basic" &&
    css`
      color: var(--color-grey-600);
      font-size: 2rem;
      font-weight: 500;
    `}
      ${(props) =>
    props.type === "basic2" &&
    css`
      color: var(--color-grey-700);
      font-size: 2rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.type === "medium" &&
    css`
      color: var(--color-grey-600);
      font-size: 1.4rem;
      font-weight: 600;
      text-transform: uppercase;
    `}
`;
Heading.defaultProps = {
  type: "large",
};

export default Heading;
