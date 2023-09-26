import { Link } from 'react-router-dom';
import useFetch from '../../hooks/UseFetch';
import ProductCard from '../organisms/cardProduct';
import { t } from 'i18next';

const NewIn = () => {
  const { data: products } = useFetch({
    endpoint: `products`,
    queryKey: [`all-products`],
  });
  console.log('🚀 ~ file: NewIn.tsx:9 ~ NewIn ~ products:', products);

  return (
    <div className='container px-4 mx-auto mt-10'>
      <section className='flex flex-col gap-4'>
        <div className='grid grid-cols-12 gap-8'>
          {/* title */}
          <div className='col-span-9 md-m:col-span-12'>
            <p className='text-[1.4rem] xs-m:text-[1.2rem] font-bold'>
              {t('New in Silver:')}
            </p>
            <p>
              {t("handpicked daily from the world's best brands and boutiques")}
            </p>
          </div>

          {/* button */}
          <div className='flex justify-end col-span-3 md-m:hidden'>
            <Link
              to='/show-product'
              className='rounded-[0.8rem] border-[1px] border-solid border-[#000] h-max px-[0.8rem] py-[0.4rem] text-[17px] font-bold'
            >
              {t('Shop Now')}
            </Link>
          </div>
        </div>
        {/* content product */}
        <div className='grid grid-cols-4 lg-m:grid-cols-2 phone-screen:!grid-cols-1 newin-section gap-x-12 '>
          {products?.data?.products?.slice(0, 4)?.map((item) => (
            <ProductCard imageUrl={item?.main_image} item={item} />
          ))}
        </div>

        {/* button */}
        <div className='justify-center hidden w-full md-m:flex'>
          <a
            href='#'
            className='rounded-[0.4rem] border-[1px] border-solid border-[#000] h-max phone-screen:w-full phone-screen:px-[0.8rem] phone-screen:py-[0.6rem]  text-[17px] font-bold px-10 py-3 text-center'
          >
            {t('Shop Now')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default NewIn;
