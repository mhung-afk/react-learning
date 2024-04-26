import React, { useEffect, useRef, useState } from 'react'
import {Outlet, useNavigate} from 'react-router-dom'

// export default function Count() {
//     const [count, setCount] = useState(0);
//     const [count2, setCount2] = useState(0);

//     // initial useEffect
//     // useEffect(() => {
//     //     console.log('hello world')
//     // }, [])

//     // initial and onChange useEffect
//     // useEffect(() => {
//     //     console.log('hello world')
//     // })

//     // dependent onChange useEffect
//     useEffect(() => {
//         console.log('Count1: ' + count + '\nCount2: ' + count2)
//     }, [count, count2])

//     // function changeCountHandler(sign) {
//     //     if (sign === '+')
//     //         setCount(count+1)
//     //     else if (sign === '-')
//     //         setCount(count-1)
//     // }
//     return (
//         <>
//         <div>
//             <h2 className='text-red-400 text-center text-9xl'>{count}</h2>
//             <button className='p-4 bg-red-400' onClick={() => setCount(count+1)}>+</button>
//             <button className='p-4 bg-red-400' onClick={() => setCount(count-1)}>-</button>
//         </div>
//         <div>
//             <h2 className='text-red-400 text-center text-9xl'>{count2}</h2>
//             <button className='p-4 bg-red-400' onClick={() => setCount2(count2+1)}>+</button>
//             <button className='p-4 bg-red-400' onClick={() => setCount2(count2-1)}>-</button>
//         </div>
//         </>
//     )
// }

export default function Count() {
    const refH2 = useRef()
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/')
    })
    /* ref object
    {
        current: null
    }
    */
    // "0" + 1 => "01"
    
    return (
        <>
        <div className='absolute left-1/2 -translate-x-1/2'>
            <h2 ref={refH2} className='text-red-400 text-center text-9xl'>{0}</h2>{/* refH2.current = H2 element */}
            <button className='p-4 bg-red-400' onClick={() => refH2.current.innerHTML = parseInt(refH2.current.innerHTML) + 1}>+</button> 
            <button className='p-4 bg-red-400' onClick={() => refH2.current.innerHTML = parseInt(refH2.current.innerHTML) - 1}>-</button>
            <button onClick={() => refH2.current.scroll()}>test</button>
        </div>
        <Outlet/>
        </>
    )
}
