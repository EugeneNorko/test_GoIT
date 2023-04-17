import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  display: block;
  font-size: 24px;
`;

export { StyledLink, StyledNav };
