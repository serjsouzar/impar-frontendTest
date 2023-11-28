export interface pokeProps {
  name: string;
  sprites: {
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
  types: [
    {
      slot: number;
      type: {
        name: string
      };
    }
  ];
  id?: number;
}
