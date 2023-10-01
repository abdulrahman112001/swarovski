import { useState } from 'react';
import Facebook_ic from '../atoms/icons/facebookicon';
import Insta_ic from '../atoms/icons/instaIcon';
import Pinterest_ic from '../atoms/icons/pinteresticon';
import Snap_ic from '../atoms/icons/snapchaticon';
import Twitter_ic from '../atoms/icons/twittericon';
import YouTube_ic from '../atoms/icons/youtubeicon';
import ModalCOmp from '../molecules/Modal2';
import { t } from 'i18next';

const FooterSection = () => {
  const [openModalApp, setOpenModalApp] = useState(false);
  return (
    <>
      <section className='bg-bgGray border-t-[1px] border-solid border-[#fff]'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-12 s-600:flex s-600:flex-col '>
            <div className='grid col-span-9 py-[1.2rem] gap-5 order-2'>
              <ul className='flex gap-5 lg-m:grid lg-m:grid-cols-2 s-500:!grid-cols-1'>
                <li>
                  <a
                    href='/contact-us'
                    className='underline hover:cursor-pointer'
                  >
                    {t('Contact us')}
                  </a>
                </li>
                <li>
                  <a href='/faqs' className='underline hover:cursor-pointer'>
                    {t('FAQs')}
                  </a>
                </li>
                <li>
                  <a
                    href='/refund-policy'
                    className='underline hover:cursor-pointer'
                  >
                    {t('Returns and refunds')}
                  </a>
                </li>
                <li>
                  <a href='#' className='underline hover:cursor-pointer'>
                    {t('About us')}
                  </a>
                </li>
                <li>
                  <ModalCOmp
                    isOpen={openModalApp}
                    onClose={() => setOpenModalApp(false)}
                    size={450}
                    btnText={
                      <span
                        className='underline hover:cursor-pointer'
                        onClick={() => setOpenModalApp(true)}
                      >
                        {t('Mobile app')}
                      </span>
                    }
                  >
                    <h2 className='text-center text-[28px] mb-10'>
                      {t('Application coming soon')}
                    </h2>
                    <p className='text-center'>
                      {t(
                        'The mobile app will be available very soon. Stay tuned'
                      )}
                    </p>
                  </ModalCOmp>
                </li>
              </ul>

              <div className=''>
                <p>© {t('Copyright 2023 KSA INT. All rights reserved')}.</p>
              </div>
            </div>

            <div className='col-span-3 py-[1.2rem] order-1'>
              <span className='text-[#222] font-bold'>{t('Follow us')}</span>

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
        </div>
      </section>
    </>
  );
};

export default FooterSection;
