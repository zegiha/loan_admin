import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios'
import {redirect} from 'next/navigation'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    'ngrok-skip-browser-warning': true,
  }
})

instance.interceptors.response.use(
  res => res,
  (err) => {
    if(err instanceof AxiosError) {
      if(err.status === 401) {
        // redirect('/login')
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
    // cancelToken: source.token,
  }).then((res) => res);

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled');
  };

  return promise;
};

export default instance