import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  body{    
    background-color: #f6f4f6;
    overflow-x: hidden;

    @media (max-width: 588px) {
      overflow-x: hidden;
  }
  }
` 