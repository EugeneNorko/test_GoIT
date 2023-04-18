import React from "react";
import { ContainerFooter, StyledParagragh, StyledLink } from "./Footer.styled";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#766A92", marginBottom: "0px" }}>
      <ContainerFooter>
        <StyledParagragh>Contact to us</StyledParagragh>
        <StyledLink href="tel:+380661112244" rel="noopener noreferrer">
          +38 066 111 22 44
        </StyledLink>
      </ContainerFooter>
    </footer>
  );
};

export default Footer;
