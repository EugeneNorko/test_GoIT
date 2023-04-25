import styled from "styled-components";

const StyledContainer = styled.div`
  width: 400px;
  padding: 0 15px 0 15px;
  margin: 0 auto 0 auto;

  @media screen and (max-width: 767px) {
    justify-content: center;
  }
  @media screen and (min-width: 840px) {
    width: 840px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export default StyledContainer;
