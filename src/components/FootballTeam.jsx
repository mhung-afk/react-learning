import React, { useState } from 'react'

export default function FootballTeam({name, setName}) {
  const [editable, setEditable] = useState(true)

  function handlePressEnter(e) {
    if (e.keyCode === 13) {
      setEditable(false)
    }
  }

  return (
    <div onClick={() => setEditable(true)}>
      { (!name || editable) ?
        <input onBlur={() => setEditable(false)} onKeyUp={(e) => handlePressEnter(e)} className='p-2 border-2 border-red-200' value={name} onChange={(e) => setName(e.target.value)} />
        :
        <h1>{name}</h1>
      }
    </div>
  )
}
