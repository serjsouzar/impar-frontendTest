import * as React from "react";

import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { Button, ButtonContainer, Input, InputContainer, TitleContainer } from "./styles";

interface TemporaryDrawerProps {
  open: boolean;
  onClose: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TemporaryDrawer = ({ open, onClose, handleChange }: TemporaryDrawerProps) => {

  const list = () => (
    <>
      <TitleContainer>
        <img src={require("./../../assets/create.png")} alt="create" />
        <h3>Criar card</h3>
      </TitleContainer>

      <Divider variant="middle" />

      <InputContainer>
        <div>
          <h5>DIGITE UM NOME PARA O CARD</h5>
          <Input type="text" placeholder="Digite o nome..." />
        </div>

        <div>
          <h5>INCLUA UMA IMAGEM PARA APARECER NO CARD</h5>
          <Input type="file" onChange={handleChange} placeholder="Nenhum arquivo selecionado..."/>
        </div>
      </InputContainer>

      <Divider variant="middle" />

      <ButtonContainer>
        <Button>Criar Card</Button>
      </ButtonContainer>
    </>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor={"right"}
          open={open}
          onClose={onClose}
          PaperProps={{
            sx: {
              width: 550,
            },
          }}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};
