import React from "react";
import Nav from "./components/Nav/Nav";
import { GlobalStyle } from "./GlobalStyles";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Main/>
      <GlobalStyle />
    </>
  );
};

export default App;
