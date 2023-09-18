import { useParams } from 'react-router-dom';
import useFetch from './hooks/UseFetch';
import ProductCard from './components/organisms/cardProduct';

export default function Pages() {
  const { id, title } = useParams();
  console.log('🚀 ~ file: Pages.tsx:6 ~ Pages ~ id:', id);
  const { data: CustomPages } = useFetch({
    endpoint: `products?filter[category]=${id}`,
    queryKey: [`CustomPages`, id],
  });
  console.log('🚀 ~ file: Pages.tsx:11 ~ Pages ~ CustomPages:', CustomPages);
  return (
    <div className='container px-4 mx-auto'>
      <div className='col-span-9 md-m:col-span-12 my-8 mt-16'>
        <p className='text-[1.4rem] xs-m:text-[1.2rem] font-bold'>
          Silver Page:
        </p>
        <p>handpicked daily from the world&#39;s best brands and boutiques</p>
      </div>
      <div className='grid grid-cols-4 lg-m:grid-cols-2  sm-m:!grid-cols-1 newin-section gap-x-12 my-[2rem]'>
        {CustomPages?.data?.products.map((item) => (
          <ProductCard imageUrl={item?.main_image} item={item} />
        ))}
      </div>
    </div>
  );
}
