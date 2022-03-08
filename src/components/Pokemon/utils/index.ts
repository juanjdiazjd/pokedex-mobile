import dayjs from "dayjs";

export const removeDecimals = (temp: number) => Math.trunc(temp);

export const formatDate = (date: string) => dayjs(date).format("dddd");

export const POKEMON_TYPES_COLOURS: Record<string, string> = {
  normal: "#A8A77A",
  fire: "#ff5249",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#51dd9b",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

export const getPokemonIdFromUrl = (url: string) => url.split("/")[6];

export const convertPokemonIdToText = (id: number) => {
  const word_id = "" + id;
  const digitsStr = "000";
  return (
    "#" + digitsStr.substring(0, digitsStr.length - word_id.length) + word_id
  );
};
