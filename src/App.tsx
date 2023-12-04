import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import { GlobalStyle } from "./GlobalStyles";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { pokeProps } from "./types/types";

const App = () => {
  const [pokeDetail, setPokeDetail] = useState<pokeProps[]>([]);

  let promisePokemon: object[];

  function fetchPokemonData() {
    fetch("https://pokeapi.co/api/v2/pokemon-species?limit=493")
      .then((response) => response.json())
      .then((data) => {
        const slicedArr = data.results.slice(386);
        promisePokemon = slicedArr.map((i: any) =>
          fetch(i?.url).then((res) => res.json())
        );
        Promise.all(promisePokemon)
          .then((results: any) => {
            results.map(async (i: any) => {
              await fetch(i.varieties[0]?.pokemon?.url)
                .then((response) => response.json())
                .then((response) => {
                  setPokeDetail((prev) => [...prev, response]);
                });
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <Main pokemon={pokeDetail} />
      <GlobalStyle />
    </>
  );
};

export default App;
