import Image from "next/image";
import styled from "styled-components";
import boardImage from "../../public/images/board.png";
import { boardgrey, skyblue } from "../../theme/theme";
import Center from "../utils/Center";
import Header from "../headers/Header";

const Outline = styled.div`
  width: 75rem;
  height: 50rem;
  @media screen and (max-width: 1450px) {
    width: 60rem;
    height: 40rem;
  }
  @media screen and (max-width: 960px) {
    width: 30rem;
    height: 70rem;
  }
  margin: 2rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  background-color: ${skyblue};
  z-index: -1;
`;

const Middleline = styled.div`
  width: 73rem;
  height: 48rem;
  border: 1px dashed white;
  border-radius: 0.5rem;
  @media screen and (max-width: 1450px) {
    width: 58rem;
    height: 38rem;
  }
  @media screen and (max-width: 960px) {
    width: 28rem;
    height: 68rem;
  }
`;

const Inline = styled.div`
  width: 72rem;
  height: 47rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  background-color: ${boardgrey};
  @media screen and (max-width: 1450px) {
    width: 57rem;
    height: 37rem;
  }
  @media screen and (max-width: 960px) {
    width: 27rem;
    height: 67rem;
  }
`;

const Board = () => {
  return (
    <Outline>
      <Center>
        <Middleline>
          <Center>
            <Inline></Inline>
          </Center>
        </Middleline>
      </Center>
    </Outline>
  );
};

export default Board;
