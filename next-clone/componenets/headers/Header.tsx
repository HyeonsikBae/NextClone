import styled from "styled-components";
import Setting from "./Setting";
import Title from "./Title";
import Visitor from "./Visitor";

const HeaderWrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 8%;
  border: 1px solid black;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Visitor></Visitor>
      <Title title="사람좋은 사람들, 싸이월드"></Title>
      <Setting></Setting>
    </HeaderWrapper>
  );
};

export default Header;
