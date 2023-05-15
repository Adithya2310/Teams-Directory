import React from 'react'
import Card from './components/Card'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Cart = () => {
  const teamData=useSelector((state)=>state.teamData);
  
  if(teamData.length===0)
  {
    return <div className=' bg-blue-300 rounded text-gray-800 py-8 text-center px-10 text-4xl text-medium'>
      Please Add Some Members
    </div>
  }
  return (
    <section className=' bg-blue-300 rounded mr-10 py-10 px-10'>
    <h2 className='cursor-pointer text-slate-800  px-4 mt-4 text-3xl font-medium'>
    <NavLink className="hover:text-purple-500 hover:underline" to="/">Home</NavLink> / Team</h2>
    <div className='my-12 container grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 grid-rows-4 gap-6 text-center'>
    {
      teamData.map((data)=>{
        return <Card
            key={data[0].id}
            id={data[0].id}
            img_url={data[0].avatar}
            firstName={data[0].first_name}
            lastName={data[0].last_name}
            email={data[0].email}
            domain={data[0].domain}
            availaibilty={data[0].available}
            removeButton={true}
          />
      })
    }
    </div>

    </section>
  )
}

export default Cart