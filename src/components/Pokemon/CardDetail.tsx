import * as React from "react";
import { ScrollView, useWindowDimensions, View } from "react-native";
import styled from "styled-components";
import theme from "../../theme";
import { TextType, TextView } from "../Text/TextView";
import { convertPokemonIdToText } from "./utils/index";
import { Pokemon } from "../../types/Home/pokemon";
import { PokemonDetailSprite } from "./styledComponents";
import { Button, List } from "react-native-paper";

interface PokemonDetailCardProps {
  pokemonDetail: Partial<Pokemon>;
}

export const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const AdditionalInfoWrapper = styled(View)<{ width: number }>`
  border-radius: 20px;
  width: ${({ width }) => width}px;
  height: 460px;
  background-color: white;
`;
export const PokemonTypeWrapper = styled(View)`
  margin: 2px;
  border-radius: 10px;
  align-self: center;
  background-color: rgba(0, 0, 0, 0.17);
  padding: 10px;
`;

const Row = styled(View)`
  flex-direction: row;
  padding: 20px;
  align-content: space-between;
`;

export const CardDetail: React.FunctionComponent<PokemonDetailCardProps> = ({
  pokemonDetail,
}) => {
  const windowDimensions = useWindowDimensions();

  return (
    <View>
      <Row>
        <TextView
          id={"pokemon_name"}
          text={`${pokemonDetail?.name?.toLowerCase()} - ${convertPokemonIdToText(
            pokemonDetail?.id || 0
          )}`}
          type={TextType.veryBigBoldMonserrat}
          style={{ textTransform: "capitalize" }}
          textAlign={"center"}
          colorText={theme.colors.white}
        ></TextView>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        {pokemonDetail?.types?.map((type, index) => (
          <PokemonTypeWrapper key={index}>
            <TextView
              id={`pokemon_type_${index}`}
              text={type.type.name}
              type={TextType.bigBoldMonserrat}
              colorText={theme.colors.white}
              textAlign={"center"}
            />
          </PokemonTypeWrapper>
        ))}
      </Row>

      <PokemonDetailSprite
        source={{
          uri: pokemonDetail?.sprites?.other["official-artwork"].front_default,
        }}
      />
      <AdditionalInfoWrapper width={windowDimensions.width}>
        <Button
          icon="arrow-up"
          mode='text'
          color={theme.colors.black}
          onPress={() => console.log("Pressed")}
        >
        </Button>
        <List.Section style={{}}>
          <ScrollView>
            <List.Subheader>Abilities: </List.Subheader>
            {pokemonDetail.abilities?.map((data, index) => (
              <List.Item key={index.toString()} title={data.ability.name} />
            ))}
          </ScrollView>
        </List.Section>
      </AdditionalInfoWrapper>
    </View>
  );
};
