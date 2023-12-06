import {
  BtnContainer,
  Container,
  DeleteBtn,
  EditBtn,
  ImageContainer,
  Line,
} from "./styles";
import { FileState } from "../../types/types";

interface GeneratedCardProps {
  name: string;
  fileState: FileState;
  id: number;
  setClickedID: React.Dispatch<React.SetStateAction<number>>;
  openModal: () => void
}

const GeneratedCard = ({ name, fileState, id, openModal, setClickedID }: GeneratedCardProps) => {
  const capitalName = name.charAt(0).toUpperCase() + name.slice(1);

  function onClickHandler() {
    setClickedID(id)    
    openModal()
  }

  return (
    <Container>
      <ImageContainer>
        <img
          src={fileState?.file}
          width={80}
          height={80}
          alt={name}
          className="createdCard"
        />

      </ImageContainer>
      <Line />
      <h4>{capitalName}</h4>
      <BtnContainer>
        <DeleteBtn>
          <img src={require("./../../assets/trash1.png")} alt="logo-test" />
          <p onClick={onClickHandler}>Excluir</p>
        </DeleteBtn>
        <EditBtn>
          <img src={require("./../../assets/edit1.png")} alt="logo-test" />
          <p>Editar</p>
        </EditBtn>
      </BtnContainer>
      
    </Container>
  );
};

export default GeneratedCard;