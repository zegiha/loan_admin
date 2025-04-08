'use client'

import {useState} from 'react'

export default function() {
  const [showRow, setShowRow] = useState<number>(10)

  return {
    showRow, setShowRow
  }
}