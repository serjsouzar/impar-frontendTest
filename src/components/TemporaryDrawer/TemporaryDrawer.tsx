import * as React from "react";

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
import { FileState, pokeProps } from "../../types/types";

interface TemporaryDrawerProps {
  open: boolean;
  onClose: () => void;
  fileState: FileState,
  setFileState: React.Dispatch<React.SetStateAction<FileState>>,
  setComponent: React.Dispatch<React.SetStateAction<boolean>>,
  setName: (name:string) => void,
  name: string,
}

export const TemporaryDrawer = ({
  open,
  onClose,
  setFileState,
  setComponent,
  setName,
  name,
}: TemporaryDrawerProps) => {


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    if (e.target.files && e.target.files.length > 0) {
      const file = URL.createObjectURL(e.target.files[0]);
      setFileState({ file });
    }    
  };

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
          <Input type="text" placeholder="Digite o nome..." value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
        </div>

        <h5>INCLUA UMA IMAGEM PARA APARECER NO CARD</h5>
        <UploadInput>
          <label className="upload-image">                  
            <input type="file" className="input_file" onChange={handleChange}/>                        
          </label>
        </UploadInput>
      </InputContainer>

      <Divider variant="middle" />

      <ButtonContainer>
        <Button onClick={() => setComponent(true)}>Criar Card</Button>
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
