import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import {
  Accordion,
  Anchor,
  Box,
  Breadcrumbs,
  Checkbox,
  Drawer,
  Slider,
  Text,
} from '@mantine/core';

import useFetch from '../../../hooks/UseFetch';

import Filter_IC from '../../atoms/icons/filter';
import SecondaryButton from '../../atoms/secondaryButton';
import CloseX_IC from '../../atoms/icons/closeX';
import ProductCard from '../../organisms/cardProduct';

const ShowProduct = () => {
  const [openFilter, { open, close }] = useDisclosure(false);
  const [checked, setChecked] = useState(false);

  const [value, setValue] = useState(0);
  const [endValue, setEndValue] = useState(80000);

  const { data: products } = useFetch({
    endpoint: `products`,
    queryKey: [`all-products`],
  });

  // bread crumbs
  const items = [
    { title: 'Home', href: '#' },
    { title: 'New In', href: '#' },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <>
      <div className='container px-4 py-8 mx-auto'>
        <div className='bread-crumbs-style'>
          <Breadcrumbs separator='>' mt='xs'>
            {items}
          </Breadcrumbs>
        </div>

        {/* Name Category */}
        <div className='mt-6 mb-10'>
          <h1 className='uppercase font-bold'>New In</h1>
        </div>

        {/* filter */}
        <div className='flex relative'>
          <div className='flex gap-4'>
            <SecondaryButton
              title={<div className='flex items-center'>All Filters</div>}
              icon={<Filter_IC />}
              className='flex gap-2 px-4 py-2 font-semibold'
              action={open}
            />
            <SecondaryButton
              title='Jewelry'
              className=' gap-2 px-4 py-2 md-m:hidden'
            />
            <SecondaryButton
              title='Silver'
              className=' gap-2 px-4 py-2 md-m:hidden'
            />
            <SecondaryButton
              title='Accessories'
              className=' gap-2 px-4 py-2 md-m:hidden'
            />
          </div>

          <div className='absolute right-0 '>
            <Accordion variant='filled' className='sort-by-list'>
              <Accordion.Item value='sort-product'>
                <Accordion.Control>Sort By</Accordion.Control>
                <Accordion.Panel>
                  <ul className='grid '>
                    <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                      Top Match
                    </li>

                    <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                      New Arrivals
                    </li>
                    <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                      Price: Low to High
                    </li>
                    <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                      Price: High to Low
                    </li>
                  </ul>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className='grid grid-cols-4 lg-m:grid-cols-2 phone-screen:!grid-cols-1 newin-section gap-x-12 mt-12'>
          {products?.data?.products?.map((item) => (
            <ProductCard imageUrl={item?.main_image} item={item} />
          ))}
        </div>
      </div>

      <Drawer
        opened={openFilter}
        onClose={close}
        position='left'
        size='20%'
        className='sidebar-menu relative'
      >
        <div className='relative flex items-center'>
          <button
            className='w-8 h-8 p-[6px] absolute right-[2%] rounded-[0.4rem] hover:bg-[#f5f5f5]'
            onClick={close}
          >
            <CloseX_IC />
          </button>

          <h2 className='pt-[10px] px-[5px] text-[20px] mb-2'>All Filters</h2>
        </div>

        <div className='mt-8'>
          <Accordion className='dropdown-language-info grid gap-2'>
            <Accordion.Item value='metal'>
              <Accordion.Control>
                <h3>Metal</h3>
              </Accordion.Control>
              <Accordion.Panel>
                <ul className='w-full'>
                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      14k White Gold
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      14k Yellow Gold
                    </h4>
                  </li>

                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      Gold Vermeil
                    </h4>
                  </li>

                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      Sterling Silver
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      Titanium
                    </h4>
                  </li>
                </ul>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value='price'>
              <Accordion.Control>
                <h3>Price</h3>
              </Accordion.Control>
              <Accordion.Panel>
                <ul className='w-full'>
                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      500 SR & Under
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      500 SR - 1,000 SR
                    </h4>
                  </li>

                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      1,000 SR - 2,000 SR
                    </h4>
                  </li>

                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      2,000 SR - 5,000 SR
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      5,000 SR & Over
                    </h4>
                  </li>

                  <li>
                    <Box maw={400} mx='auto'>
                      <Slider
                        color='indigo'
                        value={value}
                        onChange={setValue}
                        min={0}
                        max={10000}
                      />
                      <div className='flex items-center justify-between'>
                        <p>
                          Low: <b>0 SR</b>
                        </p>
                        <p>
                          High: <b>{value} SR</b>
                        </p>
                      </div>
                    </Box>
                  </li>
                </ul>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value='gender'>
              <Accordion.Control>
                <h3>Gender</h3>
              </Accordion.Control>
              <Accordion.Panel>
                <ul className='w-full'>
                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      Women's
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      Men's
                    </h4>
                  </li>

                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      Kids
                    </h4>
                  </li>
                </ul>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value='type'>
              <Accordion.Control>
                <h3>Type</h3>
              </Accordion.Control>
              <Accordion.Panel>
                <ul className='w-full'>
                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      Jewelry
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      Silver
                    </h4>
                  </li>

                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      Accessories
                    </h4>
                  </li>
                </ul>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value='size'>
              <Accordion.Control>
                <h3>Size</h3>
              </Accordion.Control>
              <Accordion.Panel>
                <ul className='grid grid-cols-4'>
                  <li className='py-[10px] px-[16px]  cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      3
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px]  cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      4
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px]  cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      4.5
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px]  cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      5
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px]  cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      5.5
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px]  cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      6
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px]  cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      6.5
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px]  cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      7
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px]  cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      7.5
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px]  cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      8
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px]  cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      8.5
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px]  cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      9
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px]  cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      9.5
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px]  cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      10
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px]  cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      10.5
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px]  cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      11
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px]  cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      11.5
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px]  cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      12
                    </h4>
                  </li>
                </ul>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value='category'>
              <Accordion.Control>
                <h3>Category</h3>
              </Accordion.Control>
              <Accordion.Panel>
                <ul className='w-full'>
                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      Necklaces
                    </h4>
                  </li>
                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      Rings
                    </h4>
                  </li>

                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      Earrings
                    </h4>
                  </li>

                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      Bracelets
                    </h4>
                  </li>

                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      Jewelry Sets
                    </h4>
                  </li>

                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      Rosary
                    </h4>
                  </li>

                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      Anniversary Jewels
                    </h4>
                  </li>

                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      Kids Jewels
                    </h4>
                  </li>

                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      Engagement Rings
                    </h4>
                  </li>

                  <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                    <h4 className='flex gap-2 items-center'>
                      <Checkbox
                        checked={checked}
                        onChange={(event) =>
                          setChecked(event.currentTarget.checked)
                        }
                      />
                      Wedding Jewelry
                    </h4>
                  </li>
                </ul>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
      </Drawer>
    </>
  );
};
export default ShowProduct;
