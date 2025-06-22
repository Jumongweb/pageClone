// import React from 'react'
// import Image from 'next/image'
// import Logo from '../asset/Paga-logo-Only 1.png'
// import Link from 'next/link'
// import NigeriaLogo from '../asset/nigeria 1.png'

// const Header = () => {
//   return (
//     <div className='flex items-center justify-between px-16 py-8'>
//          <Image src={Logo} alt="Paga Logo" />
//          <div className='flex gap-4'>
//             <Link href="/services">Services</Link>
//              <Link href="/agent">Agent</Link>
//              <Link href="/business">Business</Link>
//              <Link href="/developer">Developer</Link>
//              <Link href="/company">Company</Link>
//          </div>
//         <div className='flex items-center gap-8'>
//             <Image src={NigeriaLogo} alt='NigeriaLogo'/>
//             <button>Login</button>
//             <button className='bg-orange-400 p-2 rounded-md'>Get Started</button>

//         </div>
        
//     </div>
//   )
// }

// export default Header

"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../asset/Paga-logo-Only 1.png';
import Link from 'next/link';
import NigeriaLogo from '../asset/nigeria 1.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='flex items-center justify-between px-4 py-8 md:px-16 bg-[#fefae3]'>
      <Image src={Logo} alt="Paga Logo" width={120} height={40} />

      <div className='hidden md:flex gap-8'>
        <Link href="/services" className='hover:text-orange-400'>Services</Link>
        <Link href="/agent" className='hover:text-orange-400'>Agent</Link>
        <Link href="/business" className='hover:text-orange-400'>Business</Link>
        <Link href="/developer" className='hover:text-orange-400'>Developer</Link>
        <Link href="/company" className='hover:text-orange-400'>Company</Link>
      </div>

      <div className='hidden md:flex items-center gap-8'>
        <Image src={NigeriaLogo} alt='NigeriaLogo' width={24} height={24} />
        <button className='hover:text-orange-400 text-orange-500'>Login</button>
        <button className='bg-orange-400 p-2 rounded-md hover:bg-orange-500 text-white'>Get Started</button>
      </div>

      <button 
        className='md:hidden p-2'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className='space-y-2'>
          <span className='block w-8 h-0.5 bg-black'></span>
          <span className='block w-8 h-0.5 bg-black'></span>
          <span className='block w-8 h-0.5 bg-black'></span>
        </div>
      </button>

      {isMenuOpen && (
        <div className='md:hidden absolute top-24 left-0 right-0 bg-white z-50 shadow-lg p-4'>
          <div className='flex flex-col gap-4'>
            <Link href="/services" className='border-b pb-2'>Services</Link>
            <Link href="/agent" className='border-b pb-2'>Agent</Link>
            <Link href="/business" className='border-b pb-2'>Business</Link>
            <Link href="/developer" className='border-b pb-2'>Developer</Link>
            <Link href="/company" className='border-b pb-2'>Company</Link>
          </div>
          <div className='flex items-center gap-4 mt-4'>
            <Image src={NigeriaLogo} alt='NigeriaLogo' width={24} height={24} />
            <button className='flex-1 py-2 cursor-pointer'>Login</button>
            <button className='flex-1 bg-orange-400 p-2 rounded-md cursor-pointer'>Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;