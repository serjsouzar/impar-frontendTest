import React, { useState } from "react";
import { CardContainer, Container, HeaderMain, MainContainer, SearchContainer } from "./styles";
import Card from "../Card/Card";
import { pokeProps, FileState } from "../../types/types";

import { TemporaryDrawer } from "../TemporaryDrawer/TemporaryDrawer";


const Main = ({pokemon}: {pokemon: pokeProps[]}) => {  

  const [open, setOpen] =  React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  const [fileState, setFileState] = useState<FileState>({ file: undefined });
  const [component, setComponent] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    if (e.target.files && e.target.files.length > 0) {
      const file = URL.createObjectURL(e.target.files[0]);
      setFileState({ file });
    }
    setComponent(true)
  };


  return (
    <MainContainer>
      <Container>
      <TemporaryDrawer open={open} onClose={toggleDrawer(false)} handleChange={handleChange}/>   
        <SearchContainer>
          <input type="search" placeholder="Digite aqui sua busca..." />
          <img src={require("./../../assets/lupa.png")} alt="lupa" />
        </SearchContainer>
      </Container>

      <HeaderMain>
        <h2>Resultado de busca</h2>
        <button onClick={toggleDrawer(true)}>Novo Card</button>
      </HeaderMain>

      <CardContainer>
        {component === true ? <Card name="Sergio" fileState={fileState}/> : ""}
        {pokemon.map((pkm) => (
          <Card name={pkm.name} key={pkm.id} sprites={pkm.sprites} types={pkm.types}/>
        ))}
      </CardContainer>   

      
    </MainContainer>
  );
};

export default Main;
