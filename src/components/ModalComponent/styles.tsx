import { styled } from "styled-components";

export const Wrapper = styled.div`
.exitIcon {
  background-color: transparent;
  border: none;
  position: relative;
  left: 90%;
  bottom: 10%;
}
`
  

export const Container = styled.div`
  width: 500px;
  height: 450px;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ModalTrash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #ccc;
  background-color: #f6f4f6;
`

export const ModalText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h2{
    color: red;
  }

  p{
    font-size: 13px;
  }
`

export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
