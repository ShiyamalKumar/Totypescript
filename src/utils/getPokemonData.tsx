import Axios, { AxiosResponse } from 'axios';
import { Pokemon, PokemonDetails } from '../types';

type SetPokemonList = (pokemonList: Pokemon[]) => void;
type SetPokemonDetails = (pokemonDetails: PokemonDetails[]) => void;

export const getPokemonData = (
  link: string,
  setPokemonList: SetPokemonList,
  setPokemonDetails: SetPokemonDetails
) => {
  Axios.get(link)
    .then((response: AxiosResponse<{ results: Pokemon[] }>) => {
      console.log("hehehehe", response);
      setPokemonList(response.data.results);
      Promise.all(
        response.data.results.map((item) =>
          Axios.get<PokemonDetails>(item.url)
            .then((data) => {
            //   setPokemonDetails((prev=> [...prev, data.data]);
            })
            .catch((err) => console.log("Unable to fetch Pokemon details"))
        )
      );
    })
    .catch((error) => console.error(error));
};
