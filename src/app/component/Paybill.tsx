import React from 'react';
import Image from 'next/image';
import AEDC from '../asset/AEDC 1.svg';
import DSTV from '../asset/DSTV 1.svg';
import IE from '../asset/IE 1.png';
import EKEDC from '../asset/EKEDC 1.svg';
import KEDCOPREPAID from '../asset/KEDCOPREPAID 1.svg';
import PHED from '../asset/PHED 1.svg';
import JEDCO from '../asset/JEDCO 1.svg';
import SMILE from '../asset/SMILE 1.svg';
import SWIFT from '../asset/SWIFT 1.svg';
import SPECTRANET from '../asset/SPECTRANET 1.svg';
import GOTV from '../asset/GOTV 1.svg';
import NAIRABET from '../asset/NAIRABET 1.svg';
import STARTIMES from '../asset/STARTIMES 1.svg';
import LCC from '../asset/LCC 1.svg';
import METRODIGITAL from '../asset/METRODIGITAL 1.svg';
import MYTV from '../asset/MYTV 1.svg';
import PLAYTV from '../asset/PLAYTV 1.svg';

const Paybill = () => {
  const billers = [
    AEDC, DSTV, IE, EKEDC, KEDCOPREPAID, PHED,
    JEDCO, SMILE, SWIFT, SPECTRANET, GOTV, NAIRABET,
    STARTIMES, LCC, METRODIGITAL, MYTV, PLAYTV,
  ];

  return (
    <div className="bg-[#fefae3] px-4 sm:px-8 md:px-16 lg:px-36 py-6 sm:py-8 max-w-screen-xl mx-auto">
      <div className="text-left font-bold">
        <p className="text-2xl sm:text-3xl md:text-4xl">
          Pay your <span className="text-[#fa5454]">bills instantly</span>
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl">without opening a Paga account!</p>
        <p className="text-[#fa5454] mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg">
          Select a biller to get started
        </p>
      </div>
      <div className="mt-6 sm:mt-8">
        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
          {billers.map((biller, index) => (
            <Image
              key={index}
              src={biller}
              alt={`Biller ${index + 1}`}
              className="w-16 sm:w-24 md:w-28 lg:w-32 mx-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Paybill;