import React, { useState } from 'react'

export default function ScorePerTeam() {
    const [count, setCount] = useState(0);

    function changeCountHandler(sign) {
        if (sign === '+')
            setCount(count+1)
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
