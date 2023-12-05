import React, { useState } from "react";
import {
  CardContainer,
  Container,
  HeaderMain,
  MainContainer,
  SearchContainer,
} from "./styles";

import { pokeProps, FileState, CreatedCard, CardType } from "../../types/types";

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

  const defaultCard: CardType = {
    name: "",
    fileState: fileState,
    id: 0,
  };

  const [newCard, setNewCard] = useState<CardType>(defaultCard);
  const [modalIsOpen, setIsOpen] = React.useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleCreateCard(e: React.FormEvent) {
    e.preventDefault();
    if (name && fileState) setNewCard({ name, fileState, id: Date.now() });
    setCreatedCard([...createdCard, { name, fileState, id: Date.now() }]);
    setName("");
    setOpen(!open);
  }

  function handleDeleteCard(id: number) {
    const newCreatedCards = createdCard.filter((card) => card.id !== id);
    setCreatedCard(newCreatedCards)
    closeModal();
  }

  console.log(createdCard)

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
                  name={card.name}
                  fileState={card.fileState}
                  openModal={openModal}
                  closeModal={closeModal}
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
                    newCard={card}
                  />
                </Modal>
              </>
            ))
          : ""}
        {pokemon.map((pkm) => (
          <Card
            name={pkm.name}
            key={pkm.id}
            sprites={pkm.sprites}
            types={pkm.types}
          />
        ))}
      </CardContainer>
    </MainContainer>
  );
};

export default Main;
