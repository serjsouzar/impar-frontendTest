import { styled } from "styled-components";

export const Wrapper = styled.div`
.exitIcon {
  background-color: transparent;
  border: none;
  position: absolute;
  left: 93%;
  top: -27px;
  cursor: pointer;
}
`
  

export const Container = styled.div`
  width: 500px;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 15px;  
  position: relative;
  right: 16px;

  button {
    background-color: #fff;
    color: red;
    padding: 10px;
    width: 150px;
    border: 3px solid red;
    font-size: 16px;
    border-radius: 8px;
    position: relative;
    left: 17px;
    cursor: pointer;
    font-weight: 600;

    &:hover{
      background-color: red;
      color: #fff
    }
  }
`
