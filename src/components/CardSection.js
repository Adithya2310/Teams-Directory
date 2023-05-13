import React, { useState } from 'react'
import Card from './Card'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { displayAll } from '../redux/actions'

const CardSection = () => {

  // logic for pagination
  const [curPage,setCurPage]=useState(1);
  const [perPage]=useState(16);
  const [offset,setOffset]=useState(0);

  const pages=[];

  for(let i=0;i<8;i++)
  {
    if(i+offset+1<64)
      pages[i]=i+offset+1;
  }

  // to handle next and prev button in pagination
  const onNext=()=>{
    setCurPage(curPage+1);
    setOffset(offset+1);
  }

  const onPrev=()=>{
    setCurPage(curPage-1);
    setOffset(offset-1);
  }

  const myState=useSelector((state)=>state.filteredData);


  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(displayAll())
  },[dispatch]);


  return (
    <div className=' col-span-4'>
      <div className='grid grid-cols-4 gird-rows-5 text-center gap-2'>
        {
          myState.slice(curPage*perPage-perPage,curPage*perPage).map((data)=>{
            return <Card
            key={data.id}
            id={data.id}
            img_url={data.avatar}
            firstName={data.first_name}
            lastName={data.last_name}
            email={data.email}
            domain={data.domain}
            availaibilty={data.available}
            removeButton={false}
          />
          })
        }
      </div>
      <div className="flex justify-center items-center py-5 mt-8">
        <nav className="inline-flex">
        {curPage!==1&&<button onClick={onPrev} className="px-3 py-1 rounded-l-lg bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700 focus:outline-none">&lt; Previous</button>}
          {
            pages.map((page,index)=>{
              return  <button key={index} onClick={()=>setCurPage(page)} className={page===curPage?"px-3 py-1 bg-blue-300 text-white hover:bg-blue-400 focus:outline-none":"px-3 py-1 bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700 focus:outline-none"}>{page}</button>
            })
          }
          {offset<56 && <><span className="px-3 py-1">...</span><button onClick={()=>setCurPage(63)} className="px-3 py-1 bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700 focus:outline-none">63</button></>


          }


          {curPage!==63&&<button onClick={onNext} className="px-3 py-1 rounded-r-lg bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700 focus:outline-none">Next &gt;</button>}
        </nav>
      </div>

    </div>
  )
}

export default CardSection