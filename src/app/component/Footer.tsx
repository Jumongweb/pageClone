import React from 'react';
import Image from 'next/image';
import Logo from '../asset/Paga-logo-Only 1.png';
import Instagram from '../asset/instagram.svg';
import Facebook from '../asset/facebook.svg';
import Twitter from '../asset/twitter.svg';
import Youtube from '../asset/youtube.svg';
import Mail from '../asset/mail.svg';
import Location from '../asset/location.svg';
import Phone from '../asset/phone.svg';

const Footer = () => {
  return (
    <footer className="bg-[#fefae3] text-gray-800 p-4 sm:p-6 md:px-24 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-6 max-w-7xl mx-auto">
        <div className="mb-6 md:mb-0 text-center">
          <Image src={Logo} alt="Paga Logo" className="max-w-xs mx-auto" />
          <p className="mt-4 text-sm text-center">
            Paga is a mobile payment company. We are building an ecosystem to enable people to digitally send and receive money, and creating simple financial access for everyone.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-8 justify-center">
            <a href="#"><Image src={Instagram} alt="Instagram" className="w-5 sm:w-6 hover:opacity-75" /></a>
            <a href="#"><Image src={Facebook} alt="Facebook" className="w-5 sm:w-6 hover:opacity-75" /></a>
            <a href="#"><Image src={Twitter} alt="Twitter" className="w-5 sm:w-6 hover:opacity-75" /></a>
            <a href="#"><Image src={Youtube} alt="Youtube" className="w-5 sm:w-6 hover:opacity-75" /></a>
          </div>
        </div>
        <div className="mb-6 md:mb-0 text-center sm:text-left">
          <h3 className="text-lg font-bold mb-2 text-[#fa6764]">About</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-600">Company</a></li>
            <li><a href="#" className="hover:text-gray-600">Career</a></li>
            <li><a href="#" className="hover:text-gray-600">FAQ</a></li>
            <li><a href="#" className="hover:text-gray-600">Media Kit</a></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0 text-center sm:text-left">
          <h3 className="text-lg font-bold mb-2 text-[#fa6764]">Products</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-600">Personal</a></li>
            <li><a href="#" className="hover:text-gray-600">Agent</a></li>
            <li><a href="#" className="hover:text-gray-600">Business</a></li>
            <li><a href="#" className="hover:text-gray-600">Developer</a></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0 text-center sm:text-left">
          <h3 className="text-lg font-bold mb-2 text-[#fa6764]">Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-600">Donate.ng</a></li>
            <li><a href="#" className="hover:text-gray-600">Find an Agent</a></li>
            <li><a href="#" className="hover:text-gray-600">Paga Blog</a></li>
            <li><a href="#" className="hover:text-gray-600">Pricing</a></li>
            <li><a href="#" className="hover:text-gray-600">Remittances</a></li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold mb-2 text-[#fa6764]">Reach us</h3>
          <div className="flex gap-2 mb-2 justify-center sm:justify-start">
            <Image src={Mail} alt="Mail" className="w-5 sm:w-6" />
            <p className="text-sm">service@mypaga.com</p>
          </div>
          <div className="flex gap-2 mb-2 justify-center sm:justify-start">
            <Image src={Phone} alt="Phone" className="w-5 sm:w-6" />
            <p className="text-sm">070000007242</p>
          </div>
          <div className="flex gap-2 justify-center sm:justify-start">
            <Image src={Location} alt="Location" className="w-5 sm:w-6" />
            <p className="text-sm">176 Herbert Macaulay Road, Yaba, Lagos, Nigeria</p>
          </div>
        </div>
      </div>
      <div className="sm:flex justify-between mt-8 sm:mt-16 text-center">
        <p>© 2022 Paga. All rights reserved</p>
        <p>Terms of service | Security</p>
      </div>
    </footer>
  );
};

export default Footer;