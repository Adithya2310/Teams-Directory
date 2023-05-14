import React, { useState } from 'react'
import FilterSection from './components/FilterSection'
import CardSection from './components/CardSection'

const Home = () => {
  const [curPage,setCurPage]=useState(1);

  return (
    <div className='grid grid-cols-6 lgap-5'>
        <FilterSection curPage={curPage} setCurPage={setCurPage}/>
        <CardSection curPage={curPage} setCurPage={setCurPage}/>
    </div>
  )
}

export default Home