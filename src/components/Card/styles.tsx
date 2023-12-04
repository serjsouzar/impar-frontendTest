import { styled } from "styled-components";

export const Container = styled.div`
  border: 1px solid black;
  max-width: 220px;
  width: 100%;
  height: 250px;
  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.75);
  background-color: #fff;

  h4 {
    color: #777777;
  }


  @media (max-width: 588px) {
    max-width: 158px;
    height: 220px;
  }
`;

export const ImageContainer = styled.div`
  background-color: #f6f4f6;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 15px;

  .createdCard {
    border-radius: 50%;
  }

  @media (max-width: 588px) {
    top: 7px;
  }
`;

export const Line = styled.hr`
  width: 70%;
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeleteBtn = styled.button`
  border-bottom-left-radius: 8px;
  width: 100%;
  height: 27px;
  cursor: pointer;
  font-weight: 600;
  color: #777777;
  border: none;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  filter: grayscale(1);

  &:hover {
    color: #e76316;
    filter: grayscale(0);
  }
`;
export const EditBtn = styled.button`
  border-bottom-right-radius: 8px;
  width: 100%;
  height: 27px;
  cursor: pointer;
  font-weight: 600;
  color: #777777;
  border: none;
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  filter: grayscale(1);

  &:hover {
    color: #e76316;
    filter: grayscale(0);
  }
`;
