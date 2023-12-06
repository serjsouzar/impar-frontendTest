import {
  BtnContainer,
  Container,
  DeleteBtn,
  EditBtn,
  ImageContainer,
  Line,
  ModalContainer,
} from "./styles";
import { pokeProps } from "../../types/types";
import React from "react";
import Modal from "react-modal";
import './../../overlayStyle.css'

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

const Card = ({ name, sprites }: pokeProps) => {
  const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
  const [modalIsOpen, setIsOpen] = React.useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <Container>
      <ImageContainer>
        <img
          src={sprites?.other?.dream_world?.front_default}
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
          <p onClick={() => openModal()}>Excluir</p>
        </DeleteBtn>
        <EditBtn>
          <img src={require("./../../assets/edit1.png")} alt="logo-test" />
          <p onClick={() => openModal()}>Editar</p>
        </EditBtn>
      </BtnContainer>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        overlayClassName="Overlay"
      >
        <ModalContainer>
        <button className="exitIcon" onClick={closeModal}><img src={require("./../../assets/exit.png")} alt="exit" /></button>  
        <h3>Somente cards criados podem ser excluidos ou editados!</h3>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default Card;
