import { Link } from 'react-router-dom';
import useFetch from '../../hooks/UseFetch';

export default function DynamicNavbar() {
  const { data: Navs } = useFetch({
    endpoint: `sub-categories`,
    queryKey: [`Navbar_dynamic`],
  });
  console.log('🚀 ~ file: DynamicNavbar.tsx:9 ~ DynamicNavbar ~ Navs:', Navs);
  return (
    <>
      {Navs?.data?.map((nav: any) => (
        <Link to={`/page/${nav?.id}`} className='mx-2'>
          {nav?.name}
        </Link>
      ))}
    </>
  );
}
