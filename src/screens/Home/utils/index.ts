import { getPokemonIdFromUrl } from "../../../components/Pokemon/utils";
import { NamedAPIResource, Pokemon } from "../../../types/Home/pokemon";

export const icons: Record<string, string> = {
  Home: "pokemon-go",
  PokemonDetail: "detail",
};

export type RootStackParamList = {
  Home: undefined;
  PokemonDetail: Pokemon;
};

export const getOffsetFromUrl = (url: any | string) => {
  if (url !== null && url !== undefined) {
    return url.split("/")[5].match("=(.*)&")[1];
  }
};
export const pokemonItemExtractorKey = (
  item: NamedAPIResource,
  index: number
) => {
  return getPokemonIdFromUrl(item.url).toString();
};
