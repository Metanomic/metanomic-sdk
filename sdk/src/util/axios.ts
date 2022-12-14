import axios, { AxiosRequestConfig, AxiosInstance, } from 'axios';
import * as rax from './retry';

export { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// Include this so `config.raxConfig` works easily.
// See https://github.com/JustinBeckwith/retry-axios/issues/64.
declare module 'axios' {
  export interface AxiosRequestConfig {
    raxConfig?: rax.RetryConfig;
  }
}

export const create = (config?: AxiosRequestConfig<any>): AxiosInstance => {
  const thisAxios = axios.create(config);
  thisAxios.defaults.raxConfig = {
    instance: thisAxios,
    retry: 3,
    noResponseRetries: 2,
    retryDelay: 300,
    backoffType: 'exponential',
  };
  rax.attach(thisAxios);
  return thisAxios
}

