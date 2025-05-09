import {adminControllerProfile} from '@/entities/api/admin/admin'
import {globalRouter} from '@/shared/lib'
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    // 'ngrok-skip-browser-warning': true,
    // 'Access-Control-Allow-Origin': 'https://loan.apne2a.algorix.cloud',
    // 'Access-Control-Allow-Headers': 'https://loan.apne2a.algorix.cloud',
  }
})

instance.interceptors.response.use(
  res => res,
  async (err) => {
    if(err instanceof AxiosError) {
      if(err.status === 401) {
        globalRouter?.replace('/login')
      }
    }
  }
)

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  const source = axios.CancelToken.source();
  const promise = instance({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({data}) => data);

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled');
  };

  return promise;
};

export type ErrorType<Error> = AxiosError<Error>;

export type BodyType<BodyData> = BodyData;

export default instance