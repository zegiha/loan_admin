'use client'

import {check_id_and_message, check_password_and_message} from '@/shared/lib'
import {adminControllerProfile} from '@/test/tmp'
import Form from 'next/form'
import {useRouter} from 'next/navigation'
import style from './style.module.css'
import {Typo} from "../../shared/ui/atoms";
import {useState} from "react";
import {TextInput} from "../../shared/ui/molecules";
import {login_action} from "@/features/login";

export default function Login() {
  const [id, set_id] = useState<string>('')
  const [password, set_password] = useState<string>('')
  const router = useRouter()

  const handleSubmit = async (formData: FormData): Promise<void> => {
    const res = await login_action(formData)

    if(res === 'success') {
      const res = await adminControllerProfile({
        withCredentials: true,
        headers: {
          'Access-Allow-origin'
        }
      })
      // router.replace('/user')
    } else {
      alert(res.message)
      set_id('')
      set_password('')
    }
  }

  return (
    <div className={style.container}>
      <Form className={style.wrapper} action={handleSubmit}>
        <Typo.Body emphasize color={'variable'}>
          로그인
        </Typo.Body>
        <div className={style.input_container}>
          <TextInput
            formDataName={'id'}
            label={'아이디'}
            value={id}
            onChangeAction={(v) => set_id(v)}
            placeholder={'아이디를 입력해주세요'}
            error_checker={[check_id_and_message]}
          />
          <TextInput
            formDataName={'password'}
            label={'비밀번호'}
            input_type={'password'}
            value={password}
            onChangeAction={(v) => set_password(v)}
            placeholder={'비밀번호를 입력해주세요'}
            error_checker={[check_password_and_message]}
          />
        </div>
        <button type={'submit'} className={style.button}>
          <Typo.Contents color={'onPrimary'} emphasize>로그인하기</Typo.Contents>
        </button>
      </Form>
    </div>
  );
}
