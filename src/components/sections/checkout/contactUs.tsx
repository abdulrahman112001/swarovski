import FAQ_IC from '../../atoms/icons/faq';
import Message_IC from '../../atoms/icons/message';
import Telephone_IC from '../../atoms/icons/tele';
import { t } from 'i18next';

const ContactUsBlock = () => {
  return (
    <>
      <section className='bg-[#f5f5f5] mt-8'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-12 py-5 gap-20 lg-m:gap-10 s-600:!flex s-600:!flex-col s-600:!gap-16'>
            <div className='col-span-3 lg-m:col-span-6 s-600:!col-span-12 grid justify-items-center'>
              <h2 className='font-bold'>{t('Need help?')}</h2>
              <p className='text-center'>
                {t(
                  'Contact our global Customer Service team, you can reach us by phone or email. Alternatively, you may find the answer in our'
                )}
                <a href='#' className='underline mx-1'>
                  {t('Frequently Asked Questions page')}
                </a>
                .
              </p>
            </div>

            <div className='col-span-3 lg-m:col-span-6 s-600:!col-span-12 grid justify-items-center gap-2 '>
              <span className='flex gap-2 font-bold text-[18px]'>
                <Telephone_IC />
                {t('Phone')}
              </span>

              <a href='tel:0966564401' className='font-bold underline'>
                +966425458
              </a>

              <p className='text-center'>
                {t(
                  "Available Monday to Thursday, 8:00 AM - 5:00 PM Cairo time. On Friday we're available 8:00 AM – 11:00 AM and 12:30 PM – 5:00 PM Cairo time."
                )}
              </p>
            </div>

            <div className='col-span-3 lg-m:col-span-6 s-600:!col-span-12 flex flex-col items-center gap-2  '>
              <span className='flex gap-2 font-bold text-[18px]'>
                <Message_IC />
                {t('Email')}
              </span>

              <p className='text-center'>
                {t('Click')}{' '}
                <a href='#' className='underline'>
                  {t('here')}
                </a>{' '}
                {t('to send us an Email')}.
              </p>
            </div>

            <div className='col-span-3 lg-m:col-span-6  s-600:!col-span-12 flex flex-col items-center gap-2  '>
              <span className='flex gap-2 font-bold text-[18px]'>
                <FAQ_IC />
                {t('FAQ')}
              </span>

              <p className='text-center'>
                {t('Find the answer you need in our')}{' '}
                <a href='#' className='underline'>
                  {t('FAQs')}
                </a>{' '}
                {t('section')}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsBlock;
