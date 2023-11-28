export interface pokeProps {
  name: string;
  sprites: {
    front_default:string,
    other: {
      dream_world: {
        front_default: string
      }
    }
  };
  id?: number;
}


