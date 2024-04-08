import React, { useEffect, useState } from 'react'

export default function Count() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // initial useEffect
    // useEffect(() => {
    //     console.log('hello world')
    // }, [])

    // initial and onChange useEffect
    // useEffect(() => {
    //     console.log('hello world')
    // })

    // dependent onChange useEffect
    useEffect(() => {
        console.log('Count1: ' + count + '\nCount2: ' + count2)
    }, [count, count2])

    // function changeCountHandler(sign) {
    //     if (sign === '+')
    //         setCount(count+1)
    //     else if (sign === '-')
    //         setCount(count-1)
    // }
    return (
        <>
        <div>
            <h2 className='text-red-400 text-center text-9xl'>{count}</h2>
            <button className='p-4 bg-red-400' onClick={() => setCount(count+1)}>+</button>
            <button className='p-4 bg-red-400' onClick={() => setCount(count-1)}>-</button>
        </div>
        <div>
            <h2 className='text-red-400 text-center text-9xl'>{count2}</h2>
            <button className='p-4 bg-red-400' onClick={() => setCount2(count2+1)}>+</button>
            <button className='p-4 bg-red-400' onClick={() => setCount2(count2-1)}>-</button>
        </div>
        </>
    )
}
