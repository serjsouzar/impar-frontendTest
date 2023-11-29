import { styled } from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  width: 100%;
  position: relative;
  gap: 20px;
  right: 15px;
  color: #6a1777;
`;

export const InputContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px;
  width: 100%;
  position: relative;
  gap: 40px;
  right: 4px;
`;

export const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin-top: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ButtonContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: right;
  padding-top: 20px;
  position: relative;
  left: 18px;
`

export const Button = styled.button`
  background-color: #e76316;
  color: #fff;
  padding: 10px;
  width: 150px;
  border: none;
  font-size: 16px;
  border-radius: 8px;
  position: relative;
  left: 17px;
  cursor: pointer;
`;
