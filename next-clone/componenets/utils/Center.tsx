import styled from "styled-components";

const CenterWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Center = ({ children }) => {
  return <CenterWrapper>{children}</CenterWrapper>;
};

export default Center;
