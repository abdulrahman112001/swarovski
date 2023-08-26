import ProductCard from '../organisms/cardProduct';

const FineArt = () => {
  return (
    <div className='container mx-auto px-4'>
      <section className='gap-4 flex flex-col my-20'>
        <div className='flex justify-between'>
          {/* title */}
          <div>
            <p className='text-[1.4rem]'>FineArt</p>
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
        <div className='newin-section grid grid-cols-4 gap-x-8 '>
          <ProductCard imageUrl='https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg' />
          <ProductCard imageUrl='https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg' />
          <ProductCard imageUrl='https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg' />
          <ProductCard imageUrl='https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg' />
        </div>
      </section>
    </div>
  );
};

export default FineArt;
