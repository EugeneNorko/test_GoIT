import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  font-size: 24px;
  padding: 5px 0 5px 0;
  &.active {
    color: #fff;
  }

  & + & {
    margin-left: 20px;
  }
  &:hover,
  &:focus {
    color: #fff;
  }
`;

export { StyledNavLink, StyledNav };
