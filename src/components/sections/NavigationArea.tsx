import { useDisclosure } from '@mantine/hooks';
import { Accordion, Modal } from '@mantine/core';
import Facebook_ic from '../atoms/icons/facebookicon';
import Insta_ic from '../atoms/icons/instaIcon';
import Pinterest_ic from '../atoms/icons/pinteresticon';
import Snap_ic from '../atoms/icons/snapchaticon';
import Twitter_ic from '../atoms/icons/twittericon';
import YouTube_ic from '../atoms/icons/youtubeicon';
import ModalCOmp from '../molecules/Modal2';
import { useState } from 'react';

const NavigationArea = () => {
  const [openModalApp, setOpenModalApp] = useState(false);

  return (
    <>
      <section className=' bg-bgGray'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-4 lg-m:grid-cols-2 s-500:!grid-cols-1 lg-m:gap-8 py-[1.875rem]'>
            <div className='s-500:hidden'>
              <h2 className='text-[#222] font-bold mb-[10px]'>
                Customer Service
              </h2>
              <ul className='grid gap-[8px]'>
                <li>
                  <a href='/contact-us' className='hover:underline'>
                    Contact us
                  </a>
                </li>
                <li>
                  <a href='/faqs' className='hover:underline'>
                    FAQs
                  </a>
                </li>

                <li>
                  <a href='/refund-policy' className='hover:underline'>
                    Returns and refunds
                  </a>
                </li>
              </ul>
            </div>

            <div className='s-500:hidden'>
              <h2 className='text-[#222] font-bold mb-[10px]'>
                About FARFETCH
              </h2>
              <ul className='grid gap-[8px]'>
                <li>
                  <a href='#' className='hover:underline'>
                    About us
                  </a>
                </li>

                <li>
                  <a href='#' className='hover:underline'>
                    Careers
                  </a>
                </li>
                <li>
                  <ModalCOmp
                    isOpen={openModalApp}
                    onClose={() => setOpenModalApp(false)}
                    size={450}
                    btnText={
                      <span
                        className='hover:underline'
                        onClick={() => setOpenModalApp(true)}
                      >
                        FARFETCH app
                      </span>
                    }
                  >
                    <h2 className='text-center text-[28px] mb-10'>
                      Application coming soon
                    </h2>
                    <p className='text-center'>
                      The mobile app will be available very soon. Stay tuned
                    </p>
                  </ModalCOmp>
                </li>
              </ul>
            </div>

            <div className='s-500:hidden'>
              <h2 className='text-[#222] font-bold mb-[10px]'>Legal</h2>
              <ul className='grid gap-[8px]'>
                <li>
                  <a href='#' className='hover:underline'>
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Cookie Consent
                  </a>
                </li>
              </ul>
            </div>

            <div className='flex flex-col gap-[1.9rem] s-500:hidden'>
              <div>
                <h2 className='text-[#222] font-bold mb-[10px]'>
                  FARFETCH Sustainable Services
                </h2>

                <a href='#' className='hover:underline'>
                  Second Life: sell your designer bags
                </a>
              </div>

              <div>
                <span className='text-[#222] font-bold'>Follow us</span>

                <ul className='flex gap-[0.3rem] my-1'>
                  <li className='flex justify-center items-center w-11 h-11 hover:bg-[#f5f5f5] rounded-[0.8rem]'>
                    <a href='#'>
                      <Insta_ic />
                    </a>
                  </li>
                  <li className='flex justify-center items-center w-11 h-11 hover:bg-[#f5f5f5] rounded-[0.8rem]'>
                    <a href='#'>
                      <Facebook_ic />
                    </a>
                  </li>
                  <li className='flex justify-center items-center w-11 h-11 hover:bg-[#f5f5f5] rounded-[0.8rem]'>
                    <a href='#'>
                      <Pinterest_ic />
                    </a>
                  </li>
                  <li className='flex justify-center items-center w-11 h-11 hover:bg-[#f5f5f5] rounded-[0.8rem]'>
                    <a href='#'>
                      <Twitter_ic />
                    </a>
                  </li>
                  <li className='flex justify-center items-center w-11 h-11 hover:bg-[#f5f5f5] rounded-[0.8rem]'>
                    <a href='#'>
                      <Snap_ic />
                    </a>
                  </li>
                  <li className='flex justify-center items-center w-11 h-11 hover:bg-[#f5f5f5] rounded-[0.8rem]'>
                    <a href='#'>
                      <YouTube_ic />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <Accordion
              transitionDuration={500}
              className='navigation-accordion s-500:block hidden'
            >
              <Accordion.Item value='item-1'>
                <Accordion.Control>
                  {' '}
                  <h2 className='text-[#222] font-bold mb-[10px]'>
                    Customer Service
                  </h2>
                </Accordion.Control>
                <Accordion.Panel>
                  {' '}
                  <ul className='grid gap-[8px] s-500:gap-4'>
                    <li>
                      <a href='#' className='hover:underline'>
                        Contact us
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:underline'>
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:underline'>
                        Orders and delivery
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:underline'>
                        Returns and refunds
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:underline'>
                        Payment and pricing
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:underline'>
                        Cryptocurrency payments
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:underline'>
                        Promotion terms and conditions
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:underline'>
                        FARFETCH Customer Promise
                      </a>
                    </li>
                  </ul>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value='item-2'>
                <Accordion.Control>
                  {' '}
                  <h2 className='text-[#222] font-bold mb-[10px]'>
                    About FARFETCH
                  </h2>
                </Accordion.Control>
                <Accordion.Panel>
                  {' '}
                  <ul className='grid gap-[8px] s-500:gap-4'>
                    <li>
                      <a href='#' className='hover:underline'>
                        About us
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:underline'>
                        Investors
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:underline'>
                        FARFETCH partner boutiques
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:underline'>
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:underline'>
                        FARFETCH app
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:underline'>
                        Modern slavery statement
                      </a>
                    </li>
                  </ul>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value='item-3'>
                <Accordion.Control>
                  {' '}
                  <h2 className='text-[#222] font-bold mb-[10px]'>
                    Discounts and membership
                  </h2>
                </Accordion.Control>
                <Accordion.Panel>
                  {' '}
                  <ul className='grid gap-[8px]'>
                    <li>
                      <a href='#' className='hover:underline'>
                        Affiliate program
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:underline'>
                        Refer a friend
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:underline'>
                        FARFETCH membership
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:underline'>
                        Student discount UNiDAYS
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:underline'>
                        Student Beans and Graduates
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:underline'>
                        Student and Youth discount
                      </a>
                    </li>
                  </ul>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavigationArea;
