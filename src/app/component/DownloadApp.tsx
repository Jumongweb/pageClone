import React from 'react';
import Image from 'next/image';
import GooglePlay from '../asset/playstore_n43eju 1.png';
import AppStore from '../asset/appstore_o1bj6d 1.png';
import HandHolding from '../asset/Hand_holding_a_phone 1.png';

const DownloadApp = () => {
  return (
    <div className="bg-[#f16838] rounded-2xl flex flex-col md:flex-row mx-6 sm:mx-12 md:mx-24 p-4 sm:p-6 md:p-8">
      <div className="flex-1 md:w-1/2">
        <button className="p-4 bg-amber-400 text-white rounded-2xl w-full sm:w-auto">
          Paga is wherever you are!
        </button>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mt-4 sm:mt-6 md:mt-8">
          Download the app, visit the mobile site, or dial *234# to transact.
        </h2>
        <div className="flex mt-8 sm:mt-10 md:mt-16">
          <Image src={GooglePlay} alt="Google Play" className="w-full max-w-xs mr-4" />
          <Image src={AppStore} alt="App Store" className="w-full max-w-xs" />
        </div>
      </div>
      <div className="flex-1 md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end">
        <Image src={HandHolding} alt="Hand holding" className="w-full md:w-auto max-w-xs md:max-w-none" />
      </div>
    </div>
  );
};

export default DownloadApp;