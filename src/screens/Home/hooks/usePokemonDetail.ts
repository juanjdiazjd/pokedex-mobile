import { useQuery } from "react-query";
import pokemonApi from "../../../api";

export const usePokemonDetail = (pokemonId: string) => {
  return useQuery(["pokemon-detail", pokemonId], () =>
    pokemonApi.pokemonServices.pokemonDetail("", pokemonId)
  );
};
