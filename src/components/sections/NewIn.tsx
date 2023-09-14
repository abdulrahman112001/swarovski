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
        <div className='grid grid-cols-12 gap-8'>
          {/* title */}
          <div className='flex justify-start items-center col-span-9 md-m:col-span-12'>
            <p className='text-[1.4rem] xs-m:text-[1.2rem]'>
              New in: handpicked daily from the world&#39;s best brands and
              boutiques
            </p>
          </div>

          {/* button */}
          <div className='flex justify-end col-span-3 md-m:hidden'>
            <a
              href='#'
              className='rounded-[0.8rem] border-[1px] border-solid border-[#000] h-max px-[0.8rem] py-[0.4rem] text-[17px] font-bold'
            >
              Shop Now
            </a>
          </div>
        </div>
        {/* content product */}
        <div className='grid grid-cols-4 lg-m:grid-cols-2 phone-screen:!grid-cols-1 newin-section gap-x-12 '>
          {products?.data?.products?.map((item) => (
            <ProductCard imageUrl={item?.main_image} item={item} />
          ))}
        </div>

        {/* button */}
        <div className='w-full hidden md-m:flex justify-center'>
          <a
            href='#'
            className='rounded-[0.4rem] border-[1px] border-solid border-[#000] h-max phone-screen:w-full phone-screen:px-[0.8rem] phone-screen:py-[0.6rem]  text-[17px] font-bold px-10 py-3 text-center'
          >
            Shop Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default NewIn;
