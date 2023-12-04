import React from "react";

import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import {
  Button,
  ButtonContainer,
  Input,
  InputContainer,
  TitleContainer,
  UploadInput,
} from "./styles";
import { FileState } from "../../types/types";
import useMediaQuery from "@mui/material/useMediaQuery";

interface TemporaryDrawerProps {
  open: boolean;
  onClose: () => void;
  fileState: FileState;
  setFileState: React.Dispatch<React.SetStateAction<FileState>>;
  setName: (name: string) => void;
  name: string;
  handleCreateCard: (e: React.FormEvent) => void;
}

export const TemporaryDrawer = ({
  open,
  onClose,
  setFileState,
  setName,
  name,
  handleCreateCard,
}: TemporaryDrawerProps) => {
  const matches = useMediaQuery("(min-width:680px)");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = URL.createObjectURL(e.target.files[0]);      
      setFileState({ file });
    }
  };

  const list = () => (
    <form onSubmit={(e) => handleCreateCard(e)}>
      <TitleContainer>
        <img src={require("./../../assets/create.png")} alt="create" />
        <h3>Criar card</h3>
      </TitleContainer>

      <Divider variant="middle" />

      <InputContainer>
        <div>
          <h5>DIGITE UM NOME PARA O CARD</h5>
          <Input
            type="text"
            placeholder="Digite o nome..."
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        </div>

        <h5>INCLUA UMA IMAGEM PARA APARECER NO CARD</h5>
        <UploadInput>
          <label className="upload-image">
            <input type="file" className="input_file" onChange={handleChange} />
          </label>
        </UploadInput>
      </InputContainer>

      <Divider variant="middle" />

      <ButtonContainer>
        <Button>Criar Card</Button>
      </ButtonContainer>
    </form>
  );

  return (
    <div>
      {matches === true ? (
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
      ) : (
        <React.Fragment>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={onClose}
            PaperProps={{
              sx: {
                width: 350,
              },
            }}
          >
            {list()}
          </Drawer>
        </React.Fragment>
      )}
    </div>
  );
};
