import React from 'react'
import Header from '../component/Header'
import HeroPage from '../component/HeroPage'
import People from '../component/People'
import Freedom from '../component/Freedom'
import Paybill from '../component/Paybill'
import Agent from '../component/Agent'
import Customer from '../component/Customer'

const Home = () => {
  return (
    <div className='mb-56 bg-[#ffffff]'>
        <Header/>
        <HeroPage/>
        <People/>
        <Freedom/>
        <Paybill/>
        <Agent/>
        <Customer/>
    </div>
  )
}

export default Home