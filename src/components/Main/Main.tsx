import React, { useState } from "react";
import {
  CardContainer,
  Container,
  HeaderMain,
  MainContainer,
  SearchContainer,
} from "./styles";

import { pokeProps, FileState, CreatedCard } from "../../types/types";

import { TemporaryDrawer } from "../TemporaryDrawer/TemporaryDrawer";
import Modal from "react-modal";
import ModalComponent from "../ModalComponent/ModalComponent";
import Card from "../Card/Card";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "unset",
    padding: 0,
  },
};

const Main = ({ pokemon }: { pokemon: pokeProps[] }) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  const [fileState, setFileState] = useState<FileState>({ file: undefined });
  const [name, setName] = useState<string>("");
  const [createdCard, setCreatedCard] = useState<CreatedCard[]>([]);
  const [modalIsOpen, setIsOpen] = React.useState<boolean>(false);
  const [clickedID, setClickedID] = useState<number>(0)

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleCreateCard(e: React.FormEvent) {
    e.preventDefault();
    setCreatedCard([...createdCard, { name, fileState, id: Date.now() }]);
    setName("");
    setOpen(!open);
  }

  function handleDeleteCard() {    
    const filteredCards = createdCard.filter((card) => card?.id !== clickedID);
    setCreatedCard(filteredCards)
    closeModal();
  }

  return (
    <MainContainer>
      <Container>
        <TemporaryDrawer
          open={open}
          onClose={toggleDrawer(false)}
          fileState={fileState}
          setFileState={setFileState}
          setName={setName}
          name={name}
          handleCreateCard={handleCreateCard}
        />
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
        {createdCard
          ? createdCard.map((card) => (            
              <>
                <Card
                  id={card.id}
                  key={card.id}
                  name={card.name}
                  fileState={card.fileState}
                  openModal={openModal}
                  closeModal={closeModal}
                  setClickedID={setClickedID}                  
                />

                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                  ariaHideApp={false}
                >
                  <ModalComponent
                    closeModal={closeModal}
                    handleDeleteCard={handleDeleteCard}                    
                  />
                </Modal>
              </>
            ))
          : ""}
        {pokemon.map((pkm) => (
          <Card
            id={pkm.id}
            setClickedID={setClickedID}
            name={pkm.name}
            key={pkm.id}
            sprites={pkm.sprites}
            types={pkm.types}
            openModal={openModal}
            closeModal={closeModal}
          />
        ))}
      </CardContainer>
    </MainContainer>
  );
};

export default Main;
