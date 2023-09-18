import { Skeleton } from '@mantine/core';

const NavbarSkeleton = () => {
  return (
    <div className='header sticky bg-white top-0 left-0 z-[100] '>
      <div className='container px-4 mx-auto'>
        <nav className='grid grid-cols-[1fr,auto,1fr] items-center gap-[1.6rem] w-full h-11 mb-5 mx-0 py-[5px]'>
          {/* dynamic navigation */}

          <div className='flex gap-4 items-center nav-link ms-[-0.3rem] drop-down-menu-navbar'>
            <Skeleton height={12} width='80px' mt={6} radius='xl' />
            <Skeleton height={12} width='80px' mt={6} radius='xl' />
            <Skeleton height={12} width='80px' mt={6} radius='xl' />
            <Skeleton height={12} width='80px' mt={6} radius='xl' />
          </div>

          <Skeleton height={35} width='12rem' mt={6} radius='xl' />

          <div className='flex gap-4 justify-end items-center me-[-0.4rem]'>
            <>
              <Skeleton height='35px' width='35px' mt={6} radius='50%' />
              <Skeleton height='35px' width='35px' mt={6} radius='50%' />
              <Skeleton height='35px' width='35px' mt={6} radius='50%' />
              <Skeleton height='35px' width='35px' mt={6} radius='50%' />
              <Skeleton height='35px' width='35px' mt={6} radius='50%' />
            </>
          </div>
        </nav>
      </div>
      <hr className='mb-[-9px]' />
    </div>
  );
};

export default NavbarSkeleton;
