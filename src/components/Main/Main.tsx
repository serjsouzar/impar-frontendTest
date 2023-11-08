import React from "react";
import { CardContainer, Container, HeaderMain, MainContainer, SearchContainer } from "./styles";
import Card from "../Card/Card";

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

      <CardContainer>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </CardContainer>
    </MainContainer>
  );
};

export default Main;
