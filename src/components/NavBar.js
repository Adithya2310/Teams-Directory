import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <section className='navbar'>
        <div className='container flex justify-around'>
        <NavLink to="/">
          <img className='' height="150" width="250" src="/logo.png" alt="" />
        </NavLink>
            <p className='my-10 text-purple-600 text-xl opacity-0 lg:opacity-100 lg:ml-96 font-mono'>For Heliverse</p>
            <NavLink to="/cart">
              <button className=' bg-gradient-to-r from-purple-400 to-purple-500 bg-purple-500 rounded my-7 px-4 h-12'>Team</button>
            </NavLink>
        </div>
    </section>
  )
}

export default NavBar