import React from 'react'
import { Container, ModalButtons, ModalContent, ModalText, ModalTrash, Wrapper } from './styles'
import Divider from "@mui/material/Divider";
import trashIcon from "./../../assets/trash.svg"


interface ModalProps {
  closeModal: () => void
}


const ModalComponent = ({closeModal}: ModalProps) => {
  return (
    <Wrapper>
      <button className="exitIcon" onClick={closeModal}><img src={require("./../../assets/exit.png")} alt="exit" /></button>
    <Container>        
          <ModalContent>
            <ModalTrash>
              <img src={trashIcon} alt="trash" height={100} width={100}/>  
            </ModalTrash>
            
            <ModalText>
              <h2>Excluir</h2>
              <p>CERTEZA QUE DESEJA EXCLUIR?</p>
            </ModalText>

            <Divider variant="middle" />

            <ModalButtons>
              <button>Excluir</button>
              <button onClick={closeModal}>Cancelar</button>
            </ModalButtons>
          </ModalContent>      
    </Container>
    </Wrapper>
  )
}

export default ModalComponent