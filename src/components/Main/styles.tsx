import { styled } from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 950px;
  position: relative;
  bottom: 220px;
  transition: all ease 0.2s;

  @media (max-width: 1130px) {
    bottom: 145px;
    width: 685px;
  }

  @media (max-width: 588px) {
    display: flex;
    justify-content: center;
    bottom: 85px;
  }
`;

export const SearchContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;

  input {
    width: 90%;
    border: none;
    border-radius: 8px;
    outline: none;
    font-size: 18px;
  }

  img {
    width: 40px;
    height: 40px;
    padding-bottom: 5px;
    cursor: pointer;
  }

  @media (max-width: 588px) {
    padding: 4px;
    width: 270px;
  }
`;

export const HeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
  width: 950px;
  position: relative;
  bottom: 95px;

  h2 {
    font-weight: 200;
    color: #6a1777;
    position: relative;
    left: 7px;
  }

  button {
    background-color: #e76316;
    color: #fff;
    padding: 10px;
    width: 150px;
    border: none;
    font-size: 16px;
    border-radius: 8px;
    position: relative;
    left: 17px;
  }

  @media (max-width: 1130px) {
    width: 685px;
    bottom: 25px;
  }
`

export const CardContainer = styled.div`
  max-width: 980px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`