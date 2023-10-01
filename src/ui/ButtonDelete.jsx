import styled from "styled-components";

const ButtonDelete = styled.button`
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  color: var(--color-red-100);
  background: var(--color-red-700);
  border: 1px solid var(--color-grey-200);
  &:hover {
    background-color: var(--color-red-800);
  }
`;
export default ButtonDelete;
