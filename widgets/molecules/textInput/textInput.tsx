'use client'

import {Typo} from "@/widgets/atoms";
import React, {useState} from "react";
import style from './style.module.css'

export default function TextInput({
  label,
  value,
  placeholder,
  onChangeAction,
  error_checker,
  input_type='text'
}: {
  label?: string
  value: string
  placeholder?: string
  onChangeAction: (v: string) => void
  error_checker: Array<(v: string) => string | null>
  input_type?: 'text' | 'password'
}) {
  const [error, setError] = useState<string | null>(null);
  const handle_error_checker = (checked_value: string) => {
    error_checker.some((v) => {
      const new_error = v(checked_value)
      setError(new_error)
      return new_error
    })
  }
  return (
    <div className={style.input_wrapper}>
      {label && (
        <Typo.Caption color={'dim'}>
          {label}
        </Typo.Caption>
      )}
      <input
        type={input_type}
        className={error !== null ? style.input_error : style.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          handle_error_checker(e.target.value)
          onChangeAction(e.target.value)
        }}
        onFocus={() => handle_error_checker(value)}
        onBlur={() => handle_error_checker(value)}
      />
      {error && (
        <Typo.Caption color={'error'}>
          {error}
        </Typo.Caption>
      )}
    </div>
  )
}
