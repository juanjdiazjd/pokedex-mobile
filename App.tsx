import * as React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {icons} from './src/screens/Home/utils';
import { MyTheme } from './src/utils/constants';
import { QueryClient, QueryClientProvider } from 'react-query';
import theme from './src/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonDetailScreen from './src/screens/Detail';

const queryClient = new QueryClient();
const HomeStack = createNativeStackNavigator();


export default function App() {

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator  screenOptions={({route}) => ({
        headerShown: false,
      })}>
        <HomeStack.Screen name="HomeStack" component={HomeScreen} />
        <HomeStack.Screen name="PokemonDetail" component={PokemonDetailScreen} />

      </HomeStack.Navigator>
    );
  }
  const Tab = createBottomTabNavigator();
  return (
    <QueryClientProvider client={queryClient}>
    <NavigationContainer theme={MyTheme}>
        <Tab.Navigator
        
          screenOptions={({route}) => ({
            tabBarLabelStyle:{color:'white'},
            tabBarStyle:{backgroundColor:theme.colors.primary},
            tabBarIcon: ({color, size}) => {
              return (
                <Icon name={icons[route.name]} color={theme.colors.white} size={size} />
              );
            },
            headerShown: false,
          })}>
          <Tab.Screen name="Home" component={HomeStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      </QueryClientProvider>
  );
}
