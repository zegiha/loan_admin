'use client'

import {TIconListKey, transition} from '@/shared/const'
import {Col, Icon, Row, Typo} from '@/shared/ui/atoms'
import classNames from 'classnames'
import {AnimatePresence} from 'framer-motion'
import React, {ReactNode, useEffect, useRef, useState} from "react";
import style from './style.module.css'

export default function TextInput({
  formDataName,
  label,
  value,
  placeholder,
  placeholderIcon,
  onChangeAction,
  error_checker,
  input_type='text',
  selectionPlaceholder,
  selections,
  height,
}: {
  formDataName?: string
  label?: string
  value: string
  placeholder?: string
  placeholderIcon?: TIconListKey
  onChangeAction: (v: string) => void
  error_checker?: Array<(v: string) => string | null>
  input_type?: 'text' | 'password' | 'textarea'
  selectionPlaceholder?: string
  selections?: Array<string>
  height?: number
}) {
  const [error, setError] = useState<string | null>(null)
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if(isFocus) {
      if(inputRef.current) inputRef.current.focus()
      if(textareaRef.current) textareaRef.current.focus()
    }
  }, [isFocus])

  const handle_error_checker = (checked_value: string) => {
    if(error_checker) {
      error_checker.some((v) => {
        const new_error = v(checked_value)
        setError(new_error)
        return new_error
      })
    }
  }

  return (
    <div className={style.container}>
      <Col width={'fill'} gap={2}>
        {label && (
          <Typo.Caption color={'dim'}>
            {label}
          </Typo.Caption>
        )}
        <Row
          className={classNames([
            error !== null && style.containerError,
            isFocus && style.containerActive,
            style.inputContainer,
          ])}
          width={'fill'}
          alignItems={'center'}
          gap={4}
          onClick={() => setIsFocus(true)}
        >
          {placeholderIcon && value === '' && (
            <Icon
              iconKey={placeholderIcon}
              color={'dim'}
            />
          )}
          {input_type === 'textarea' ? (
            <textarea
              ref={textareaRef}
              name={formDataName}
              style={{height: height}}
              className={style.textarea}
              placeholder={placeholder}
              value={value}
              onChange={(e) => {
                handle_error_checker(e.target.value)
                onChangeAction(e.target.value)
              }}
              onFocus={() => {
                handle_error_checker(value)
                setIsFocus(true)
              }}
              onBlur={() => {
                handle_error_checker(value)
                setIsFocus(false)
              }}
            />
          ) : (
            <input
              ref={inputRef}
              name={formDataName}
              className={style.input}
              type={input_type}
              placeholder={placeholder}
              value={value}
              onChange={(e) => {
                handle_error_checker(e.target.value)
                onChangeAction(e.target.value)
              }}
              onFocus={() => {
                handle_error_checker(value)
                setIsFocus(true)
              }}
              onBlur={() => {
                handle_error_checker(value)
                setIsFocus(false)
              }}
            />
          )}
        </Row>
        {error && (
          <Typo.Caption color={'error'}>
            {error}
          </Typo.Caption>
        )}
      </Col>
        <AnimatePresence>
          {selections && (
            <Selection>
              {selections.map((v, i) => (
                <Row
                  key={i}
                  className={classNames([
                    style.selection,
                    value === v && style.selectionActive
                  ])}
                  width={'fill'}
                  onClick={() => onChangeAction(v)}
                >
                  <Typo.Contents>{v}</Typo.Contents>
                </Row>
              ))}
            </Selection>
          )}
          {selectionPlaceholder && value !== '' && !selections && (
            <Selection>
              <Row
                className={style.selectionDisabled}
                width={'fill'}
              >
                <Typo.Contents color={'dim'}>
                  {selectionPlaceholder}
                </Typo.Contents>
              </Row>
            </Selection>
          )}
        </AnimatePresence>
    </div>
  )
}

function Selection({
  children
}: {
  children: ReactNode
}) {
  return (
    <Col
      className={style.selectionContainer}
      width={'fill'}
      motion={{
        initial: {opacity: 0, height: 48},
        animate: {opacity: 1, height: 'auto'},
        exit: {opacity: 0, height: 0, padding: 0},
        transition: transition.fastest,
      }}
    >
      <Col
        className={style.selectionWrapper}
        width={'fill'}
        motion={{
          initial: {opacity: 0},
          animate: {opacity: 1},
          exit: {opacity: 0},
        }}
      >
        {children}
      </Col>
    </Col>
  )
}
