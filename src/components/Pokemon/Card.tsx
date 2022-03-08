import * as React from "react";
import { Alert, View } from "react-native";
import styled from "styled-components";
import theme from "../../theme";
import { TextType, TextView } from "../Text/TextView";
import { getPokemonIdFromUrl, POKEMON_TYPES_COLOURS } from "./utils/index";
import {
  NamedAPIResource, Pokemon,
} from "../../types/Home/pokemon";
import { PokemonSprite } from "./styledComponents";
import { usePokemonDetail } from "../../screens/Home/hooks/usePokemonDetail";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";

interface PokemonCardProps extends NamedAPIResource {
  onPress: (pokemon?: Pokemon) => void;
}

export const Wrapper = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const PokemonCard = styled(View)<{
  backgroundColor: string;
}>`
  margin: 5px;
  border-radius: 20px;
  width: 180px;
  height: 160px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  shadow-offset: 5px 10px;
  flex-direction: column;
  padding: 10px;
  animation: appear 500ms ease-out forwards;
`;
export const PokemonTypeBadge = styled(View)`
  margin: 2px;
  border-radius: 10px;
  align-self: flex-start;
  background-color: rgba(0, 0, 0, 0.17);
  flex-direction: column;
  padding: 10px;
`;

const Row = styled(View)`
  flex: 1;
  justify-content: space-between;
`;

export const Card: React.FunctionComponent<PokemonCardProps> = ({
  name,
  url,
  onPress,
}) => {
  const {
    isLoading,
    data: responsePokeapi,
    error,
  } = usePokemonDetail(getPokemonIdFromUrl(url));
  
  return (
    <Wrapper onPress={()=> onPress(responsePokeapi?.data)}>
      {responsePokeapi?.data && (
        <PokemonCard
          backgroundColor={
            POKEMON_TYPES_COLOURS[responsePokeapi?.data?.types[0].type.name]
          }
        >
          <Row>
            <TextView
              id={"pokemon_name"}
              text={responsePokeapi?.data?.name.toLowerCase()}
              type={TextType.bigBoldMonserrat}
              style={{ textTransform: "capitalize" }}
              colorText={theme.colors.white}
            />
            <PokemonSprite
              source={{
                uri: responsePokeapi?.data?.sprites.front_default,
              }}
            />
          </Row>

          {responsePokeapi?.data?.types.map((type, index) => (
            <PokemonTypeBadge key={index}>
              <TextView
                id={`pokemon_type_${index}`}
                text={type.type.name}
                type={TextType.verySmallBold}
                colorText={theme.colors.white}
                textAlign={"left"}
              />
            </PokemonTypeBadge>
          ))}
        </PokemonCard>
      )}
    </Wrapper>
  );
};
