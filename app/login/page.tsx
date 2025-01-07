'use client'

import style from './style.module.css'
import {Typo} from "@/widgets/atoms";
import {useState} from "react";
import {check_id_and_message} from "@/shared/model";
import check_password_and_message from "@/shared/model/check_password_and_message";
import {TextInput} from "@/widgets/molecules";

export default function Login() {
  const [id, set_id] = useState<string>('')
  const [password, set_password] = useState<string>('')

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
            error_checker={[check_id_and_message]}
          />
          <TextInput
            label={'비밀번호'}
            input_type={'password'}
            value={password}
            onChangeAction={(v) => set_password(v)}
            error_checker={[check_password_and_message]}
          />
        </div>
        <button className={style.button}>
          <Typo.Contents color={'onPrimary'} emphasize>로그인하기</Typo.Contents>
        </button>
      </div>
    </div>
  );
}
