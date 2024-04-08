import React from 'react'

export default function ScorePerTeam({ count, setCount, setGoals, teamNum }) {

    function changeCountHandler(sign) {
        if (sign === '+') {
            setCount(count+1)
            setGoals(prev => {
                const newGoals = prev.map((val) => val)
                newGoals.push(teamNum)
                return newGoals
            })
        }
        else if (sign === '-'){
            if (count === 0) return
            setCount(count-1)
        }
    }

    return (
        <div>
            <h2 className='text-red-400'>{count}</h2>
            <button onClick={() => changeCountHandler('+')}>+</button>
            <button onClick={() => changeCountHandler('-')}>-</button>
        </div>
    )
}
