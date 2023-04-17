import React from "react";
import { StyledLink, StyledNav } from "./Navigation.styled";

const Navigation = () => {
  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/tweets">Tweets</StyledLink>
    </StyledNav>
  );
};

export default Navigation;
