import { Skeleton } from '@mantine/core';
import SecondaryButton from '../../atoms/secondaryButton';

const NewInSkeleton = () => {
  return (
    <>
      <div className='container px-4 mx-auto'>
        <section className='flex flex-col gap-4'>
          <div className='grid grid-cols-12 gap-8'>
            {/* title */}
            <div className='col-span-9 md-m:col-span-12'>
              <Skeleton height={22} mt={6} width='14rem' />

              <Skeleton height={15} mt={6} width='30rem' />
            </div>

            {/* button */}
            <div className='flex justify-end col-span-3 md-m:hidden'>
              <Skeleton height={40} mt={6} width='10rem' />
            </div>
          </div>
          {/* content product */}
          <div className='grid grid-cols-4 lg-m:grid-cols-2 phone-screen:!grid-cols-1 newin-section gap-x-12 '>
            <div className='relative'>
              <div className='newin-cards'>
                <Skeleton height='440px' mt={6} width='100%' />
              </div>
              {/* card info */}
              <div className='mt-4'>
                <Skeleton height={15} mt={6} width='150px' />
                <div>
                  <Skeleton height={15} mt={6} width='70px' />

                  <Skeleton height={15} mt={6} width='30px' />
                </div>
              </div>

              <div className='my-8'>
                <div className='grid gap-4 mt-4'>
                  <div className='flex   col-span-3 md-m:hidden'>
                    <Skeleton height={40} mt={6} width='100%' />
                  </div>
                </div>
              </div>
            </div>
            <div className='relative'>
              <div className='newin-cards'>
                <Skeleton height='440px' mt={6} width='100%' />
              </div>
              {/* card info */}
              <div className='mt-4'>
                <Skeleton height={15} mt={6} width='150px' />
                <div>
                  <Skeleton height={15} mt={6} width='70px' />

                  <Skeleton height={15} mt={6} width='30px' />
                </div>
              </div>

              <div className='my-8'>
                <div className='grid gap-4 mt-4'>
                  <div className='flex   col-span-3 md-m:hidden'>
                    <Skeleton height={40} mt={6} width='100%' />
                  </div>
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='newin-cards'>
                <Skeleton height='440px' mt={6} width='100%' />
              </div>
              {/* card info */}
              <div className='mt-4'>
                <Skeleton height={15} mt={6} width='150px' />
                <div>
                  <Skeleton height={15} mt={6} width='70px' />

                  <Skeleton height={15} mt={6} width='30px' />
                </div>
              </div>

              <div className='my-8'>
                <div className='grid gap-4 mt-4'>
                  <div className='flex   col-span-3 md-m:hidden'>
                    <Skeleton height={40} mt={6} width='100%' />
                  </div>
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='newin-cards'>
                <Skeleton height='440px' mt={6} width='100%' />
              </div>
              {/* card info */}
              <div className='mt-4'>
                <Skeleton height={15} mt={6} width='150px' />
                <div>
                  <Skeleton height={15} mt={6} width='70px' />

                  <Skeleton height={15} mt={6} width='30px' />
                </div>
              </div>

              <div className='my-8'>
                <div className='grid gap-4 mt-4'>
                  <div className='flex   col-span-3 md-m:hidden'>
                    <Skeleton height={40} mt={6} width='100%' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* button */}
          <div className='justify-center hidden w-full md-m:flex'>
            <a
              href='#'
              className='rounded-[0.4rem] border-[1px] border-solid border-[#000] h-max phone-screen:w-full phone-screen:px-[0.8rem] phone-screen:py-[0.6rem]  text-[17px] font-bold px-10 py-3 text-center'
            >
              Shop Now
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewInSkeleton;
