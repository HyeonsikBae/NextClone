import Head from "next/head";
import styled from "styled-components";
import bg from "../../public/images/back_ground.png";
import Image from "next/image";
import Background from "./Background";
import Board from "./Board";
import Header from "../headers/Header";

export const siteTitle = "next clone";

const LayoutWrapper = styled.div`
  position: absolute;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Background />
      <Board />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
