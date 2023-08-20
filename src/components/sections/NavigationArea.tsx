import Facebook_ic from '../atoms/icons/facebookicon';
import Insta_ic from '../atoms/icons/instaIcon';
import Pinterest_ic from '../atoms/icons/pinteresticon';
import Snap_ic from '../atoms/icons/snapchaticon';
import Twitter_ic from '../atoms/icons/twittericon';
import YouTube_ic from '../atoms/icons/youtubeicon';

const NavigationArea = () => {
  return (
    <>
      <section className=' bg-bgGray'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-4 py-[1.875rem]'>
            <div>
              <h2 className='text-[#222] font-bold mb-[10px]'>
                Customer Service
              </h2>
              <ul className='grid gap-[8px]'>
                <li>
                  <a href='#' className='hover:underline'>
                    Contact us
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    FAQs
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Orders and delivery
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Returns and refunds
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Payment and pricing
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Cryptocurrency payments
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Promotion terms and conditions
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    FARFETCH Customer Promise
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className='text-[#222] font-bold mb-[10px]'>
                About FARFETCH
              </h2>
              <ul className='grid gap-[8px]'>
                <li>
                  <a href='#' className='hover:underline'>
                    About us
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Investors
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    FARFETCH partner boutiques
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Careers
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    FARFETCH app
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Modern slavery statement
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className='text-[#222] font-bold mb-[10px]'>
                Discounts and membership
              </h2>
              <ul className='grid gap-[8px]'>
                <li>
                  <a href='#' className='hover:underline'>
                    Affiliate program
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Refer a friend
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    FARFETCH membership
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Student discount UNiDAYS
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Student Beans and Graduates
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Student and Youth discount
                  </a>
                </li>
              </ul>
            </div>

            <div className='flex flex-col gap-[1.9rem]'>
              <div>
                <h2 className='text-[#222] font-bold mb-[10px]'>
                  FARFETCH Sustainable Services
                </h2>

                <a href='#' className='hover:underline'>
                  Second Life: sell your designer bags
                </a>
              </div>

              <div>
                <span className='text-[#222] font-bold'>Follow us</span>

                <ul className='flex gap-[0.3rem] my-1'>
                  <li className='flex justify-center items-center w-11 h-11 hover:bg-[#f5f5f5] rounded-[0.8rem]'>
                    <a href='#'>
                      <Insta_ic />
                    </a>
                  </li>
                  <li className='flex justify-center items-center w-11 h-11 hover:bg-[#f5f5f5] rounded-[0.8rem]'>
                    <a href='#'>
                      <Facebook_ic />
                    </a>
                  </li>
                  <li className='flex justify-center items-center w-11 h-11 hover:bg-[#f5f5f5] rounded-[0.8rem]'>
                    <a href='#'>
                      <Pinterest_ic />
                    </a>
                  </li>
                  <li className='flex justify-center items-center w-11 h-11 hover:bg-[#f5f5f5] rounded-[0.8rem]'>
                    <a href='#'>
                      <Twitter_ic />
                    </a>
                  </li>
                  <li className='flex justify-center items-center w-11 h-11 hover:bg-[#f5f5f5] rounded-[0.8rem]'>
                    <a href='#'>
                      <Snap_ic />
                    </a>
                  </li>
                  <li className='flex justify-center items-center w-11 h-11 hover:bg-[#f5f5f5] rounded-[0.8rem]'>
                    <a href='#'>
                      <YouTube_ic />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavigationArea;
