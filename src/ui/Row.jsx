import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
    `}
  ${(props) =>
    props.type === "vertical2" &&
    css`
      max-width: 120rem;
      margin: 0px auto;
      display: flex;
      flex-direction: column;
      margin-bottom: 3rem;
    `}
`;
Row.defaultProps = {
  type: "horizontal",
};

export default Row;
