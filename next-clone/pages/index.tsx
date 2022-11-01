import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Header from "../componenets/headers/Header";
import Layout from "../componenets/layouts/Layout";
import MainArea from "../componenets/main/MainArea";
import styles from "../styles/Home.module.css";

const Div = styled.div`
  position: absolute;
  top: 4rem;
  left: 4rem;
  width: 71rem;
  height: 46rem;
  @media screen and (max-width: 1450px) {
    width: 56rem;
    height: 36rem;
  }
  @media screen and (max-width: 960px) {
    width: 26rem;
    height: 66rem;
  }
`;

export default function Home() {
  return (
    <Div>
      <Header></Header>
      <MainArea></MainArea>
    </Div>
  );
}
