import useFetch from '../../hooks/UseFetch';
import ProductCard from '../organisms/cardProduct';

const NewIn = () => {
  const { data: products } = useFetch({
    endpoint: `products`,
    queryKey: [`all-products`],
  });
  console.log('🚀 ~ file: NewIn.tsx:9 ~ NewIn ~ products:', products);
  return (
    <div className='container px-4 mx-auto'>
      <section className='flex flex-col gap-4'>
        <div className='flex justify-between'>
          {/* title */}
          <div>
            <p className='text-[1.4rem]'>
              New in: handpicked daily from the world&#39;s best brands and
              boutiques
            </p>
          </div>

          {/* button */}
          <div>
            <a
              href='#'
              className='rounded-[0.8rem] border-[1px] border-solid border-[#000] px-[0.8rem] py-[0.1rem] text-[17px] font-bold'
            >
              Shop Now
            </a>
          </div>
        </div>
        {/* content product */}
        <div className='grid grid-cols-4 newin-section gap-x-12 '>
          {products?.data?.products?.map((item) => (
            <ProductCard imageUrl={item?.main_image} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewIn;
