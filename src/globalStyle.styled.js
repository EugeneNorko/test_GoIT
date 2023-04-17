import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
    &:hover, &:focus {
        color: #373737;
    }
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style:none;
  }
`;

export default GlobalStyle;
