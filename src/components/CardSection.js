import React from 'react'
import Card from './Card'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { displayAll } from '../redux/actions'

const CardSection = () => {

  const myState=useSelector((state)=>state.filteredData);

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(displayAll())
  },[dispatch]);


  return (
    <div className=' col-span-4 bg-yellow-200'>
      <div className='grid grid-cols-4 gird-rows-5 text-center gap-2'>
        {
          myState.slice(0,50).map((data)=>{
            return <Card
            key={data.id}
            img_url={data.avatar}
            firstName={data.first_name}
            lastName={data.last_name}
            email={data.email}
            domain={data.domain}
            availaibilty={data.available}
          />
          })
        }
      </div>
    </div>
  )
}

export default CardSection