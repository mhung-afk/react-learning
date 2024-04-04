import React from 'react'
import ScorePerTeam from '../components/ScorePerTeam'
import FootBallTeam from '../components/FootballTeam'

export default function ScoreBoard({ className }) {
  return (
    <div className={`absolute left-1/2 -translate-x-1/2 top-1/4 translate-y-1/2 text-center text-black text-lg ${className}`}>
        <h1>Score Board</h1>
        <div className='flex'>
          <div className='m-10'><FootBallTeam name={"VietNam"}/><ScorePerTeam /></div>
          <div className='m-10'><FootBallTeam name={"Indo"}/><ScorePerTeam /></div>
        </div>
    </div>
  )
}
