import React, { useState } from 'react'
import Card from './Card'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { displayAll } from '../redux/actions'

const CardSection = ({curPage,setCurPage}) => {

  const myState=useSelector((state)=>state.filteredData);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(displayAll())
  },[dispatch]);

  // logic for pagination
  const [perPage]=useState(16);
  const [offset,setOffset]=useState(0);

  const Totalpages=Math.ceil(myState.length/perPage);
   console.log(Totalpages);

  const pages=[];

  for(let i=0;i<6;i++)
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

  return (
    <div className=' col-span-4'>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gird-rows-5 text-center gap-2'>
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
          {curPage<=Totalpages-6 && <><span className="px-3 py-1">...</span><button onClick={()=>{setCurPage(Totalpages); setOffset(Totalpages-6);}} className="px-3 py-1 bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700 focus:outline-none">{Totalpages}</button></>}


          {curPage!==Totalpages&&<button onClick={onNext} className="px-3 py-1 rounded-r-lg bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700 focus:outline-none">Next &gt;</button>}
        </nav>
      </div>

    </div>
  )
}

export default CardSection