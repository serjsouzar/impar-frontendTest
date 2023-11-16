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
  varieties: [
    {
      value: boolean;
      pokemon: {
        name: string;
        url: string;
      };
    }
  ];
};

type pokeVarieties = {
  varieties: [
    {
      value: boolean;
      pokemon: {
        name: string;
        url: string;
      };
    }
  ];
};

type pokemonType = {
  species: {
    name: string;
    url: string;
  };
};

const App = () => {
  const [data, setData] = useState<Data | null>(null);
  const [pokemon, setPokemon] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokedex/30/")
      .then((response) => response.json())
      .then((data) => {
        data.pokemon_entries.map((entry: any) => {
          const pkmUrl = entry?.pokemon_species?.url;

          fetch(pkmUrl)
            .then((res) => res.json())
            .then((data) => {
              data.varieties.map((pkm: any) => {
                const pkmUrl2 = pkm.pokemon.url;
                
                fetch(pkmUrl2)
                  .then((res) => res.json())
                  .then((data) => {
                    
                  });
              });
            });
        });
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(pokemon)

  /* useEffect(() => {
    if (data) {
      let pokemonEntries = data.pokemon_entries;
      pokemonEntries.map(async (entry) => {
        let pkmUrl = entry?.pokemon_species?.url;
        await fetch(pkmUrl)
          .then((response) => response.json())
          .then((data: Data) => {
            data.varieties.map(async (i) => {
              const pkmUrl2 = data?.varieties[0]?.pokemon.url;
              await fetch(pkmUrl2)
                .then((response) => response.json())
                .then(async (data:pokemonType) => {
                  setPokemon(
                    (prevPokemon) => [...prevPokemon, data]);
                  
                });
            });
          })
          .catch((error) => console.error(error));
      });
    }
  }, [data]);
 */
  //
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
