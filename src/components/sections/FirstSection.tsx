import Images from '../../assets/images/data.jpeg';
import useFetch from '../../hooks/UseFetch';
const FirstSection = () => {
  const { data: banners } = useFetch({
    endpoint: `banners`,
    queryKey: [`all-banners`],
  });
  console.log(
    '🚀 ~ file: FirstSection.tsx:8 ~ FirstSection ~ banners:',
    banners
  );
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-2 my-[4.5rem]'>
        <div className='flex items-center col-span-1 mx-[4.8rem]'>
          <div>
            <h3 className='text-[3.5rem] font-bold text-center uppercase leading-[1]'>
              {banners?.data[0]?.title.slice(0, 12)}
              <br />
              {/* hip-hop: a style story */}
              {banners?.data[0]?.title.slice(12)}
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: banners?.data[0]?.description,
              }}
              className='font-[nimbus,sans-serif] text-[1.4rem]  text-center leading-[1.1667] mt-[4.8rem]'
            ></p>

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
        <div className='relative min-w-full col-span-1 overflow-hidden max-h-[680px]'>
          <img src={banners?.data[0]?.image} alt='product' />
        </div>
      </div>

      {/* section two */}
      <div className='grid grid-cols-2 my-[4.5rem]'>
        <div className='relative min-w-full col-span-1 overflow-hidden max-h-[680px]'>
          <img src={banners?.data[1]?.image} alt='product' />
        </div>

        <div className='flex items-center col-span-1 mx-[4.8rem]'>
          <div>
            <h3 className='text-[3.5rem] font-bold text-center uppercase leading-[1]'>
              {banners?.data[1]?.title.slice(0, 12)}
              <br />
              {banners?.data[1]?.title.slice(12)}
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: banners?.data[1]?.description,
              }}
              className='font-[nimbus,sans-serif] text-[1.4rem]  text-center leading-[1.1667] mt-[4.8rem]'
            ></p>

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
    </div>
  );
};

export default FirstSection;
