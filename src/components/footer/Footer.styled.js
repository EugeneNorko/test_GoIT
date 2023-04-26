import styled from "styled-components";
import StyledContainer from "../container/Container.styled";

const ContainerFooter = styled(StyledContainer)`
  min-height: 100px;
  padding: 20px;
  font-size: 18px;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    font-size: 24px;
  }
`;

const StyledLink = styled.a`
  display: block;
  font-size: 18px;
  padding: 5px 0 5px 0;

  &:hover,
  &:focus {
    color: white;
  }

  @media screen and (min-width: 768px) {
    margin-left: 20px;
    font-size: 24px;
  }
`;
export { ContainerFooter, StyledLink };
