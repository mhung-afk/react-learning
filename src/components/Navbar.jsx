import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='flex'>
            <Link to={'/'}>Home</Link>
            <ul className='flex'>
                <li><Link to={'/count'}>Count</Link></li>
                <li><Link to={'/board'}>Board</Link></li>
            </ul>
        </div>
    )
}
