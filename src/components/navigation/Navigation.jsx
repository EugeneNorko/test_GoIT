import React from "react";
import { StyledNavLink, StyledNav } from "./Navigation.styled";

const Navigation = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/" rel="noopener noreferrer">
        Home
      </StyledNavLink>
      <StyledNavLink to="/tweets" rel="noopener noreferrer">
        Tweets
      </StyledNavLink>
    </StyledNav>
  );
};

export default Navigation;
