import React from 'react'
import FilterSection from './components/FilterSection'
import CardSection from './components/CardSection'

const Home = () => {
  return (
    <div className='grid grid-cols-6 gap-5'>
        <FilterSection />
        <CardSection />
    </div>
  )
}

export default Home