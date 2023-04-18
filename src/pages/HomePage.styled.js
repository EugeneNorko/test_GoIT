import styled from "styled-components";
import { Link } from "react-router-dom";
import StyledContainer from "../components/container/Container.styled";

const ContainerMain = styled(StyledContainer)``;

const TitleMain = styled.h1`
  text-align: center;
  font-size: 35px;
  margin-bottom: 30px;
`;
const LinkMain = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0 auto;
  min-height: 40px;
  width: 150px;
  border: 1px solid #471ca9;
  border-radius: 5px;
  font-weight: 700;

  &:hover,
  &:focus {
    background-color: rgb(71, 28, 169);
    color: #fff;
  }
`;
export { ContainerMain, TitleMain, LinkMain };
