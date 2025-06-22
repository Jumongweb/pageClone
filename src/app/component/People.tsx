"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Airtime from '../asset/Airtime_Data 1.svg';
import RecieveMoney from '../asset/Receive money 1.svg';
import Remittances from '../asset/Remittances 1.svg';
import RequestMoney from '../asset/Request money 1.svg';
import SendMoney from '../asset/Send money 1.svg';
import PayBill from '../asset/pay_bills 1.svg';
import ArrowRight from '../asset/arrow-right.svg';

const People = () => {
  const services = [
    {
      icon: SendMoney,
      title: 'Send Money',
      description: 'Send money instantly to anyone with a phone number, email address, or bank account.',
    },
    {
      icon: Remittances,
      title: 'Get Remittance',
      description: 'Receive instant and secure money transfers from abroad to any Nigerian mobile phone number or bank account, using Paga.',
    },
    {
      icon: RecieveMoney,
      title: 'Receive Money',
      description: 'Receive money instantly from anyone with a phone number, email address, or bank account.',
    },
    {
      icon: RequestMoney,
      title: 'Request Money',
      description: 'Receive money instantly from anyone with a phone number, email address, or bank account.',
    },
    {
      icon: PayBill,
      title: 'Pay Bills',
      description: "Renew your Pay TV, Internet, Electricity, and so much more with Paga's smooth bill payment services.",
    },
    {
      icon: Airtime,
      title: 'Top-up Airtime & Data',
      description: 'Top up your data and airtime instantly using Paga.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.touches[0].clientX);
  };
  
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left (next card)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }
    if (touchStart - touchEnd < -50) {
      // Swipe right (previous card)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-6 sm:py-8">
      <div className="text-2xl sm:text-3xl md:text-5xl mb-6 sm:mb-8 text-center sm:text-left">
        <p>
          Join over <span className="text-orange-400">19 million</span>
        </p>
        <p>people who use Paga to</p>
      </div>

      <div className="relative">
        {/* Carousel Container for Mobile */}
        <div
          className="overflow-hidden w-full sm:hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-amber-50 p-4 rounded-2xl flex flex-col items-center text-center shadow-sm min-w-full"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Image src={service.icon} alt={`${service.title} icon`} className="w-10 h-10" />
                </div>
                <div className="flex flex-col flex-grow">
                  <p className="text-orange-500 mt-2 font-bold text-lg">{service.title}</p>
                  <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                </div>
                <div className="flex gap-1 items-center mt-auto pt-2">
                  <div className="text-orange-500 font-bold text-sm">Read more</div>
                  <div>
                    <Image className="cursor-pointer w-4 h-4" src={ArrowRight} alt="Arrow right" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots for Mobile */}
        <div className="flex justify-center mt-2 space-x-1 sm:hidden">
          {services.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-orange-400' : 'bg-gray-300'}`}
            ></span>
          ))}
        </div>

        {/* Grid Layout for Larger Screens */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-amber-50 p-6 sm:p-8 rounded-2xl flex flex-col items-center text-center shadow-sm"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Image src={service.icon} alt={`${service.title} icon`} className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <div className="flex flex-col flex-grow">
                <p className="text-orange-500 mt-2 font-bold text-lg sm:text-xl">{service.title}</p>
                <p className="mt-2 text-sm sm:text-base text-gray-600">{service.description}</p>
              </div>
              <div className="flex gap-1 items-center mt-auto pt-2">
                <div className="text-orange-500 font-bold text-sm sm:text-base">Read more</div>
                <div>
                  <Image className="cursor-pointer w-4 h-4 sm:w-5 sm:h-5" src={ArrowRight} alt="Arrow right" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default People;