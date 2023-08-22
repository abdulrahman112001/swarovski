import HeartUnFill from '../atoms/icons/HeartUnFill';
import HeartFill from '../atoms/icons/HeartFill';

const ProductCard = ({ imageUrl , item }:any) => {
  const afterStyles = {
    '--custom-background-image': `url(${imageUrl})`,
  };
  return (
    <>
      <div className='relative'>
        <a href='#'>
          <div className='newin-cards'>
            <div className='mw-[370px]' 
            //@ts-ignore
            style={afterStyles}>
              {/* show */}
              <img
                src={item?.images[1]?.original}
                alt='product1'
              />
            </div>
          </div>
          {/* card info */}
          <div className='mt-4'>
            <span className='text-[#727272]'>New Season</span>
            <div>
              <h3 className='font-bold'>Prada</h3>
              <p>triangle-logo bralette</p>
              <p className='mt-4'>790 €</p>
            </div>
          </div>
        </a>
        <button className='card-favorite'>
          <HeartUnFill />
          <HeartFill />
        </button>
      </div>
    </>
  );
};

export default ProductCard;
