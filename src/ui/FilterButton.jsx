import styled, { css } from "styled-components";

const FilterButton = styled.button`
  color: var(--color-grey-700);
  background-color: var(--color-grey-0);
  ${(props) =>
    props.type === "active" &&
    css`
      color: var(--color-grey-0);
      background-color: var(--color-brand-600);
    `}
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.4rem 0.7rem;
  border-radius: 4px;
  &:hover {
    color: var(--color-grey-0);
    background-color: var(--color-brand-600);
  }
`;

export default FilterButton;
