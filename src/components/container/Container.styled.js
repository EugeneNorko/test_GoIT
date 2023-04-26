import styled from "styled-components";

const StyledContainer = styled.div`
  min-width: 320px;
  padding: 0 15px 0 15px;
  margin: 0 auto 0 auto;

  @media screen and (max-width: 767px) {
    max-width: 500px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export default StyledContainer;
