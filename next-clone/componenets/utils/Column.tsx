import styled from "styled-components";

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Column = ({ children }) => {
  return <ColumnWrapper>{children}</ColumnWrapper>;
};

export default Column;
