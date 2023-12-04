import React from "react";
import {
  BtnContainer,
  Container,
  DeleteBtn,
  EditBtn,
  ImageContainer,
  Line,
} from "./styles";
import { pokeProps } from "../../types/types";

const Card = ({ name, sprites, fileState, openModal, closeModal }: pokeProps) => {
  const capitalName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Container>
      <ImageContainer>
        <img
          src={sprites?.other?.dream_world?.front_default || fileState?.file}
          width={80}
          height={80}
          alt={name}
          className="createdCard"
        />

      </ImageContainer>
      <Line />
      <h4>{capitalName}</h4>
      <BtnContainer>
        <DeleteBtn>
          <img src={require("./../../assets/trash1.png")} alt="logo-test" />
          <p onClick={openModal}>Excluir</p>
        </DeleteBtn>
        <EditBtn>
          <img src={require("./../../assets/edit1.png")} alt="logo-test" />
          <p>Editar</p>
        </EditBtn>
      </BtnContainer>
      
    </Container>
  );
};

export default Card;
