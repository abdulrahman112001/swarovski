import { Skeleton } from '@mantine/core';
const HeaderSkeleton = () => {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid  grid-cols-2 my-[4.5rem] xl-m:gap-4 lg-m:flex lg-m:flex-col lg-m:!gap-8'>
        <div className='flex items-center col-span-1 mx-[4.8rem] xl-m:mx-0 lg-m:order-2'>
          <div className='w-full flex flex-col items-center'>
            <h3 className='text-[3.5rem] w-[70%] font-bold text-center uppercase leading-[1] lg-m:text-[2.7rem] sm-m:text-[2rem]'>
              <Skeleton
                className='text-[3.5rem] font-bold text-center uppercase leading-[1] lg-m:text-[2.7rem] sm-m:text-[2rem]'
                height={200}
                mt={6}
                radius='xl'
              />
            </h3>
            <p className='font-[nimbus,sans-serif]  w-[70%] text-[1.4rem]  text-center leading-[1.1667] mt-[4.8rem] lg-m:!mt-[1.8rem]'>
              <Skeleton
                className='text-[3.5rem] font-bold text-center uppercase leading-[1] lg-m:text-[2.7rem] sm-m:text-[2rem]'
                height={14}
                mt={6}
                radius='xl'
              />{' '}
            </p>

            <div className='mt-[2.8rem]  w-[70%] flex justify-center'>
              <Skeleton
                className='rounded-[0.8rem] border-[1px] border-solid  px-[1.2rem] py-[0.7rem] text-[17px] font-bold'
                height='3rem'
                mt={6}
                radius='xl'
              />
            </div>
          </div>
        </div>
        <div className='relative min-w-full col-span-1 overflow-hidden max-h-[680px] lg-m:order-1 lg-m:flex lg-m:justify-center'>
          <Skeleton
            className='rounded-[0.8rem] border-[1px] border-solid  px-[1.2rem] py-[0.7rem] text-[17px] font-bold'
            height='680px'
            width='600px'
            mt={6}
            radius='xl'
          />
        </div>
      </div>

      {/* section two */}
      <div className='grid  grid-cols-2 my-[4.5rem] xl-m:gap-4 lg-m:flex lg-m:flex-col lg-m:!gap-8'>
        <div className='relative min-w-full col-span-1 overflow-hidden max-h-[680px] lg-m:order-1 lg-m:flex lg-m:justify-center'>
          <Skeleton
            className='rounded-[0.8rem] border-[1px] border-solid  px-[1.2rem] py-[0.7rem] text-[17px] font-bold'
            height='680px'
            width='600px'
            mt={6}
            radius='xl'
          />
        </div>

        <div className='flex items-center col-span-1 mx-[4.8rem] xl-m:mx-0 lg-m:order-2'>
          <div className='w-full flex flex-col items-center'>
            <h3 className='text-[3.5rem] w-[70%] font-bold text-center uppercase leading-[1] lg-m:text-[2.7rem] sm-m:text-[2rem]'>
              <Skeleton
                className='text-[3.5rem] font-bold text-center uppercase leading-[1] lg-m:text-[2.7rem] sm-m:text-[2rem]'
                height={200}
                mt={6}
                radius='xl'
              />
            </h3>
            <p className='font-[nimbus,sans-serif]  w-[70%] text-[1.4rem]  text-center leading-[1.1667] mt-[4.8rem] lg-m:!mt-[1.8rem]'>
              <Skeleton
                className='text-[3.5rem] font-bold text-center uppercase leading-[1] lg-m:text-[2.7rem] sm-m:text-[2rem]'
                height={14}
                mt={6}
                radius='xl'
              />{' '}
            </p>

            <div className='mt-[2.8rem]  w-[70%] flex justify-center'>
              <Skeleton
                className='rounded-[0.8rem] border-[1px] border-solid  px-[1.2rem] py-[0.7rem] text-[17px] font-bold'
                height='3rem'
                mt={6}
                radius='xl'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSkeleton;
