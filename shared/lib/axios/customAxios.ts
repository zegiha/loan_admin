import {globalRouter} from '@/shared/lib'
import axios, {AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig} from 'axios'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

async function checkLogin() {
  try {
    await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/admin/profile`, {
      withCredentials: true
    })
    return 'loggedIn'
  } catch (e) {
    try {
      await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/admin/refresh`, {
        withCredentials: true
      })
      return 'updateLoggedIn'
    } catch (e) {
      return 'loggedOut'
    }
  }
}

const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
})

interface InternalAxiosRequestConfigWithFlag extends InternalAxiosRequestConfig {
  _retry?: boolean
}

instance.interceptors.response.use(
  res => res,
  async (err) => {
    if(err instanceof AxiosError && err.status === 401) {
      const originalReq = err.config as InternalAxiosRequestConfigWithFlag | undefined

      const res = await checkLogin()

      if(
        res === 'updateLoggedIn' &&
        originalReq?._retry
      ) {
        originalReq._retry = true
        return instance(originalReq)
      }
      if(res === 'loggedOut') {
        globalRouter?.push('/login')
      }
      return Promise.reject(err)
    }
  }
)

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const source = axios.CancelToken.source()
  const promise = instance({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({data}) => data)

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled')
  };

  return promise
};

export type ErrorType<Error> = AxiosError<Error>

export type BodyType<BodyData> = BodyData

export default instance
