import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
	${reset}
    *{
      box-sizing: border-box;
    }
    html, body{
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      font-family: 'Spoqa Han Sans Neo';
    }
    #root{
      width: 100%;
    }
    a {
      text-decoration: none;
      cursor: pointer;
    }
    button, select {
      cursor: pointer;
      font-family: 'Spoqa Han Sans Neo';
    }
    select {
      height: 32px;
      padding: 4px 8px;
      border: none;
      font-size: 12px;
    }
`;

export default GlobalStyles;
