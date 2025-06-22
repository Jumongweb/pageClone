import React from 'react';
import Image from 'next/image';
import Agent1 from '../asset/Image1 1.svg';
import Agent2 from '../asset/Image2 1.svg';
import Agent3 from '../asset/Image3 1.svg';

const Agent = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-6 sm:py-8">
      <div className="bg-[#f16838] rounded-2xl p-4 sm:p-6 md:p-8 text-white flex flex-col md:flex-row md:items-start">
        <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
          <button className="bg-yellow-400 text-[#ffffff] text-xs sm:text-sm px-2 py-1 rounded-full mb-2">
            Need an agent?
          </button>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">Over 27,000 <br /> Agents Nationwide!</h2>
          <p className="mt-2 text-sm sm:text-base">
            You can also withdraw cash, deposit money to your bank account, pay bills, open a Paga account and so much more by visiting a Paga Agent near you.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-8">
            <button className="bg-white text-[#f16838] px-4 py-2 rounded-md text-sm sm:text-base hover:bg-gray-100 transition-colors w-full sm:w-auto">
              Find an agent
            </button>
            <button className="bg-[#f16838] text-white border border-white px-4 py-2 rounded-md text-sm sm:text-base hover:bg-[#e05c2b] transition-colors w-full sm:w-auto">
              Become an Agent
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
          <div className="flex flex-col items-center">
            <div className="flex gap-4 mb-4 mr-8">
              <Image
                src={Agent2}
                alt="Agent 2"
                className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full object-cover"
              />
              <Image
                src={Agent1}
                alt="Agent 3"
                className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full object-cover"
              />
            </div>
            <div>
              <Image
                src={Agent3}
                alt="Agent 1"
                className="w-24 sm:w-28 md:w-42 h-24 sm:h-28 md:h-32 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agent;