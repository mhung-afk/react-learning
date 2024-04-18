import React from 'react'
import { useUserContext } from '../context/userContext'

export default function UserAge() {
    const { age } = useUserContext()
  return (
    <div>{age}</div>
  )
}
