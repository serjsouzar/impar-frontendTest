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
`;

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

export const UploadInput = styled.div`
  width: 100%;

  .input_file {
    border: 1px solid #ccc;
    position: relative;
    text-decoration: none;
    width: 90%;    
    padding: 6px;
    border-radius: 5px;
    cursor: pointer;
  }

  .input_file::before {
    font-size: 12px;
    color: #666;
    text-align: left;
    position: absolute;
    top: 50%;
    left: 75px;
    transform: translate(-50%, -50%);
  }

  input[type="file"]::file-selector-button {
    position: relative;
    left: 75%;
    border: 1px solid #e76316;
    border-radius: 5px;
    padding: 10px;
    color: #e76316;
    background: #fff;    
    cursor: pointer;
  }
`;

