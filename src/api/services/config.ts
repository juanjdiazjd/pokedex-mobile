import Config from 'react-native-config';

export const POKEMON_API_PREFIX = 'v2';

const TIMEOUTS = {
  FAST: 3e3,
  INIT: 10e3,
  GLOBAL: 60e3,
  UNIT: 5e3,
};

const config = {
  baseURL: Config.POKEAPI_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: TIMEOUTS.GLOBAL,
};

export {TIMEOUTS};
const METHODS = {
  pokemon: {
    list: 'GET',
  },
};

const URLS = {
  pokemon: {
    list: `${POKEMON_API_PREFIX}/pokemon`,
    detail: `${POKEMON_API_PREFIX}/pokemon`,
  },
};

export {METHODS, URLS};

export default config;
