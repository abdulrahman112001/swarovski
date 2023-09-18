import { Skeleton } from '@mantine/core';

const SidebarSkeleton = () => {
  return (
    <>
      <div className='grid gap-4'>
        <div className='flex gap-4'>
          <Skeleton height={14} mt={6} radius='xl' width='5rem' />
          <Skeleton height={14} mt={6} radius='xl' width='5rem' />
          <Skeleton height={14} mt={6} radius='xl' width='5rem' />
          <Skeleton height={14} mt={6} radius='xl' width='5rem' />
        </div>

        <div className='grid gap-4'>
          <Skeleton height={17} mt={6} radius='xl' width='14rem' />

          <ul className='grid gap-3'>
            <li>
              <Skeleton height={15} mt={6} radius='xl' width='11rem' />
            </li>
            <li>
              <Skeleton height={15} mt={6} radius='xl' width='11rem' />
            </li>
            <li>
              <Skeleton height={15} mt={6} radius='xl' width='11rem' />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarSkeleton;
