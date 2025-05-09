'use client'

import {adminControllerCreate, adminControllerCreateSuperAdmin} from '@/entities/api/admin/admin'
import {check_id_and_message, check_is_typed_when_string, check_password_and_message} from '@/shared/lib'
import {useState} from 'react'

export default function useCreateAdminModal() {
  const [name, setName] = useState<string>('')
  const [id, setId] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [authority, setAuthority] = useState<number>(1)

  const createAccount = async () => {
    const checker = [
      check_is_typed_when_string(name),
      check_id_and_message(id),
      check_password_and_message(password),
    ]
    const messageSubject = ['이름은', '아이디는', '비밀번호는']
    for(let i = 0; i < 3; i++) {
      const target = messageSubject[i]
      if(checker[i] !== null)
        return `${target} ${checker[i]}`
    }

    try {
      const dto = {id, password, name}
      if(authority === 0)
        await adminControllerCreateSuperAdmin(dto)
      else
        await adminControllerCreate(dto)
      return 'success'
    } catch (e) {
      return 'error'
    }
  }

  return {
    name, setName,
    id, setId,
    password, setPassword,
    authority, setAuthority,
    createAccount
  }
}