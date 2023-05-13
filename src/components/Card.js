import React from 'react'

const Card = ({img_url,firstName,lastName,email,domain,availaibilty}) => {
  return (
<div className=' relative mx-2 my-3 py-3 px-3 bg-purple-400 rounded-lg'>
        <div className={`absolute w-3 h-3 ${availaibilty?"bg-availaible":"bg-na"} rounded-full`}></div>
        <img className='mx-14 rounded-full bg-slate-50' src={img_url} alt="profile_img" height={70} width={70}/>
        <h2 className='mt-2 py-2 text-xl font-medium mx-1'>{firstName} {lastName}</h2>
        <p className='font-medium whitespace-normal break-all mx-1'>{email}</p>
        <p className='py-2 font-mono'>Domain: {domain}</p>
        <button className=' my-2 bg-slate-200 hover:duration-300 hover:bg-white bg-btn rounded hover: px-4 py-1'>Add</button>
</div>
  )
}

export default Card