import useFetch from '../hooks/UseFetch';
import ProductCard from '../components/organisms/cardProduct';
import { useEffect } from 'react';

export default function FavoritePage() {
  const { data: favourites } = useFetch({
    endpoint: `user/products/all-favourites`,
    queryKey: [`all_favourites`],
  });
 
  
  console.log("🚀 ~ file: FavoritePage.tsx:9 ~ FavoritePage ~ favourites:", favourites)
  return (
    <div className='container px-4 mx-auto'>
      <div className='col-span-9 my-8 mt-16 md-m:col-span-12'>
        <p className='text-[1.4rem] xs-m:text-[1.2rem] font-bold'>
          Favorite Page:
        </p>
        <p>handpicked daily from the world&#39;s best brands and boutiques</p>
      </div>
      <div className='grid grid-cols-4 lg-m:grid-cols-2  sm-m:!grid-cols-1 newin-section gap-x-12 my-[2rem]'>
        {favourites?.data?.map((item) => (
          <ProductCard imageUrl={item?.main_image} item={item} />
        ))}
      </div>
    </div>
  );
}
