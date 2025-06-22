import React from 'react';
import Image from 'next/image';
import Trust from '../asset/1-min 1.svg';
import PagaForYou from '../asset/2-min 1.svg';
import Thumb from '../asset/3-min 1.svg';

const Freedom = () => {
  const features = [
    {
      icon: Trust,
      title: 'Tested and Trusted',
      description:
        'Millions of Nigerians trust us with their money. We ensure that money is safe by complying with the highest global security standards.',
    },
    {
      icon: PagaForYou,
      title: 'Paga for You, Paga for Me',
      description:
        'Bank or unbanked, online or offline, Paga offers you a central place for simple money transfers.',
    },
    {
      icon: Thumb,
      title: 'Simple, Quick, Reliable',
      description:
        'Enjoy a smooth and stress-free money transfer experience across all your devices.',
    },
  ];

  return (
    <div className="text-center mt-6 sm:mt-8 px-4 sm:px-8 md:px-16 lg:px-24 py-6 sm:py-8">
      <div className="max-w-3xl mx-auto">
        <button className="bg-amber-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl text-white text-sm sm:text-base mb-2 sm:mb-4">
          Why Paga
        </button>
        <p className="text-2xl sm:text-3xl md:text-4xl">
          Freedom to do it <span className="text-pink-500">your way</span>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={feature.icon}
              alt={`${feature.title} icon`}
              className="w-12 h-12 sm:w-16 sm:h-16 mt-4 sm:mt-6"
            />
            <div className="mt-4 sm:mt-6">
              <p className="text-orange-500 font-bold text-lg sm:text-xl">
                {feature.title}
              </p>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Freedom;