import Images from '../../assets/images/data.jpeg';
const FirstSection = () => {
  return (
    <>
      <div className='grid grid-cols-2 my-[4.5rem]'>
        <div className='flex items-center col-span-1 mx-[4.8rem]'>
          <div>
            <h3 className='text-[3.5rem] font-bold text-center uppercase leading-[1]'>
              50 years of
              <br />
              hip-hop: a style story
            </h3>
            <p className='font-[nimbus,sans-serif] text-[1.4rem]  text-center leading-[1.1667] mt-[4.8rem]'>
              Rappers Bktherula and midwxst discuss the legends, the style and
              the future, featuring Stadium Goods, Heron Preston and more.
              Photographed by Janette Beckman
            </p>

            <div className='mt-[2.8rem] flex justify-center'>
              <a
                href='#'
                className='rounded-[0.8rem] border-[1px] border-solid border-[#000] px-[1.2rem] py-[0.7rem] text-[17px] font-bold'
              >
                Explore More
              </a>
            </div>
          </div>
        </div>
        <div className='col-span-1 relative min-w-full overflow-hidden'>
          <img src={Images} alt='product' />
        </div>
      </div>

      {/* section two */}
      <div className='grid grid-cols-2 my-[4.5rem]'>
        <div className='col-span-1 relative min-w-full overflow-hidden'>
          <img src={Images} alt='product' />
        </div>

        <div className='flex items-center col-span-1 mx-[4.8rem]'>
          <div>
            <h3 className='text-[3.5rem] font-bold text-center uppercase leading-[1]'>
              50 years of
              <br />
              hip-hop: a style story
            </h3>
            <p className='font-[nimbus,sans-serif] text-[1.4rem]  text-center leading-[1.1667] mt-[4.8rem]'>
              Rappers Bktherula and midwxst discuss the legends, the style and
              the future, featuring Stadium Goods, Heron Preston and more.
              Photographed by Janette Beckman
            </p>

            <div className='mt-[2.8rem] flex justify-center'>
              <a
                href='#'
                className='rounded-[0.8rem] border-[1px] border-solid border-[#000] px-[1.2rem] py-[0.7rem] text-[17px] font-bold'
              >
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
