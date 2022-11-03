import { useState } from "react";
import styled from "styled-components";
import Toggle from "../../utils/Toggle";

const ContentsWrapper = styled.section`
  position: relative;
  width: 70%;
  height: 100%;
  border: 1px solid black;
  border-radius: 0.5rem;
  @media screen and (max-width: 960px) {
    flex-direction: row;
    width: 100%;
    height: calc(70% - 2.7rem);
    top: 2.2rem;
    align-items: center;
    margin-top: 0.5rem;
  }
`;

const ContentsMainWrapper = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid blue;
  @media screen and (max-width: 960px) {
  }
`;

const Contents = () => {
  const pages: string[] = ["home", "game", "diary"];
  const [page, setPage] = useState(pages[0]);
  return (
    <ContentsWrapper>
      <ContentsMainWrapper>Contents</ContentsMainWrapper>
      <Toggle buttons={pages} selected={page} propFunc={setPage}></Toggle>
    </ContentsWrapper>
  );
};

export default Contents;
