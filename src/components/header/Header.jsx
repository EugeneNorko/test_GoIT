import React from "react";
import Navigation from "../navigation/Navigation";
import Container from "../container/Container";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#766A92" }}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
