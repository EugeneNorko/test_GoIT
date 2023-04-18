import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}
  body {
    margin: 0;
    color: #471CA9;
    font-family: 'Montserrat', 'sans-serif';
    font-size:18px;
  }

  a {
    text-decoration: none;
    color: #471CA9;
    cursor: pointer;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style:none;
  }

  h1, h2, h3, p {
    margin: 0;
  }
  button {
    cursor:pointer;
  }
  img {
    display:block;
    height:auto;
    width:100%;
  }
`;

export default GlobalStyle;
