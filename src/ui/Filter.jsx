import styled from "styled-components";

const StyledFilter = styled.div`
  display: flex;
  gap: 0.6rem;
  background-color: var(--color-grey-0);
  color: var(--color-grey-700);
  padding: 0.5rem;
  border: 1px solid var(--color-grey-100);
  border-radius: 5px;
  box-shadow: var(--shadow-sm);
`;

function Filter({ children }) {
  return <StyledFilter>{children}</StyledFilter>;
}

export default Filter;
