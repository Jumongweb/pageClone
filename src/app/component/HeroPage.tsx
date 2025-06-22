import React from 'react';
import Image from 'next/image';
import HeroBackground from '../asset/Frame 25.png';
import HeroImage from '../asset/Web-Mobile_Showcase-min 2.png';

const HeroPage = () => {
  const buttons = [
    {
      text: 'Create an Account',
      bgColor: 'bg-orange-400',
      textColor: 'text-white',
      hoverBg: 'hover:bg-orange-500',
      border: '',
    },
    {
      text: 'Learn More',
      bgColor: '',
      textColor: 'text-orange-400',
      hoverBg: 'hover:bg-orange-50',
      border: 'border border-orange-400',
    },
  ];

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 bg-[#fefae3]">

      <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
        <p className="text-orange-400 text-sm sm:text-base">Your cash, anywhere, anytime</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
          The Mobile <span className="text-orange-400">payment</span> operator for you and your business
        </h1>
        <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base">
          We are building an ecosystem to enable people to digitally send and receive money, creating simple financial access for everyone.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 items-center sm:items-start">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-md transition-colors text-sm sm:text-base w-2/3 sm:w-auto ${button.bgColor} ${button.textColor} ${button.hoverBg} ${button.border}`}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>

      <div className="relative w-full max-w-[400px] mx-auto md:max-w-none">
        <div className="relative ml-8 w-2/3 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] bg-orange-400 rounded-full overflow-hidden">
          <Image
            src={HeroBackground}
            alt="Hero Background"
            className="w-full h-full object-cover"
            width={500}
            height={300}
          />
        </div>
        <Image
          src={HeroImage}
          alt="Mobile Payment Showcase"
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-[600px] h-[400px] object-contain z-10"
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};

export default HeroPage;