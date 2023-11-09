import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import { GlobalStyle } from "./GlobalStyles";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

type Entry = {
  entry_number: number;
  pokemon_species: {
    name: string;
    url: string;
  };
};

type Data = {
  pokemon_entries: Entry[];
  varieties: [string];
  pokemon: Object
};

const App = () => {

    const [data, setData] = useState<Data | null>(null);
    const [pokemon, setPokemon] = useState<Data | null>(null);
  
    useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokedex/30")
        .then((response) => response.json())
        .then((data: Data) => setData(data))
        .catch((error) => console.error(error));
    }, []);
  
    useEffect(() => {
      if (data) {
        let pokemonEntries = data.pokemon_entries;
        for(let i = 0; i <= pokemonEntries.length; i++){
          let pkmUrl = pokemonEntries[i]?.pokemon_species?.url
          fetch(pkmUrl)
          .then((response) => response.json())
          .then((data: Data) => console.log(data.varieties[0].pokemon))
          .catch((error) => console.error(error));
        }
      }
    }, [data]);
  

  return (
    <>
      <Header />
      <Nav />
      <Main />
      <GlobalStyle />
    </>
  );
};

export default App;
