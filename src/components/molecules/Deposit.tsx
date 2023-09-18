import { Button, Loader, Radio, TextInput } from '@mantine/core';
import { useState } from 'react';

import MainButton from '../atoms/mainButton';
import SecondaryButton from '../atoms/secondaryButton';

export default function Deposit({ closeModal }: any) {
  const [amount, setAmount] = useState('vodafone_cash');

  const handleSubmitForm = (event) => {
    event.preventDefault();

    return;
  };

  return (
    <>
      <Radio.Group
        name='favoriteFramework'
        label='Choose Your Payment Methode'
        // description="This is anonymous"
        // withAsterisk
        value={amount}
        onChange={setAmount}
      >
        <div className='grid grid-cols-12 gap-5 mt-4'>
          <div
            className='flex  justify-between items-center shadow-md  shadow-style-x2
 rounded-3xl col-span-6 p-5 py-6 '
          >
            <div className='flex items-center '>
              <p className='mx-2'>Master Card</p>
            </div>
            <Radio value='' label='' className='flex justify-end !w-[20%]' />
          </div>

          <div
            className='flex  justify-between items-center shadow-md  shadow-style-x2
                    rounded-3xl col-span-6 p-5 py-6 '
          >
            <div className='flex items-center '>
              <p className='mx-2'>Vodafone Cash</p>
            </div>
            <Radio
              value='vodafone_cash'
              label=''
              className='flex justify-end !w-[20%]'
            />
          </div>
        </div>
      </Radio.Group>
      <div className='mt-6'>
        <form onSubmit={handleSubmitForm}>
          <div className='flex flex-col '>
            <div className='form-group-outer my-4'>
              <TextInput
                label='Enter Cash amount'
                placeholder='Enter Cash amount'
              />
            </div>

            <div className='flex justify-between gap-5 mt-5 '>
              <MainButton title='Confirm' />

              <SecondaryButton title='Back' action={closeModal} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
