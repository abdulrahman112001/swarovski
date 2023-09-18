import { Loader, Radio } from '@mantine/core';
import { useState } from 'react';
import MasterCard from '../atom/icon/MasterCard';
import vodafoneImage from '../../../public/assets/vodafone-cash.png';
import Image from 'next/image';
import { Form, Formik } from 'formik';
import Button from '../atom/Button';
import PhoneInput2 from './PhoneInput2';
import { useMutate } from '@/hooks';
import { notify } from './Notification';

export default function Deposit({ setOpen }: any) {
  const [amount, setAmount] = useState('vodafone_cash');
  const [Phone_country, setPhone_country] = useState('');
  const [phoneCode, setPhoneCode] = useState();
  const {
    mutate: PostMethod,
    isLoading: MethodLoading,
    isSuccess: SuccessMethod,
    data,
  } = useMutate({
    mutationKey: [`student/wallet/deposit`],
    endpoint: `student/wallet/deposit`,
    onSuccess: (data: any) => {
      notify('success', 'success');
      amount !== 'vodafone_cash' &&
        window.open(data?.data?.data?.payment_url, '_blank');
    },
    onError: (err) => {
      notify('error', err);
    },
    formData: true,
  });

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
              <MasterCard />
              <p className='mx-2'>Master Card</p>
            </div>
            <Radio value='' label='' className='flex justify-end !w-[20%]' />
          </div>
          <div
            className='flex  justify-between items-center shadow-md  shadow-style-x2
                    rounded-3xl col-span-6 p-5 py-6 '
          >
            <div className='flex items-center '>
              <img
                src={vodafoneImage}
                width={40}
                height={40}
                alt='vodafone_cash'
              />
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
      <div>
        <Formik
          initialValues={{ amount: '', phone: '' }}
          // onSubmit={(values) => {
          //   const postData = {
          //     ...values,
          //     payment_method: amount,
          //   }

          //   if (amount !== "vodafone_cash") {
          //     //@ts-ignore
          //     delete postData.payment_method
          //     //@ts-ignore

          //     delete postData.phone
          //   }

          //   PostMethod(postData)
          // }}
        >
          {/* {({ setFieldValue }) => ( */}
          <Form>
            {amount == 'vodafone_cash' && (
              <div className='form-group-outer country_phone my-4'>
                <PhoneInput2
                  name='phone'
                  setPhone_country={setPhone_country}
                  setPhoneCode={setPhoneCode}
                  country='EG'
                />
              </div>
            )}
            <div className='form-group-outer my-4'>
              <input
                type='text'
                className='form-control-input'
                placeholder='Enter Cash amount'
                name='amount'
                onChange={(e) => setFieldValue('amount', e.target.value)}
              />
            </div>

            <div className='flex justify-between gap-5 mt-5 '>
              <Button
                primary
                text={MethodLoading ? <Loader /> : 'Confirm'}
                className='nav-link w-1/2 py-4'
                type={'submit'}
              />

              <Button
                main
                text={'Back'}
                className='nav-link w-1/2 py-4'
                action={() => setOpen(false)}
              />
            </div>
          </Form>
          {/* )} */}
        </Formik>
        {/* ) : (
          <div className="flex justify-between gap-5 mt-5 ">
            <Button
              primary
              text={MethodLoading ? <Loader /> : "Confirm"}
              className="nav-link w-1/2 py-4"
              type={"submit"}
              action={() => PostMethod({})}
            />
            <Button main text={"Back"} className="nav-link w-1/2 py-4" />
          </div>
        )} */}
      </div>
    </>
  );
}
