import React, { useState, useRef, useEffect } from 'react'

export default function FootballTeam({name, setName}) {
  const [editable, setEditable] = useState(true)
  // const refInp = useRef()

  function handlePressEnter(e) {
    if (e.keyCode === 13) {
      setEditable(false)
    }
  }

  // useEffect(() => {
  //   console.log('focus')
  //   refInp.current.focus()
  // }, [refInp.current])

  return (
    <div onClick={() => setEditable(true)}>
      { (!name || editable) ?
        <input onBlur={() => setEditable(false)} onKeyUp={(e) => handlePressEnter(e)} className='p-2 border-2 border-red-200' value={name} onChange={(e) => setName(e.target.value)} />
        // <input ref={refInp} onBlur={() => setEditable(false)} onKeyUp={(e) => handlePressEnter(e)} className='p-2 border-2 border-red-200' defaultValue={''} onChange={(e) => refInp.current.value = e.target.value} />
        :
        <h1>{name}</h1>
      }
    </div>
  )
}
