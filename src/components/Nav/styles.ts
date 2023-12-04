import { styled } from "styled-components";

export const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 0;
  align-items: center;
  flex-direction: column;
  bottom: 50px;
  background-image: url(${require("../../assets/fundo_busca.png")});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 285px;
  transition: all ease 0.2s;

  @media (max-width: 1130px) {
    bottom: 0px;
    height: 186px;
    background-size: 100%;    
  }

  @media (max-width: 588px) {
    height: 102px;
    background-size: 100% 100%;
  }
`;

