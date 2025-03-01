'use client'

import style from './style.module.css'
import {Typo} from "@/widgets/atoms";
import {useState} from "react";
import {check_id_and_message} from "@/shared/model";
import check_password_and_message from "@/shared/model/check_password_and_message";
import {TextInput} from "@/widgets/molecules";
import {login_action} from "@/features/login";

export default function Login() {
  const [id, set_id] = useState<string>('')
  const [password, set_password] = useState<string>('')

  const handle_login = () => {
    login_action(id, password)
  }

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Typo.Body emphasize color={'variable'}>
          로그인
        </Typo.Body>
        <div className={style.input_container}>
          <TextInput
            label={'아이디'}
            value={id}
            onChangeAction={(v) => set_id(v)}
            placeholder={'아이디를 입력해주세요'}
            error_checker={[check_id_and_message]}
          />
          <TextInput
            label={'비밀번호'}
            input_type={'password'}
            value={password}
            onChangeAction={(v) => set_password(v)}
            placeholder={'비밀번호를 입력해주세요'}
            error_checker={[check_password_and_message]}
          />
        </div>
        <button className={style.button} onClick={handle_login}>
          <Typo.Contents color={'onPrimary'} emphasize>로그인하기</Typo.Contents>
        </button>
      </div>
    </div>
  );
}
