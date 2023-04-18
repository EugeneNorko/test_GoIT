import React from "react";
import Navigation from "../navigation/Navigation";
import ContainerHeader from "./Header.styled";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#766A92" }}>
      <ContainerHeader>
        <Navigation />
      </ContainerHeader>
    </header>
  );
};

export default Header;
