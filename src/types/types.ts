export interface pokeProps {
  name: string;
  sprite: {
    front_default:string
  };
  id?: number;
}

export interface pokeSprite {
  front_default: string;
  extraImage: {
    home: string;
  };
}
