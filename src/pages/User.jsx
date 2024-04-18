import React from 'react'
import UserName from '../components/UserName'
import UserAge from '../components/UserAge'

export default function User({data}) {
  return (
    <>
        <UserName name={data.name} />
        <UserAge age={data.age} />
    </>
  )
}
