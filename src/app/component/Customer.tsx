import React from 'react';
import Image from 'next/image';
import Customer1 from '../asset/customer1.svg';
import Customer2 from '../asset/customer2.svg';
import Customer3 from '../asset/customer3.svg';
import Customer4 from '../asset/customer4.svg';
import Dot from '../asset/dot.svg'

const Customer = () => {
  const customers = [
    { image: Customer1, text: "So u can use #paga to pay for uk Visa, Dope. Hopefully itunes soon." },
    { image: Customer2, text: "We use paga for buying airtime and accepting customer payments. Rock solid and great!" },
    { image: Customer3, text: "You guys ever used @mypaga? You could even use it abroad too. Interesting!" },
    { image: Customer4, text: "Thank you Paga for your prompt response. I am a satisfied customer." },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mt-6 sm:mt-8 md:mt-12">
        Happy <span className="text-orange-500">Customer</span> stories
      </h2>
      <div className="mt-4 sm:mt-6 md:mt-8">
        <div className="md:grid md:grid-cols sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 hidden md:block">
          {customers.map((customer, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <Image src={customer.image} alt={`Customer ${index + 1}`} />
              <p className="mt-4 text-sm sm:text-base">{customer.text}</p>
            </div>
          ))}
        </div>
        <div className="flex overflow-x-auto snap-x snap-mandatory md:hidden">
          {customers.map((customer, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-3/4 p-2 snap-center">
              <div className="text-center flex flex-col items-center">
                <Image src={customer.image} alt={`Customer ${index + 1}`} />
                <p className="mt-4 text-sm sm:text-base">{customer.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center mt-16'>
        <Image src={Dot} alt='dot' className=''/>
      </div>
    </div>
  );
};

export default Customer;