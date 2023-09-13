import { Link } from 'react-router-dom';
import useFetch from '../../hooks/UseFetch';
import { cartegorys } from '../../helper/data';
import { HoverCard } from '@mantine/core';
export default function DynamicNavbar() {
  const { data: Navs } = useFetch({
    endpoint: `sub-categories`,
    queryKey: [`Navbar_dynamic`],
  });
  console.log('🚀 ~ file: DynamicNavbar.tsx:9 ~ DynamicNavbar ~ Navs:', Navs);
  return (
    <>
      {Navs?.data?.map((nav: any) => (
        <HoverCard
          // width={280}
          shadow='md'
          withArrow
          openDelay={200}
          closeDelay={200}
        >
          <HoverCard.Target>
            <Link to={`/page/${nav?.id}`} className='mx-2'>
              {nav?.name}
            </Link>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <ul>
              <li className='text-center hover:opacity-[0.7]'>
                <a href='#'>Necklaces</a>
              </li>
              <li className='text-center hover:opacity-[0.7]'>
                <a href='#'>Rings</a>
              </li>
              <li className='text-center hover:opacity-[0.7]'>
                <a href='#'>Earrings</a>
              </li>
              <li className='text-center hover:opacity-[0.7]'>
                <a href='#'>Bracelets</a>
              </li>
              <li className='text-center hover:opacity-[0.7]'>
                <a href='#'>Jewelry Sets</a>
              </li>
            </ul>
          </HoverCard.Dropdown>
        </HoverCard>
      ))}
    </>
  );
}
