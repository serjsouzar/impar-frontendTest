import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import { GlobalStyle } from "./GlobalStyles";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { pokeProps } from "./types/types";

const App = () => {

  const [pokeDetail, setPokeDetail] = useState<pokeProps[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon-species?limit=493")
      .then((response) => response.json())
      .then((data) => {
        const slicedArr = data.results.slice(386);
        const promisePokemon = slicedArr.map((i: any) =>
          fetch(i?.url).then((res) => res.json())
        );
        Promise.all(promisePokemon)
          .then((results: any) => {
            results.map((i: any) => {
              fetch(i.varieties[0]?.pokemon?.url)
                .then((response) => response.json())
                .then((response) => {
                  const verifingExistingPokemon = (existingObject:any) => existingObject.id === response.id
                  if (pokeDetail.length >= 1 && !pokeDetail.some(verifingExistingPokemon) === true) {
                    return
                  }
                  setPokeDetail((prev) => [...prev, response])
              });
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => console.error(error));
  }, []);

  
console.log(pokeDetail)
  

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
