import { ApiResponse } from "apisauce";
import Config from "react-native-config";
import { Pokemon, PokemonList } from "../../types/Home/pokemon";

import buildApi from "../api";
import { URLS } from "./config";
const { pokemon } = URLS;
const LIMIT = 20;
const createApi = () => {
  // @ts-ignore
  const { get } = buildApi({ baseURL: Config.POKEAPI_URL });
  return {
    fetchAllPokemons: ({ pageParam = 0 }): Promise<PokemonList> =>
      get(`${pokemon.list}?limit=${LIMIT}&offset=${pageParam}`).then((res) => {
        return res.data as PokemonList;
      }),
    pokemonDetail: (
      data: any,
      pokemonId: string,
      config = {}
    ): Promise<ApiResponse<Pokemon>> =>
      get(`${pokemon.detail}/${pokemonId}`, data, config),
  };
};

export default createApi;
