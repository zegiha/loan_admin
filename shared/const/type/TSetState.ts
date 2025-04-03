import React from 'react'

type TSetState <T> =
  (v: T) => void |
  React.Dispatch<React.SetStateAction<T>>

export default TSetState