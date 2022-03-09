import * as React from "react";
import { FlatList, ListRenderItem, StatusBar } from "react-native";
import Header from "../../components/Header";
import {
  getOffsetFromUrl,
  pokemonItemExtractorKey,
  RootStackParamList,
} from "./utils";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { WrapperView } from "../../components/Wrappers/SafeAreaWrapper";
import { ContentView } from "../../components/Wrappers/ContentView";
import { useInfiniteQuery } from "react-query";

import { strings } from "./strings";
import { TextType } from "../../components/Text/TextView";
import { NamedAPIResource } from "../../types/Home/pokemon";
import { Card } from "../../components/Pokemon/Card";
import { PokemonLogo } from "../../components/Pokemon/styledComponents";
import pokemonApi from "../../api";
import { MarginSize } from "../../types/sizes";

const { pokemonServices: pokemonAPI } = pokemonApi;
const NUM_COLUMNS = 2;

const HomeScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, "Home">) => {
  const { isLoading, data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery("pokemons", pokemonAPI.fetchAllPokemons, {
      getNextPageParam: (lastPage) => {
        if (lastPage.next !== null) {
          return getOffsetFromUrl(lastPage.next);
        }
        return lastPage;
      },
    });

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  const onListItemPress = React.useCallback(
    (pokemon) => {
      return navigation.navigate("PokemonDetail", pokemon);
    },
    [navigation]
  );

  const renderItem: ListRenderItem<NamedAPIResource> = ({ item }) => (
    <Card onPress={onListItemPress} name={item.name} url={item.url} />
  );

  return (
    <WrapperView>
      <ContentView fullWidth={true}>
        <StatusBar barStyle="dark-content" />
        <Header
          title={strings.home.infoTitle}
          subtitle={strings.home.infoSubtitle}
          withoutBackButton={false}
          paddingHeading={MarginSize.mediumPadding}
          textTypeTitle={TextType.bigBoldMonserrat}
          textTypeSubtitle={TextType.verySmallBold}
          secondaryComponent={() => (
            <PokemonLogo
              resizeMode="cover"
              source={
                isFetchingNextPage
                  ? require("../../assets/pokeball-logo.png")
                  : require("../../assets/pokeball-grey.png")
              }
            />
          )}
        />
        <FlatList
          data={data?.pages.map((page) => page.results).flat()}
          numColumns={NUM_COLUMNS}
          contentContainerStyle={{ alignSelf: "center" }}
          keyExtractor={pokemonItemExtractorKey}
          renderItem={renderItem}
          onEndReached={loadMore}
          onEndReachedThreshold={0.3}
        />
      </ContentView>
    </WrapperView>
  );
};

export default HomeScreen;
