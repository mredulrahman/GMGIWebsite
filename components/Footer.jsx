"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <>
      <footer className="relative w-full py-12">
        <div className="absolute inset-0 bg-blue-300"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-[#25ABB9] bg-blend-multiply opacity-60"
          style={{ backgroundImage: "url('/footer/5eb7be3f64dfcb1d97d191a8affdc4f1.jpg')" }}
        ></div>
        <div className="grid grid-cols-1 md:grid-cols-4 items-start relative z-10 h-full gap-10 md:gap-6 px-6 md:px-16">
          <div className='flex justify-center md:justify-start md:mt-8'>
            <Image
              src="/footer/white-png.png"
              alt="GMGI Solutions Ltd Logo"
              width={130}
              height={130}
              className="object-contain"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className='text-xl font-bold text-white uppercase'>Important Links</h1>
            <div className='text-md font-normal mt-6 md:mt-10'>
              <ul className='flex flex-col gap-3 text-white'>
                <li className='list-none md:list-disc md:ml-5'>
                  <Link href="/" target="_blank" className="no-underline hover:underline text-gray-300">Home</Link>
                </li>
                <li className='list-none md:list-disc md:ml-5'>
                  <Link href="" className="no-underline hover:underline text-gray-300">Projects</Link>
                </li>
                <li className='list-none md:list-disc md:ml-5'>
                  <Link href="" className="no-underline hover:underline text-gray-300">Latest News</Link>
                </li>
              </ul>
              {/* <span className='flex flex-col gap-3 text-sm'>
                  </span> */}
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className='text-xl font-bold text-white uppercase'>Contact Us</h1>
            <h1 className='text-white text-md font-normal mt-6 md:mt-10 leading-loose'>Call : (+880) 1711588142</h1>
            <h1 className='text-white text-md font-normal leading-loose'>gmgisolutions@gmail.com</h1>
            <h1 className='text-white text-md font-normal leading-loose'>Sunday – Thursday: 9:00am – 5:00pm</h1>
          </div>
          <div className="text-center md:text-left">
            <h1 className='text-xl font-bold text-white uppercase'>Location</h1>
            <h1 className='text-white text-md mt-6 md:mt-10 leading-loose'>House : 6/20 (1st floor), Block- E, Lalmatia, Mohammadpur, Dhaka, Bangladesh.</h1>
          </div>
        </div>
      </footer>

      <div className="bg-[#2D2F44] w-full min-h-16 px-6 md:px-14 py-4 flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-white flex items-center justify-center md:justify-start">
          <h1 className="text-sm text-center md:text-left md:ml-18">
            © 2025 Copyright @ GMGI SOLUTIONS LTD .All rights reserved
          </h1>
        </div>
        <div className="flex gap-2 justify-center md:justify-end">
          <a href="https://www.facebook.com/GroupMappers" target="_blank" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#9697A2] text-black hover:bg-blue-800 hover:text-white transition duration-400 shadow-md">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com/GroupMappers" target="_blank" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#9697A2] text-black hover:bg-black hover:text-white transition duration-400 shadow-md border border-gray-700">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://www.linkedin.com/company/groupmappers/" target="_blank" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#9697A2] text-black hover:bg-blue-900 hover:text-white transition duration-400 shadow-md">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://www.youtube.com/@groupmappers539" target="_blank" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#9697A2] text-black hover:bg-red-600 hover:text-white transition duration-400 shadow-md">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;