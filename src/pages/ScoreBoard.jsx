import React, { useEffect, useReducer, useState } from 'react'
import ScorePerTeam from '../components/ScorePerTeam'
import FootBallTeam from '../components/FootballTeam'
import Team from '../components/Team';
import ScoreboardContext from '../context/scoreboardContext';

export default function ScoreBoard({ className }) {
  const [goals, setGoals] = useState([]) // list of specified team that had just goal

  const ReducerAction = {
    EDIT_NAME: 'edit_name',
    EDIT_COUNT: 'edit_count'
  }

  function reducer({ name: curName, count: curCount }, { kind, newName = null, newCount = null }) {
    if (kind === ReducerAction.EDIT_NAME) {
      return {
        name: newName,
        count: curCount
      };
    }
    else if (kind === ReducerAction.EDIT_COUNT) {
      return {
        name: curName,
        count: newCount
      }
    }
    throw Error('Unknown action.');
  }
  const [team1, dispatchTeam1] = useReducer(
    reducer,
    {
      name: '',
      count: 0
    }
  )

  const [team2, dispatchTeam2] = useReducer(
    reducer,
    {
      name: '',
      count: 0
    }
  )

  useEffect(() => {
    if (goals && goals.length) {
      const goalTeam = goals[goals.length - 1] // get the last goal team
      if (goalTeam === 1) {
        alert(`${team1.name} has just goal.`)
      }
      else {
        alert(`${team2.name} has just goal.`)
      }
    }
  }, [goals])

  return (
    
      <div className={`absolute left-1/2 -translate-x-1/2 top-1/4 translate-y-1/2 text-center text-black text-lg ${className}`}>
        <h1>Score Board</h1>
        <div className='flex'>
        
          <div className='m-10'>
          <ScoreboardContext.Provider value={{count:team1.count ,setCount:(count) => dispatchTeam1({ kind: ReducerAction.EDIT_COUNT, newCount: count }), team:team1,setName:(newName) => dispatchTeam1({ kind: ReducerAction.EDIT_NAME, newName: newName })}}>
            <Team>
              <FootBallTeam />
              <ScorePerTeam setGoals={setGoals} teamNum={1} />
            </Team>
          </ScoreboardContext.Provider>
          </div>
          <div className='m-10'>
          <ScoreboardContext.Provider value={{count:team2.count ,setCount:(count) => dispatchTeam2({ kind: ReducerAction.EDIT_COUNT, newCount: count }),team:team2,setName:(newName) => dispatchTeam2({ kind: ReducerAction.EDIT_NAME, newName: newName })}}>
            <Team>
              <FootBallTeam/>
              <ScorePerTeam setGoals={setGoals} teamNum={2} />
            </Team>
            </ScoreboardContext.Provider>
          </div>
        </div>
        <button onClick={() => alert(`Result of the match: ${team1.count === team2.count ? 'Draw' : (team1.count > team2.count ? `${team1.name} wins` : `${team2.name} wins`)
          }`)} className='bg-gray-500 p-4 text-white rounded-sm hover:bg-gray-400 shadow-sm'>Show result</button>
      </div>
  )
}
