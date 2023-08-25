import React, { useState, useEffect } from 'react';

import CheckFalse from '../atoms/icons/checkFalse';
import CheckTrue from '../atoms/icons/checkTrue';

const Newsletter = () => {
  const [isCheckedEmail, setIsCheckedEmail] = useState(true);
  const [isCheckedSMS, setIsCheckedSMS] = useState(false);

  useEffect(() => {
    if (isCheckedEmail) {
      document.body.setAttribute('input-check', 'true');
    } else {
      document.body.removeAttribute('input-check');
    }
  }, [isCheckedEmail]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCheckboxChangeEmail = (event: any) => {
    setIsCheckedEmail(event.target.checked);
  };
  const handleCheckboxChangeSMS = (event: any) => {
    setIsCheckedSMS(event.target.checked);
  };
  return (
    <div className='container mx-auto px-4'>
      <section className='grid grid-cols-2 my-20'>
        <div>
          <p className='text-[33px] font-[nimbus,sans-serif] uppercase font-extrabold'>
            Get 10% off your first order
          </p>
          <p>
            Sign up for promotions, tailored new arrivals, stock updates and
            more – straight to your inbox
          </p>
        </div>

        <div className='grid gap-4'>
          {/* handle this form after */}
          <form className='grid gap-4'>
            <p>Get updates by</p>

            {/* email input */}
            <div className='grid gap-3'>
              <div>
                <label htmlFor='Email' className='flex items-center'>
                  <div className='relative w-fit New-input-checked'>
                    <input
                      type='checkbox'
                      className='absolute opacity-0 cursor-pointer'
                      onChange={handleCheckboxChangeEmail}
                      checked={isCheckedEmail}
                    />
                    <CheckFalse />
                    <CheckTrue />
                  </div>
                  Email
                </label>
              </div>
              {!isCheckedEmail || (
                <div>
                  <input
                    aria-label='email'
                    data-testid='email'
                    aria-invalid='false'
                    autoComplete='email'
                    type='email'
                    placeholder='Your email address'
                    name='email'
                    className=' border-solid border-[0.01rem] border-[#727272] ps-3 p-[0.8rem] rounded-[0.8rem] w-full max-w-[18rem]'
                  />
                </div>
              )}
            </div>

            {/* sms input */}
            <div className='grid gap-3'>
              <div>
                <label htmlFor='SMS' className='flex items-center'>
                  <div className='relative w-fit New-input-checked'>
                    <input
                      type='checkbox'
                      className='absolute opacity-0 cursor-pointer'
                      onChange={handleCheckboxChangeSMS}
                      checked={isCheckedSMS}
                    />
                    <CheckFalse />
                    <CheckTrue />
                  </div>
                  SMS
                </label>
              </div>
              {!isCheckedSMS || (
                <div className=''>
                  <input
                    aria-label='email'
                    data-testid='email'
                    aria-invalid='false'
                    autoComplete='email'
                    type='email'
                    placeholder='Your phone number'
                    name='email'
                    className=' border-solid border-[0.01rem] border-[#727272] ps-3 p-[0.8rem] rounded-[0.8rem] w-full max-w-[18rem]'
                  />
                </div>
              )}
            </div>

            {/* button signup */}

            <div>
              <button className='bg-[#333] hover:bg-[#727272] px-[1.2rem] py-[0.7rem] text-white'>
                Sign Up
              </button>
            </div>
          </form>

          <p>
            By signing up, you consent to receiving marketing by email and/or
            SMS and acknowledge you have read our{' '}
            <a target='_blank' href='#' className='underline'>
              Privacy Policy
            </a>
            .
            <span className='m-1'>
              Unsubscribe anytime at the bottom of our emails or by replying
              STOP to any of our SMS.
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;