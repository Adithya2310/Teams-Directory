import React, { useState } from 'react'
import { addToTeam, removeFromTeam } from '../redux/actions'
import { useDispatch } from 'react-redux'

const Card = ({id,img_url,firstName,lastName,email,domain,availaibilty,removeButton}) => {



  // to show the remove button
  const [remove,setRemove]=useState(removeButton);

  // const teamData=useSelector((state)=>state.teamData);

  // to find out if the person is added to the cart
  // const personInCart=teamData.filter((curElem)=>{
  //   return curElem[0].id===id
  // })
  // console.log("person in cart",personInCart);

  const dispatch=useDispatch();

  const removePerson=()=>{
    setRemove(false);
    dispatch(removeFromTeam(id));
  }

  const addPerson=()=>{
    setRemove(true);
    dispatch(addToTeam(id));
  }


  return (
<div className=' relative mx-2 my-3 py-3 px-3 bg-purple-400 rounded-lg'>
        <div className={`absolute w-3 h-3 ${availaibilty?"bg-availaible":"bg-na"} rounded-full`}></div>
        <img className='mx-14 rounded-full bg-slate-50' src={img_url} alt="profile_img" height={70} width={70}/>
        <h2 className='mt-2 py-2 text-xl font-medium mx-1'>{firstName} {lastName}</h2>
        <p className='font-medium whitespace-normal break-all mx-1'>{email}</p>
        <p className='py-2 font-mono'>Domain: {domain}</p>
        {
          remove?
          <button className='my-2 bg-red-500 hover:duration-300 hover:bg-red-600 bg-btn rounded hover: px-4 py-1 right-0' onClick={removePerson}>Remove</button>
          :<button className='my-2 bg-slate-200 hover:duration-300 hover:bg-white bg-btn rounded hover: px-4 py-1' onClick={addPerson}>Add</button>
        }
</div>
  )
}

export default Card