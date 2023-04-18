import styled from "styled-components";
import StyledContainer from "../container/Container.styled";

const ContainerFooter = styled(StyledContainer)`
  min-height: 100px;
  display: flex;
  align-items: center;
`;
const StyledParagragh = styled.p`
  font-size: 24px;
`;

const StyledLink = styled.a`
  display: block;
  font-size: 24px;
  padding: 5px 0 5px 0;
  margin-left: 20px;

  &:hover,
  &:focus {
    color: white;
  }
`;
export { ContainerFooter, StyledParagragh, StyledLink };
