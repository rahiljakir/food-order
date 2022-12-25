import React from "react";
import { FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const ContactUs = () => {
  return (
    <div>
      <section className='text-gray-700 body-font relative'>
        <div className='container px-5 py-10 mx-auto'>
          <div className='flex flex-col text-center w-full mb-12'>
            <h1
              className='sm:text-3xl font-medium title-font mb-4 text-gray-900 capitalize flex justify-center items-center'
              id='contact'
            >
              We Would Love to Hear from you !
            </h1>
          </div>
          <div className='lg:w-1/2 md:w-2/3 mx-auto'>
            <div className='flex flex-wrap -m-2'>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label for='name' className='leading-7 text-sm text-gray-600'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label
                    for='email'
                    className='leading-7 text-sm text-gray-600'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-full'>
                <div className='relative'>
                  <label
                    for='message'
                    className='leading-7 text-sm text-gray-600'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                  ></textarea>
                </div>
              </div>
              <div className='p-2 w-full'>
                <button className='flex mx-auto text-black bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-400 rounded text-lg'>
                  <Link to={"/"}>Submit Feedback</Link>
                </button>
              </div>
              <div className='p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center'>
                <a className='text-indigo-500'>contact@foodcity.com</a>
                <p className='leading-normal my-5'>
                  Maharaja Saiyajirao University
                  <br />
                  Vadodara, Gujarat - 390001
                </p>
                <span className='inline-flex'>
                  <a className='text-gray-500'>
                    <FaInstagram />
                  </a>
                  <a className='ml-4 text-gray-500'>
                    <FaGithub />
                  </a>
                  <a className='ml-4 text-gray-500'>
                    <FaTwitter />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
