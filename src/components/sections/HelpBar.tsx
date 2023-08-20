import BubbleSVG from '../atoms/icons/bubble';
import HangerSVG from '../atoms/icons/hanger';
import QuestionMarkSVG from '../atoms/icons/questionMark';

const HelpBar = () => {
  return (
    <>
      <section className='grid grid-cols-3 mt-[3.4625rem] mx-[1.125rem] mb-[1.5625rem] gap-[1.5625rem]'>
        <a href='#'>
          <div className='border-[0.1rem] border-solid border-[#e6e6e6] py-6 px-4'>
            <HangerSVG />
            <h2 className='uppercase my-[0.625rem]'>How to shop</h2>
            <p>Your guide to shopping and placing orders</p>
          </div>
        </a>
        <a href='#'>
          <div className='border-[0.1rem] border-solid border-[#e6e6e6] py-6 px-4'>
            <QuestionMarkSVG />
            <h2 className='uppercase my-[0.625rem]'>FAQs</h2>
            <p>Your questions answered</p>
          </div>
        </a>

        <a href='#'>
          <div className='border-[0.1rem] border-solid border-[#e6e6e6] py-6 px-4'>
            <BubbleSVG />
            <h2 className='uppercase my-[0.625rem]'>Need help?</h2>
            <p>Contact our global Customer Service team</p>
          </div>
        </a>
      </section>
    </>
  );
};

export default HelpBar;
