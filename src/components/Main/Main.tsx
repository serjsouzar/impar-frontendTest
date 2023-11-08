import React from "react";
import { Container, HeaderMain, MainContainer, SearchContainer } from "./styles";

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <SearchContainer>
          <input type="search" placeholder="Digite aqui sua busca..." />
          <img src={require("./../../assets/lupa.png")} alt="lupa" />
        </SearchContainer>
      </Container>

      <HeaderMain>
        <h2>Resultado de busca</h2>
        <button>Novo Card</button>
      </HeaderMain>
    </MainContainer>
  );
};

export default Main;
