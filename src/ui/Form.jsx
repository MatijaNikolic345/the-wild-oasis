import styled, { css } from "styled-components";

const Form = styled.form`
  width: 80rem;
  overflow: hidden;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  padding: 2.4rem 4rem;

  ${(props) =>
    props.type === "login" &&
    css`
      width: 50rem;
      margin: 0 auto;
      background-color: var(--color-grey-0);
      padding: 2.5rem 3.3rem;
      border-radius: 5px;
      border: 1px solid var(--color-grey-100);
    `}
  ${(props) =>
    props.type === "regular" &&
    css`
      /* Box */
      width: 120rem;
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}
`;
export default Form;
