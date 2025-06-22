import React from 'react'
import Header from '../component/Header'
import HeroPage from '../component/HeroPage'
import People from '../component/People'
import Freedom from '../component/Freedom'
import Paybill from '../component/Paybill'
import Agent from '../component/Agent'
import Customer from '../component/Customer'
import Patnering from '../component/Patnering'
import DownloadApp from '../component/DownloadApp'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div className='bg-[#ffffff]'>
        <Header/>
        <HeroPage/>
        <People/>
        <Freedom/>
        <Paybill/>
        <Agent/>
        <Customer/>
        <Patnering/>
        <DownloadApp/>
        <Footer/>
    </div>
  )
}

export default Home