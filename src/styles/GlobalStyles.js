// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: "Inter", sans-serif;
    overflow-x: hidden;
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
  

  @keyframes heartbeat {
    0%, 100% {
      transform: scale(1);
    }
    14% {
      transform: scale(1.3);
    }
    28% {
      transform: scale(1);
    }
    42% {
      transform: scale(1.3);
    }
    70% {
      transform: scale(1);
    }
  }
`;

export default GlobalStyle;
