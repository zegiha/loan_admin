import {adminControllerLogin} from '@/entities/api/admin/admin'
import {AxiosError} from 'axios'

export default async function login_action(formData: FormData): Promise<'success' | Error> {
  const id = formData.get('id') as string
  const password = formData.get('password') as string
  try {
    await adminControllerLogin({id, password})

    // console.log(data)

    return 'success'
  } catch (err) {
    console.error('시발')
    if(err instanceof AxiosError) {
      if(err.status === 401) return new Error('아이디 혹은 비밀번호가 잘못되었습니다')
      else if(err.status === 400) return new Error('아이디 혹은 비빌번호를 입력해주세요')
    }

    console.error(`login_action: ${err}`)

    return new Error('예기치 못한 오류가 발생했습니다\n 다시 시도해주세요')
  }
}
