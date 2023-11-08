
import { styled } from "styled-components";

export const Container = styled.header`
  width: 100%;
  background: linear-gradient(90deg, rgba(106,23,119,1) 38%, rgba(168,37,112,1) 100%);
  height: 60px;
  z-index: 1;
  position: relative;
  transition: all ease 0.2s;
  
  img {
    padding: 10px 
  }

  @media (max-width: 768px) {
    height: 56px;
  }
`;