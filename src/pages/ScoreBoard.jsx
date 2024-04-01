import React from 'react'
import ScorePerTeam from '../components/ScorePerTeam'

export default function ScoreBoard({ className }) {
    // console.log(props)
    // const className = props.myClassName || ''
    
    // props chứa myClassName và key
    // const { myClassName, key } = props

  return (
    <div className={`absolute left-1/2 -translate-x-1/2 top-1/4 translate-y-1/2 text-center text-black text-lg ${className}`}>
        <h1>Score Board</h1>
        <div className='flex'>
            <ScorePerTeam />
            :
            <ScorePerTeam />
        </div>
    </div>
  )
}
