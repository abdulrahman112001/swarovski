const FooterSection = () => {
  return (
    <>
      <section className='bg-bgGray border-t-[1px] border-solid border-[#fff]'>
        <div className='container mx-auto px-4'>
          <div className='grid py-[1.2rem] gap-5 '>
            <ul className='flex gap-5 lg-m:grid lg-m:grid-cols-2 s-500:!grid-cols-1'>
              <li className='underline hover:text-[#727272]'>
                <a href='#'>Privacy policy</a>
              </li>
              <li className='underline hover:text-[#727272]'>
                <a href='#'>Terms and conditions</a>
              </li>
              <li className='underline hover:text-[#727272]'>
                <a href='#'>Accessibility</a>
              </li>
              <li className='underline hover:text-[#727272]'>
                <a href='#'>Sitemap</a>
              </li>
            </ul>

            <div>
              <p>
                'FARFETCH' and the 'FARFETCH' logo are trade marks of FARFETCH
                UK Limited and are registered in numerous jurisdictions around
                the world.
              </p>

              <p>© Copyright 2023 FARFETCH UK Limited. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterSection;
