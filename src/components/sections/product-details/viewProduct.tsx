import { useDisclosure } from '@mantine/hooks';

import {
  Modal,
  Tabs,
  Table,
  Select,
  Accordion,
  Breadcrumbs,
  Anchor,
  Group,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';

import { select_size, table_body, table_head } from '../../../helper/data';
import { IconChevronDown } from '@tabler/icons-react';
import MainButton from '../../atoms/mainButton';
import SecondaryButton from '../../atoms/secondaryButton';
import { forwardRef, useState } from 'react';
import HeartSVG from '../../atoms/icons/Heart';
import HeartFill from '../../atoms/icons/HeartFill';
import HeartUnFill from '../../atoms/icons/HeartUnFill';
import WishlistButton from '../../atoms/WishlistButton';

import Image_details from '../../../assets/images/17505702_36312398_1000.webp';
import ProductCard from '../../organisms/cardProduct';

const ViewProduct = () => {
  // popup size guide
  const [opened, { open, close }] = useDisclosure(false);

  // Table Head in Size guide
  const TableHead = table_head.map((ele) => (
    <tr key={ele.id} className='grid grid-cols-3 py-4 items-center'>
      <th>{ele.name}</th>
      <th>{ele.Standard}</th>
      <th>
        <Select
          rightSection={<IconChevronDown size='1rem' />}
          rightSectionWidth={30}
          defaultValue={ele.size[0]}
          styles={{ rightSection: { pointerEvents: 'none' } }}
          data={ele.size}
        />
      </th>
    </tr>
  ));

  // Table body in Size guide
  const TableContent = table_body.map((ele) => (
    <>
      <Accordion variant='filled' defaultValue={ele.id[0]}>
        <Accordion.Item value={ele.id}>
          <Accordion.Control>
            <tr key={ele.name} className='grid grid-cols-3'>
              <td className='text-center'>{ele.name}</td>
              <td className='text-center'>{ele.standard}</td>
              <td className='text-center'>{ele.size}</td>
            </tr>
          </Accordion.Control>
          <Accordion.Panel>
            <tr
              key={ele.name * 1.1}
              className='flex justify-between details-product-available'
            >
              <div className='flex justify-center '>
                {ele.available ? `$${ele.available}` : 'Out Of Stock'}
              </div>
              <div className='flex justify-center'>
                {ele.available ? (
                  <MainButton title=' Add To Bag' />
                ) : (
                  <SecondaryButton title=' Notify Me' />
                )}
              </div>
            </tr>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  ));

  // bread crumbs
  const items = [
    { title: 'Women Home', href: '#' },
    { title: 'Balmain', href: '#' },
    { title: 'Clothing', href: '#' },
    { title: 'T-Shirts & Jersey Shirts', href: '#' },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
    image: string;
    label: string;
    description: string;
  }

  // select size
  const optionsSelect = select_size.map((item) => ({
    value: item.id,
    label: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ marginRight: '10px' }}>{item.size}</span>
        {item.available ? <span>{`last ${item.available} left`}</span> : null}
      </div>
    ),
  }));

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSelectChange = (value) => {
    setSelectedSize(value);
  };
  return (
    <>
      {/* product */}
      <section className='view-product container mx-auto px-4 py-8'>
        <div className='grid grid-cols-12 gap-8'>
          <div className='col-span-8'>
            <div className='product-container grid grid-cols-12 gap-[0.8rem]'>
              <div>
                <img
                  src='https://cdn-images.farfetch-contents.com/17/50/57/02/17505702_36310649_1000.jpg'
                  alt='pro1'
                />
              </div>
              <div>
                <img
                  src='https://cdn-images.farfetch-contents.com/17/50/57/02/17505702_36311705_1000.jpg'
                  alt='pro1'
                />
              </div>
              <div>
                <img
                  src='https://cdn-images.farfetch-contents.com/17/50/57/02/17505702_36312398_1000.jpg'
                  alt='pro1'
                />
              </div>
              <div>
                <img
                  src='https://cdn-images.farfetch-contents.com/17/50/57/02/17505702_36311698_1000.jpg'
                  alt='pro1'
                />
              </div>
              <div>
                <img
                  src='https://cdn-images.farfetch-contents.com/17/50/57/02/17505702_36312425_1000.jpg'
                  alt='pro1'
                />
              </div>
            </div>
          </div>
          <div className='col-span-4'>
            <div className='product-details-right grid gap-6'>
              {/* first */}
              <div className='flex gap-3'>
                <p className='font-bold text-sm'>Last 1 left</p>
                <p className=' text-sm'> — make it yours!</p>
              </div>
              {/* second */}
              <div className='grid gap-6'>
                <div>
                  <p className='text-[#727272]'>Conscious</p>
                  <div>
                    <a href='#' className='text-[22px] font-bold'>
                      Prada
                    </a>
                    <p>Re-Nylon overshirt jacket</p>
                  </div>
                </div>
                <div>
                  <p className='text-[22px] '>$3,050</p>
                  <p>Import duties included</p>
                </div>
              </div>

              {/* third */}
              <div className='flex justify-end'>
                <button onClick={open} className='underline'>
                  Size guide
                </button>
              </div>
              <Modal
                opened={opened}
                onClose={close}
                title='Prada Size guide'
                centered
                size='47rem'
              >
                <h3>Women</h3>

                <div className='grid grid-cols-12'>
                  <div className='col-span-3'>
                    <img
                      src='https://cdn-images.farfetch-contents.com/17/50/57/02/17505702_36310649_480.jpg'
                      alt='pro'
                      className='p-4'
                    />
                  </div>
                  <div className='col-span-8'>
                    <h4 className='text-[22px] font-bold'>Prada</h4>
                    <h5>Re-Nylon overshirt jacket</h5>
                  </div>
                </div>
                <div>
                  <Tabs color='dark' defaultValue='gallery'>
                    <Tabs.List>
                      <Tabs.Tab value='gallery'>
                        <h3 className='uppercase text-[17px]'>
                          Conversion chart
                        </h3>
                      </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value='gallery' pt='xs'>
                      <Table striped highlightOnHover>
                        {/* title */}
                        {TableHead}

                        {/* content */}
                        {TableContent}
                      </Table>
                    </Tabs.Panel>
                  </Tabs>
                </div>
              </Modal>

              {/* select size */}
              <Select
                rightSection={<IconChevronDown size='1rem' />}
                rightSectionWidth={30}
                placeholder='Select size'
                styles={{ rightSection: { pointerEvents: 'none' } }}
                data={optionsSelect}
                value={selectedSize}
                onChange={handleSelectChange}
              />
              <div className='grid grid-cols-12 items-baseline gap-4'>
                <MainButton title=' Add To Bag' className='col-span-8' />
                <WishlistButton
                  title='Wishlist'
                  className='col-span-4'
                  icon={<HeartUnFill />}
                  hoverIcon={<HeartFill />}
                />
              </div>

              <div>
                <p>ESTIMATED DELIVERY</p>
                <p>Aug 30 - Sep 6</p>
              </div>
            </div>
          </div>

          {/* bread crumbs */}
          <div className='bread-crumbs-style'>
            <Breadcrumbs separator='→' mt='xs'>
              {items}
            </Breadcrumbs>
          </div>
        </div>
      </section>

      {/* details */}
      <div className=' container mx-auto px-4 py-8'>
        <Tabs color='dark' defaultValue='The Details'>
          <Tabs.List>
            <Tabs.Tab value='The Details' className='uppercase'>
              The Details
            </Tabs.Tab>
            <Tabs.Tab value='Delivery & Returns' className='uppercase'>
              Delivery & Returns
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value='The Details' pt='xs'>
            <div className='grid grid-cols-3 py-[1.25rem] gap-28'>
              <div>
                <span className='text-[#727272] '>New Season</span>
                <h2 className='text-[#222] text-[24px] font-bold '>KHAITE</h2>
                <p>The Marfa 40mm slingback pumps</p>

                <div className='my-6'>
                  <p>
                    KHAITE’s The Marfa collection takes its name and inspiration
                    from the West Texas town – specifically its mysterious
                    lights and artist Donald Judd’s installations that fuse
                    ‘art, architecture and landscape’. These black
                    patent-leather pumps echo those influences with their draped
                    gold-tone chains, narrow square toe and angular sculpted
                    heel.{' '}
                  </p>
                </div>

                <h4 className='font-bold mb-3'>Highlights</h4>
                <ul className='grid gap-[8px]'>
                  <li className='list-[square]'>
                    <p>black</p>
                  </li>
                  <li className='list-[square]'>
                    <p>calf leather</p>
                  </li>
                  <li className='list-[square]'>
                    <p>crinkled finish </p>
                  </li>
                  <li className='list-[square]'>
                    <p>cut-out detailing </p>
                  </li>
                  <li className='list-[square]'>
                    <p>chain-link detailing</p>
                  </li>
                  <li className='list-[square]'>
                    <p>square toe</p>
                  </li>
                  <li className='list-[square]'>
                    <p>gold-tone hardware</p>
                  </li>
                  <li className='list-[square]'>
                    <p>branded insole</p>
                  </li>
                </ul>
              </div>

              <div className='flex flex-col gap-8'>
                <div>
                  <h2 className='text-[#222] font-bold mb-[10px]'>
                    Composition
                  </h2>
                  <p>Body: Calf Leather 100%</p>
                </div>

                <div>
                  <h2 className='text-[#222] font-bold mb-[10px]'>
                    Washing instructions
                  </h2>
                  <p>Dry Clean Only</p>
                </div>

                <div>
                  <h2 className='text-[#222] font-bold mb-[10px]'>
                    Product IDs
                  </h2>
                  <p>FARFETCH ID: 20870348</p>
                  <p>Brand style ID: F2026822</p>
                </div>
              </div>

              <div>
                <img src={Image_details} alt='pro' />
              </div>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value='Delivery & Returns' pt='xs'>
            <div className='grid grid-cols-3 py-[1.25rem] gap-28'>
              <div>
                <h2 className='text-[#222] font-bold mb-[10px]'>
                  We've got your back
                </h2>
                <ul className='grid gap-[8px] pl-4'>
                  <li className='list-[square]'>
                    <p>
                      One delivery fee to most locations (check our Orders &
                      Delivery page)
                    </p>
                  </li>
                  <li className='list-[square]'>
                    <p>
                      Free returns within 14 days (excludes final sale,
                      customised pieces and face masks).
                    </p>
                  </li>
                </ul>
                <div className='my-6'>
                  <h2 className='text-[#222] font-bold mb-[10px]'>
                    Import duties information
                  </h2>

                  <p>
                    Let us handle the legwork. Delivery duties are included in
                    the item price when shipping to all EU countries (excluding
                    the Canary Islands), plus The United Kingdom, USA, Canada,
                    China Mainland, Australia, New Zealand, Puerto Rico,
                    Switzerland, Singapore, Republic Of Korea, Kuwait, Mexico,
                    Qatar, India, Norway, Saudi Arabia, Taiwan Region, Thailand,
                    U.A.E., Japan, Brazil, Isle of Man, San Marino, Colombia,
                    Chile, Argentina, Egypt, Lebanon, Hong Kong SAR, Bahrain and
                    Turkey. All import duties are included in your order – the
                    price you see is the price you pay.
                  </p>
                </div>
              </div>

              <div className='flex flex-col gap-8'>
                <div>
                  <h2 className='text-[#222] font-bold mb-[10px]'>
                    Estimated delivery
                  </h2>
                  <p>Express: Aug 31 - Sep 8</p>
                </div>

                <div>
                  <p>Sending from our marketplace seller in United States</p>
                </div>
              </div>

              <div>
                <div>
                  <h2 className='text-[#222] font-bold mb-[10px]'>
                    Need more information?
                  </h2>
                  <ul className='grid gap-[8px] pl-4'>
                    <li className='list-[square]'>
                      <a href='#' className='underline'>
                        Orders & delivery
                      </a>
                    </li>
                    <li className='list-[square]'>
                      <a href='#' className='underline'>
                        Returns & refunds
                      </a>
                    </li>
                    <li className='list-[square]'>
                      <a href='#' className='underline'>
                        Duties & taxes
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>

      {/* complete the look */}
      <div className='container mx-auto px-4'>
        <div className='mt-4 mb-10'>
          <h2 className='text-[24px]'>Complete the look</h2>
        </div>
        <div className='newin-section grid grid-cols-4 gap-x-8 '>
          <ProductCard
            item='https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg'
            imageUrl='https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg'
            size={true}
            buy={true}
          />
          <ProductCard
            item='https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg'
            imageUrl='https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg'
            size={true}
            buy={true}
          />
          <ProductCard
            item='https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg'
            imageUrl='https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg'
            size={true}
            buy={true}
          />
          <ProductCard
            item='https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg'
            imageUrl='https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg'
            size={true}
            buy={true}
          />
        </div>
      </div>

      {/* Recommendations */}
      <div className='container px-4 mx-auto'>
        <section className='flex flex-col gap-4'>
          <div className='flex justify-between'>
            {/* title */}
            <div>
              <p className='text-[1.4rem]'>Recommendations</p>
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
            {/* <Carousel
              withIndicators
              height={200}
              slideSize='33.333333%'
              slideGap='md'
              loop
              align='start'
              slidesToScroll={3}
            >
              <Carousel.Slide>
                <ProductCard
                  item='https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg'
                  imageUrl='https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg'
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <ProductCard
                  item='https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg'
                  imageUrl='https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg'
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <ProductCard
                  item='https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg'
                  imageUrl='https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg'
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <ProductCard
                  item='https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg'
                  imageUrl='https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg'
                />
              </Carousel.Slide>
            </Carousel> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default ViewProduct;