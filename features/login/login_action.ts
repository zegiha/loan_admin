import {adminControllerLogin, adminControllerProfile} from '@/test/tmp'
import {AxiosError} from 'axios'

export default async function login_action(formData: FormData): Promise<'success' | Error> {
  const id = formData.get('id') as string
  const password = formData.get('password') as string
  try {
    const {headers, data} = await adminControllerLogin({id, password}, {
      withCredentials: true
    })

    console.log(headers)

    return 'success'
  } catch (err) {
    if(err instanceof AxiosError) {
      if(err.status === 401) return new Error('아이디 혹은 비밀번호가 잘못되었습니다')
      else if(err.status === 400) return new Error('아이디 혹은 비빌번호를 입력해주세요')
    }

    console.error(`login_action: ${err}`)

    return new Error('예기치 못한 오류가 발생했습니다\n 다시 시도해주세요')
  }
}
