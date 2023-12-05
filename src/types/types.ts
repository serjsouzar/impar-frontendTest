export interface pokeProps {
  name: string;
  fileState?: FileState ;
  sprites?: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  moves?: [
    {
      move: {
        name: string;
      };
    }
  ];
  types?: [
    {
      slot: number;
      type: {
        name: string
      };
    }
  ];
  id?: number;
  openModal?: () => void;
  closeModal?: () => void 
}

export interface CreatedCard {
  name: string;
  fileState: FileState;
  id: number
}

export interface CardType {
  name: string;
  fileState: FileState;
  id: number
}

export type Anchor = string;

export interface FileState {
  file: string | undefined;
}