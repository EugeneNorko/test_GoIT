import React from "react";
import { ContainerMain, TitleMain, LinkMain } from "./HomePage.styled";
const HomePage = () => {
  return (
    <section style={{ paddingTop: "100px" }}>
      <ContainerMain>
        <TitleMain>Pleased to meet you on my page. Be happy!</TitleMain>
        <LinkMain to="tweets">Go to tweets</LinkMain>
      </ContainerMain>
    </section>
  );
};
export default HomePage;
