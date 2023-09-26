import RingFinger_IC from '../atoms/icons/RingFinger';
import BubbleSVG from '../atoms/icons/bubble';
import HangerSVG from '../atoms/icons/hanger';
import QuestionMarkSVG from '../atoms/icons/questionMark';
import { t } from 'i18next';

const HelpBar = () => {
  return (
    <div className='container mx-auto px-4'>
      <section className='grid grid-cols-3 s-800:grid-cols-2 sm-m:grid-cols-1 mt-[3.4625rem] mx-[1.125rem] mb-[1.5625rem] gap-[1.5625rem] '>
        <a href='#'>
          <div className='border-[0.1rem] border-solid border-[#e6e6e6] py-6 px-4 hover:bg-hoverGray'>
            <RingFinger_IC />
            <h2 className='uppercase my-[0.625rem]'>{t('How to shop')}</h2>
            <p>{t('Your guide to shopping and placing orders')}</p>
          </div>
        </a>
        <a href='#'>
          <div className='border-[0.1rem] border-solid border-[#e6e6e6] py-6 px-4 hover:bg-hoverGray'>
            <QuestionMarkSVG />
            <h2 className='uppercase my-[0.625rem]'>{t('FAQs')}</h2>
            <p>{t('Your questions answered')}</p>
          </div>
        </a>

        <a href='#'>
          <div className='border-[0.1rem] border-solid border-[#e6e6e6] py-6 px-4 hover:bg-hoverGray'>
            <BubbleSVG />
            <h2 className='uppercase my-[0.625rem]'>{t('Need help?')}</h2>
            <p>{t('Contact our global Customer Service team')}</p>
          </div>
        </a>
      </section>
    </div>
  );
};

export default HelpBar;
