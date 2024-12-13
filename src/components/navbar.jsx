import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='container'>

                <nav>
                    <div className='navigation'>
                        <div>
                            <h1><Link to={'/'} className='nav-link'>Abisek</Link></h1>
                        </div>
                        <div className='list'>
                            <ul>
                                <li><Link to={'/'} className='nav-link'>Home</Link></li>
                                <li><Link to={'/works'} className='nav-link'>Works</Link></li>
                                <li><Link to={'/about'} className='nav-link'>About</Link></li>
                                <li><Link to={'/projects'} className='nav-link'>Projects</Link></li>
                                <li><Link to={'/services'} className='nav-link'>Services</Link></li>
                            </ul>
                        </div>
                        <div>
                            <button className='btn'>Let's chat</button>
                        </div>
                    </div><hr />
                </nav>
            </div>
        </>
    )
}

export default Navbar