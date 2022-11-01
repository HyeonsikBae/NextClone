import styled from "styled-components";

const ContentsWrapper = styled.section`
  width: 70%;
  height: 100%;
  border: 1px solid black;
  border-radius: 0.5rem;
  @media screen and (max-width: 960px) {
    flex-direction: row;
    width: 100%;
    height: 70%;
    align-items: center;
    margin-top: 0.5rem;
  }
`;

const Contents = () => {
  return <ContentsWrapper>Contents</ContentsWrapper>;
};

export default Contents;
