import React, {useEffect, useState} from 'react'
import ScorePerTeam from '../components/ScorePerTeam'
import FootBallTeam from '../components/FootballTeam'
import Team from '../components/Team';

export default function ScoreBoard({ className }) {
  const [countTeam1, setCountTeam1] = useState(0);
  const [countTeam2, setCountTeam2] = useState(0);
  const [nameTeam1, setNameTeam1] = useState('')
  const [nameTeam2, setNameTeam2] = useState('')
  const [goals, setGoals] = useState([]) // list of specified team that had just goal
  useEffect(() => {
    if(goals && goals.length) {
      const goalTeam = goals[goals.length-1] // get the last goal team
      if (goalTeam === 1) {
        alert(`${nameTeam1} has just goal.`)
      }
      else {
        alert(`${nameTeam2} has just goal.`)
      }
    }
  }, [goals])
  return (
    <div className={`absolute left-1/2 -translate-x-1/2 top-1/4 translate-y-1/2 text-center text-black text-lg ${className}`}>
        <h1>Score Board</h1>
        <div className='flex'>
          <div className='m-10'>
            <Team>
              <FootBallTeam name={nameTeam1} setName={setNameTeam1} />
              <ScorePerTeam count={countTeam1} setCount={setCountTeam1} setGoals={setGoals} teamNum={1} />
            </Team>
          </div>
          <div className='m-10'>
            <Team>
              <FootBallTeam name={nameTeam2} setName={setNameTeam2} />
              <ScorePerTeam count={countTeam2} setCount={setCountTeam2} setGoals={setGoals} teamNum={2} />
            </Team>
          </div>
        </div>
        <button onClick={() => alert(`Result of the match: ${
            countTeam1 === countTeam2 ? 'Draw' : (countTeam1 > countTeam2 ? `${nameTeam1} wins` : `${nameTeam2} wins`)
          }`)} className='bg-gray-500 p-4 text-white rounded-sm hover:bg-gray-400 shadow-sm'>Show result</button>
    </div>
  )
}
