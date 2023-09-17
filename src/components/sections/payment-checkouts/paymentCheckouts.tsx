import { useState } from 'react';
import { Stepper, Button, Group, Checkbox, TextInput } from '@mantine/core';
import SecondaryButton from '../../atoms/secondaryButton';
import MainButton from '../../atoms/mainButton';

const PaymentCheckouts = () => {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <>
      <div className='container px-4 py-8 mx-auto'>
        <div className='grid grid-cols-2 my-[40px] sm-m:my-[0px]'>
          <div>
            <Stepper
              active={active}
              onStepClick={setActive}
              breakpoint='sm'
              allowNextStepsSelect={false}
              color='indigo'
            >
              <Stepper.Step label='Delivery' description='Address verification'>
                <div className='grid gap-6 py-8'>
                  <h2 className='text-[20px]'>Shipping address</h2>

                  <div className='grid grid-cols-2 gap-4'>
                    <TextInput placeholder='First Name' label='First Name' />
                    <TextInput placeholder='Last Name' label='Last Name' />
                  </div>

                  <TextInput placeholder='Address' label='Address' />

                  <div className='grid grid-cols-2 gap-4'>
                    <TextInput placeholder='City' label='City' />
                    <TextInput placeholder='ZIP code' label='ZIP code' />
                  </div>

                  <TextInput placeholder='Phone' label='Phone' />

                  {/* <div className='flex gap-8 items-center'>
                    <Checkbox
                      label='Apartment 202, Marwa Al Marjan Building
                          King Fahd Street, Al-Olaya District, Riyadh
                          Saudi Arabia'
                      color='dark'
                      className='checkbox-payment-checkout'
                    />

                    <SecondaryButton title='Edit' />
                  </div> */}
                </div>
              </Stepper.Step>
              <Stepper.Step label='Second step' description='Verify email'>
                <h2 className='text-[20px]'>Select your payment method</h2>
              </Stepper.Step>
              <Stepper.Step label='Final step' description='Get full access'>
                Step 3 content: Get full access
              </Stepper.Step>
              <Stepper.Completed>
                Completed, click back button to get to previous step
              </Stepper.Completed>
            </Stepper>

            <Group position='center' mt='xl'>
              <SecondaryButton title='Back' action={prevStep} />
              <MainButton title='Next' action={nextStep} />
            </Group>
          </div>

          <div>2</div>
        </div>
      </div>
      ;
    </>
  );
};

export default PaymentCheckouts;
