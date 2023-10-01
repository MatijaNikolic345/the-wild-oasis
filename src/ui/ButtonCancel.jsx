import styled from "styled-components";

const ButtonCancel = styled.button`
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  color: var(--color-grey-600);
  background: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  &:hover {
    background-color: var(--color-grey-100);
  }
`;
export default ButtonCancel;
