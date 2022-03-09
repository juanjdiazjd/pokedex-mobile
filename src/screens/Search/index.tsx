import * as React from 'react';
import {
  StatusBar,
  Text,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {WrapperView} from '../../components/Wrappers/SafeAreaWrapper';
import {ContentView} from '../../components/Wrappers/ContentView';
import { RootStackParamList } from '../Home/utils';
import { POKEMON_TYPES_COLOURS } from '../../components/Pokemon/utils';

const PokemonDetailScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'PokemonDetail'>) => {
  return (
    <WrapperView>
      <ContentView fullWidth={true} style={{backgroundColor:POKEMON_TYPES_COLOURS[route.params?.types[0].type.name]}}>
      <StatusBar barStyle={'light-content'} animated={true} translucent  />
   
        <Text>Coming soon</Text>
      </ContentView>
    </WrapperView>
  );
};

export default PokemonDetailScreen;
