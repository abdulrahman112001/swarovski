import { useDisclosure } from '@mantine/hooks';

import {
  Accordion,
  Anchor,
  Breadcrumbs,
  Modal,
  Select,
  Table,
  Tabs,
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import Image_details from '../../../assets/images/17505702_36312398_1000.webp';
import { select_size, table_body, table_head } from '../../../helper/data';
import WishlistButton from '../../atoms/WishlistButton';
import HeartFill from '../../atoms/icons/HeartFill';
import HeartUnFill from '../../atoms/icons/HeartUnFill';

import MainButton from '../../atoms/mainButton';
import SecondaryButton from '../../atoms/secondaryButton';
import Newsletter from '../Newsletter';
import useFetch from '../../../hooks/UseFetch';
import { useParams } from 'react-router-dom';
import ProductCard from '../../organisms/cardProduct';
import useProductStore from '../../../store/productStore';
import { notify } from '../../../utils/notify';
//@ts-ignore
import Lightbox from 'react-lightbox-component';
import 'react-lightbox-component/build/css/index.css';

import { Carousel } from '@mantine/carousel';
import { Image, Card, Text, Group, Button, rem } from '@mantine/core';

import { t } from 'i18next';

import { useMutate } from '../../../hooks/useMutate';
import { useAuth } from '../../../utils/auth/AuthProvider';

const ViewProduct = () => {
  const { id } = useParams();

  const focasRef = useRef(null);

  useEffect(() => {
    if (focasRef.current) {
      focasRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const { data: Detailsproducts, isLoading: DetailsproductsLoading } = useFetch(
    {
      endpoint: `products/${id}`,
      queryKey: [`details-products/${id}`],
    }
  );
  console.log(
    '🚀 ~ file: viewProduct.tsx:46 ~ ViewProduct ~ Detailsproducts:',
    Detailsproducts
  );

  // popup size guide
  const [opened, { open, close }] = useDisclosure(false);

  // Table Head in Size guide
  const TableHead = table_head.map((ele) => (
    <tr key={ele.id} className='grid items-center grid-cols-3 py-4'>
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
    { title: 'الرئيسية', href: '#' },
    { title: 'الذهب', href: '#' },
    { title: 'خواتم', href: '#' },
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

  const { products, addProduct } = useProductStore();
  const [isFavorited, setFavorited] = useState(
    Detailsproducts?.data?.isFavourite
  );

  const { mutate: postData } = useMutate({
    endpoint: 'product/favorite-unfavorite',
    formData: true,
    mutationKey: ['product_favorit'],
    onSuccess: () => {
      notify(
        !isFavorited ? 'info' : 'success',
        '_',
        `${!isFavorited ? t('Remove from favorites') : t('Added to favorites')}`
      );
    },
    onError: () => {
      notify('error');
    },
  });
  const { user } = useAuth();

  return (
    <>
      {/* product */}
      <div className='focas' ref={focasRef} id='top'></div>
      <section className='container px-4 py-8 mx-auto view-product'>
        <div className='grid grid-cols-12 gap-12 s-600:!flex s-600:!flex-col'>
          <div className='col-span-8 s-1140:col-span-6 md-m:!col-span-12'>
            <div className='product-container s-600:hidden'>
              {!DetailsproductsLoading && (
                <>
                  <Lightbox
                    images={Detailsproducts?.data?.images?.map((img) => ({
                      src: img?.original,
                      title: 'abdelrahman',
                      description: 'hello',
                    }))}
                  />
                </>
              )}
            </div>

            <div className='hidden product-container s-600:block'>
              <Card radius='md' withBorder padding='xl'>
                <Card.Section>
                  <Carousel withIndicators loop>
                    {Detailsproducts?.data?.images?.map((image, index) => (
                      <Carousel.Slide key={index}>
                        <Image src={image.original} height={550} />
                      </Carousel.Slide>
                    ))}
                  </Carousel>
                </Card.Section>
              </Card>
            </div>
          </div>
          <div className='col-span-4 s-1140:col-span-6 md-m:!col-span-12'>
            <div className='grid gap-6 product-details-right'>
              {/* first */}
              <div className='flex gap-3'>
                <p className='text-sm font-bold'>Last 1 left</p>
                <p className='text-sm '> — make it yours!</p>
              </div>
              {/* second */}
              <div className='grid gap-6'>
                <div>
                  <p className='text-[#727272]'>Conscious</p>
                  <div>
                    <a href='#' className='text-[22px] font-bold'>
                      {Detailsproducts?.data?.name}
                    </a>

                    <p
                      dangerouslySetInnerHTML={{
                        __html: Detailsproducts?.data?.description,
                      }}
                    ></p>
                  </div>
                </div>
                <div>
                  <p className='text-[22px] '>
                    ${Detailsproducts?.data?.price}
                  </p>
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
              {/* <Select
                rightSection={<IconChevronDown size='1rem' />}
                rightSectionWidth={30}
                placeholder='Select size'
                styles={{ rightSection: { pointerEvents: 'none' } }}
                data={optionsSelect}
                value={selectedSize}
                onChange={handleSelectChange}
              /> */}
              <div className='grid items-baseline grid-cols-12 gap-4 lg-m:!flex lg-m:!flex-col'>
                <MainButton
                  title={t('Add To Bag')}
                  className='col-span-8 lg-m:!w-full'
                  action={() => {
                    addProduct({
                      id: Detailsproducts?.data?.id,
                      name: Detailsproducts?.data?.name,
                      price: Detailsproducts?.data?.price,
                      count: 1,
                      image: Detailsproducts?.data?.main_image,
                      desc: Detailsproducts?.data?.description,
                    });
                    notify(
                      'success',
                      '',
                      'The product has been added successfully'
                    );
                  }}
                />
                <WishlistButton
                  title={t('Favorit')}
                  className='col-span-4 lg-m:!w-full lg-m:justify-center'
                  icon={isFavorited ? <HeartFill /> : <HeartUnFill />}
                  action={() => {
                    if (user) {
                      setFavorited(!isFavorited);
                      postData({ product_id: Detailsproducts?.data?.id });
                    }
                  }}
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
            <Breadcrumbs separator={t('→')} mt='xs'>
              {items}
            </Breadcrumbs>
          </div>
        </div>
      </section>

      {/* details */}
      <div className='container px-4 py-8 mx-auto '>
        <Tabs color='dark' defaultValue='The Details'>
          <Tabs.List>
            <Tabs.Tab value='The Details' className='uppercase'>
              {t('The Details')}
            </Tabs.Tab>
            <Tabs.Tab value='Delivery & Returns' className='uppercase'>
              {t('Delivery & Returns')}
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value='The Details' pt='xs'>
            <div className='grid grid-cols-12 py-[1.25rem] gap-10 s-500:!flex s-500:!flex-col'>
              <div className='col-span-4 s-900:col-span-6 s-500:!col-span-12'>
                <span className='text-[#727272] '>New Season</span>
                <h2 className='text-[#222] text-[24px] font-bold '>
                  {Detailsproducts?.data?.name}
                </h2>
                <p>The Marfa 40mm slingback pumps</p>

                <div className='my-6'>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: Detailsproducts?.data?.description,
                    }}
                  ></p>
                </div>

                <h4 className='mb-3 font-bold'>Highlights</h4>
                <ul className='grid gap-[8px] pl-4'>
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

              <div className='flex flex-col gap-8 col-span-4 s-900:col-span-6 s-900:order-2 s-500:!col-span-12'>
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

              <div className='col-span-4 s-900:order-1 s-500:!col-span-12'>
                <img
                  src={Detailsproducts?.data?.hover_image}
                  alt='pro'
                  className='max-h-[530px] s-500:!w-full'
                />
              </div>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value='Delivery & Returns' pt='xs'>
            <div className='grid grid-cols-12 s-500:flex s-500:flex-col  py-[1.25rem] gap-10'>
              <div className=' col-span-4 s-800:!col-span-6 '>
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

              <div className='flex flex-col gap-8 col-span-4 s-800:!col-span-6'>
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

              <div className=' col-span-4 s-800:!col-span-6'>
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
      <div className='container px-4 mx-auto'>
        <div className='mt-4 mb-10'>
          <h2 className='text-[24px]'>{t('Complete the look')}</h2>
        </div>
        <div className='grid grid-cols-4 s-900:grid-cols-2 phone-screen:!grid-cols-1 newin-section gap-x-8 '>
          {Detailsproducts?.data?.relatedProducts?.map((item) => (
            <ProductCard
              imageUrl={item?.images[0]?.original}
              item={item}
              // size={true}
              buy={true}
            />
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className='container px-4 mx-auto mt-32'>
        {/* <section className="flex flex-col gap-4">
          <div className="flex justify-between">
            title
            <div>
              <p className="text-[1.4rem]">Recommendations</p>
            </div>

            button
            <div>
              <a
                href="#"
                className="rounded-[0.8rem] border-[1px] border-solid border-[#000] px-[0.8rem] py-[0.4rem] text-[17px] font-bold"
              >
                Shop Now
              </a>
            </div>
          </div>
          content product
          <div className="grid grid-cols-1 newin-section gap-x-12 ">
            <Carousel
              withIndicators
              slideSize='25%'
              slideGap='md'
              loop
              align='start'
              slidesToScroll={1}
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
            </Carousel>
          </div>
        </section> */}
      </div>

      {/* Recently viewed */}
      {/* <div className="container px-4 mx-auto mt-32">
        <section className="flex flex-col gap-4">
          <div className="flex justify-between">
            title
            <div>
              <p className="text-[1.4rem]">Recently viewed</p>
            </div>

            button
            <div>
              <a
                href="#"
                className="rounded-[0.8rem] border-[1px] border-solid border-[#000] px-[0.8rem] py-[0.4rem] text-[17px] font-bold"
              >
                Shop Now
              </a>
            </div>
          </div>
          content product
          <div className="grid grid-cols-1 newin-section gap-x-12 ">
            <Carousel
              withIndicators
              slideSize='25%'
              slideGap='md'
              loop
              align='start'
              slidesToScroll={1}
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
            </Carousel>
          </div>
        </section>
      </div> */}

      {/* Why Farfetch ? */}

      {/* <div className="container px-4 mx-auto mb-32 my-14">
        <h2 className="text-[22px] mb-3">Why FARFETCH?</h2>
        <div className="grid grid-cols-3">
          <div className="grid gap-[0.4rem]">
            <Over_IC />
            <p className="mt-2 font-bold">
              The one that you want? We've got it.
            </p>
            <p>Shop over 100,000 styles</p>
            <a href="#" className="underline">
              View all
            </a>
          </div>

          <div className="grid gap-[0.4rem]">
            <StarShine_IC />
            <p className="mt-2 font-bold">4.7/5 stars and 25,000+ reviews</p>
            <p>You know you can trust us</p>
            <a href="#" className="underline">
              Read reviews
            </a>
          </div>

          <div>
            <EnterBox_IC />
            <p className="mt-2 font-bold">
              Free global returns collection service
            </p>

            <p>Changed your mind? No problem</p>
            <a href="#" className="underline">
              Read more
            </a>
          </div>
        </div>
      </div> */}

      {/* Contact us */}
      {/* <div className="container mx-auto px-4 mt-[3.4625rem]  mb-[1.5625rem]">
        <h2 className="text-[22px] mb-3">Contact us</h2>
        <section className="grid grid-cols-2  gap-[1.5625rem] ">
          <a href="#" className="h-full">
            <div className="border-[0.1rem] border-solid border-[#e6e6e6] py-6 px-4 hover:bg-hoverGray h-full">
              <Message_IC />
              <h2 className="uppercase my-[0.625rem]">Email us</h2>
              <p>Get in touch by email</p>

              <div className="mt-12">
                <p>customerservice@test.com</p>
              </div>
            </div>
          </a>

          <a href="#">
            <div className="border-[0.1rem] border-solid border-[#e6e6e6] py-6 px-4 hover:bg-hoverGray">
              <Telephone_IC />
              <h2 className="uppercase my-[0.625rem]">Order by phone</h2>
              <p>
                Available Monday to Thursday, 8:00 AM - 5:00 PM Cairo time. On
                Friday we're available 8:00 AM – 11:00 AM and 12:30 PM – 5:00 PM
                Cairo time.
              </p>

              <div className="mt-8">
                <p>customerservice@test.com</p>
              </div>
            </div>
          </a>
        </section>
      </div> */}

      {/* Newsletter */}
      <Newsletter />
    </>
  );
};

export default ViewProduct;
