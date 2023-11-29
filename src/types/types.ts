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
}

export type Anchor = string;

export interface FileState {
  file: string | undefined;
}