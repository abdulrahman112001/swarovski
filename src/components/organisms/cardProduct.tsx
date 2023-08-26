import HeartUnFill from '../atoms/icons/HeartUnFill';
import HeartFill from '../atoms/icons/HeartFill';
import { Select } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { select_size } from '../../helper/data';
import { useState } from 'react';
import SecondaryButton from '../atoms/secondaryButton';

const ProductCard = ({ imageUrl, item, size, buy }: any) => {
  const [selectedSize, setSelectedSize] = useState(null);

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

  const handleSelectChange = (value) => {
    setSelectedSize(value);
  };

  const afterStyles = {
    '--custom-background-image': `url(${imageUrl})`,
  };
  return (
    <>
      <div className='relative'>
        <a href='#'>
          <div className='newin-cards'>
            <div
              className='mw-[370px]'
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore
              style={afterStyles}
            >
              {/* show */}
              {/*  <img src={item?.images[1]?.original} alt='product1' /> */}
              <img src={item} alt='product1' />
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

        <div className='my-8'>
          {!size || (
            <div>
              <Select
                rightSection={<IconChevronDown size='1rem' />}
                rightSectionWidth={30}
                placeholder='Select size'
                styles={{ rightSection: { pointerEvents: 'none' } }}
                data={optionsSelect}
                value={selectedSize}
                onChange={handleSelectChange}
              />
            </div>
          )}

          {!buy || (
            <div className='grid gap-4 mt-4'>
              <div>
                <SecondaryButton
                  title='Add To Bag'
                  className='w-full font-bold'
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
