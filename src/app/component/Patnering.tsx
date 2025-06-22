import React from 'react';
import Image from 'next/image';
import Logos from '../asset/logos (18) 1.png';

const Patnering = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-16 py-8 sm:py-12 font-bold">
      <h2 className="text-4xl text-left">
        We are proud to be <br className="md:hidden" />partnering <br className="hidden md:block" /> with over
        <span className="text-[#fa5454]">6000 businesses</span>
      </h2>
      <div className="mt-8 flex justify-center">
        <Image src={Logos} alt="Logos" className="w-full" />
      </div>
    </div>
  );
};

export default Patnering;