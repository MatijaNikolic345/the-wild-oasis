import styled from "styled-components";

const StyledFormRow = styled.div`
  width: 100%;
  padding: 1.2rem 2rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: grid;
  gap: 1rem;
  grid-template-columns: 24rem 1.05fr 1fr;
  align-items: center;
  &:has(button) {
    display: flex;
    justify-content: flex-end;
  }
  &:last-of-type {
    border-bottom: none;
  }
`;
const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;
function FormRow({ error, children }) {
  return (
    <StyledFormRow>
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
