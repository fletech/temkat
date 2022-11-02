import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Rubik", sans-serif;
  color: #333333
//font-family: 'Concert One', monospace;
//font-family: "Noto Sans KR", sans-serif;

  //transition: all 0.2s ease-in-out;
}

:root {
  --heading : #6B6E7F;
  --highlight: rgb(67,196,227);
  /* --highlight: #43C4E3; */
  --text-light: #898BA0;
  --text-dark: #404040;
  --white: #FBFBFB;
  --grey: #F4F4F4;
  --alert: #d4371b;
  --saira: "Saira", sans-serif;
  --roboto: "Roboto", sans-serif;
}

html {
  @media (max-width: 600px) {
    font-size: 85%;
  }
}


.App {
  min-height: 100vh;
  width: 100%;
}
`;
