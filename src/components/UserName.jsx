import React from 'react'
import { useUserContext } from '../context/userContext'

export default function UserName() {
    const { name } = useUserContext()
  return (
    <div>{name}</div>
  )
}
