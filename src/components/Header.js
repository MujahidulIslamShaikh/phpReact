import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='shadow-lg'>

            <div className='w-[80vw] mx-auto flex justify-between items-center'>
                <h1 className='text-5xl font-thin'>Container</h1>
                <ul className='flex items-center gap-4 font-medium '>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/About'}>About</Link></li>
                    <li><Link to={'/'}>Projects</Link></li>
                    <li><Link to={'/Contact'}>Contact</Link></li>
                </ul>

                <Link className='text-red-600 font-bold' to={'./signup'}>Signup</Link>
            </div>
        </div>
    )
}


export default Header;        