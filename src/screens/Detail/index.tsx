import * as React from "react";
import { StatusBar } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { WrapperView } from "../../components/Wrappers/SafeAreaWrapper";
import { ContentView } from "../../components/Wrappers/ContentView";
import { RootStackParamList } from "../Home/utils";
import { POKEMON_TYPES_COLOURS } from "../../components/Pokemon/utils";
import { TextType } from "../../components/Text/TextView";
import { Header } from "../../components/Header";
import { strings } from "./strings";
import Icon from "react-native-vector-icons/Ionicons";
import theme from "../../theme";
import { MarginSize } from "../../types/sizes";
import { CardDetail } from "../../components/Pokemon/CardDetail";
import { TouchableWithoutFeedback } from "react-native";

const PokemonDetailScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, "PokemonDetail">) => {
  const [favouritePokemons, setFavouritePokemons] = React.useState(false);
  return (
    <WrapperView>
      <ContentView
        fullWidth={true}
        style={{
          backgroundColor:
            POKEMON_TYPES_COLOURS[route.params?.types[0].type.name],
        }}
      >
        <StatusBar barStyle={"light-content"} animated={true} translucent />
        <Header
          title={strings.detail.infoTitle}
          subtitle={strings.detail.infoSubtitle}
          withoutBackButton={true}
          paddingHeading={MarginSize.largePadding}
          textTypeTitle={TextType.bigBoldMonserrat}
          textTypeSubtitle={TextType.verySmallBold}
          secondaryComponent={() => (
            <>
              <TouchableWithoutFeedback
                onPress={() => setFavouritePokemons(true)}
              >
                <Icon
                  name={favouritePokemons ? "heart" : "heart-outline"}
                  size={30}
                  color={favouritePokemons ? theme.colors.red : theme.colors.white}
                />
              </TouchableWithoutFeedback>
            </>
          )}
        />
        <CardDetail pokemonDetail={route.params} />
      </ContentView>
    </WrapperView>
  );
};

export default PokemonDetailScreen;
