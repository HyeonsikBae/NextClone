import styled from "styled-components";
import Contents from "./contents/Contents";
import Profile from "./profile/Profile";

const MainWrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 92%;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const MainArea = () => {
  return (
    <MainWrapper>
      <Profile></Profile>
      <Contents></Contents>
    </MainWrapper>
  );
};

export default MainArea;
