import axios, {AxiosRequestConfig} from 'axios';

export const callRest = async (config: AxiosRequestConfig) => axios(config);

