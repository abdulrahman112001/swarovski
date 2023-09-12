import ImageProduct from '../atoms/image/datatest.webp';
const DropDownNavBar = () => {
  return (
    <>
      <div className='container mx-auto px-7 mt-5 mb-5'>
        <div className='grid grid-cols-4 py-[1.875rem]'>
          <div className='col-span-1'>
            <h2 className='text-[#222] uppercase mb-[15px]'>Bags</h2>
            <ul className='grid gap-[8px]'>
              <li>
                <a href='#' className='hover:underline'>
                  All bags
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Backpacks
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Beach bags
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Bucket bags
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Clutch bags
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Mini bags
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Cross-body bags
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Shoulder bags
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Tote bags
                </a>
              </li>
            </ul>
          </div>

          <div className='col-span-1'>
            <h2 className='text-[#222] uppercase mb-[15px]'>Discover</h2>
            <ul className='grid gap-[8px]'>
              <li>
                <a href='#' className='hover:underline'>
                  New in bags
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Top 100 iconic bags
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Pre-owned bags
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Conscious bags
                </a>
              </li>
            </ul>
          </div>

          <div className='col-span-1'>
            <h2 className='text-[#222] uppercase mb-[15px]'>
              Our Sustainable Services
            </h2>
            <ul className='grid gap-[8px]'>
              <li>
                <a href='#' className='hover:underline'>
                  Sell designer bags
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Sustainability at FARFETCH
                </a>
              </li>
            </ul>
          </div>

          <div className='flex flex-col gap-[1.9rem] col-span-1'>
            <div>
              <img src={ImageProduct} alt='product' />
            </div>

            <div>
              <h2 className='text-[#878787] mb-[15px]'>Spotlight on</h2>

              <p className='mb-3'>All bags</p>

              <a href='#' className='underline  hover:text-[#878787]'>
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDownNavBar;
