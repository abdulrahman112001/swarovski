import { TextInput, Select, Textarea } from '@mantine/core';
import SecondaryButton from '../../atoms/secondaryButton';
import { Link } from 'react-router-dom';

const ContactUsPage = () => {
  return (
    <>
      <div className='container px-4 py-8 mx-auto'>
        <div className='flex flex-col items-center gap-4 my-[40px] sm-m:my-[0px] mx-auto max-w-[55rem] s-1023:w-[55rem]  s-900:!w-[100%]'>
          <h1 className='font-[nexaBold,sans-serif] font-[50px]'>Contact Us</h1>
          <h2 className='s-900:text-start'>
            Have a question? Please feel free to contact our team below or email
            us directly at{' '}
            <a href='mailto:customercare@domin.com' className='underline'>
              customercare@domin.com
            </a>
            .
          </h2>
          <p className='s-900:!text-start s-900:w-full'>
            You can also give us a call at 866.829.0030
          </p>
          <p className='s-900:!text-start s-900:w-full'>
            We are available Monday-Friday 6am-5pm PST and Saturday-Sunday
            7am-3pm PST.
          </p>

          <Link to='/faqs' className='underline text-[20px]'>
            Find the answers you need in our FAQs
          </Link>
        </div>

        <div className='my-[1.5rem]  grid gap-6 contact-us-form mx-auto max-w-[55rem]  s-1023:w-[55rem]  s-900:!w-[100%]'>
          <TextInput placeholder='Full Name' label='First and Last' />
          <TextInput placeholder='Email Address' label='Email' />
          <Select
            allowDeselect
            placeholder='Select something'
            label='Issue'
            data={[
              { value: 'General Questions', label: 'General Questions' },
              { value: 'Order Errors', label: 'Order Errors' },
              { value: 'Damages', label: 'Damages' },
              { value: 'Return / Exchange', label: 'Return / Exchange' },
              { value: 'Shipping / Tracking', label: 'Shipping / Tracking' },
              { value: 'Promotions', label: 'Promotions' },
              { value: 'Product Questions', label: 'Product Questions' },
              {
                value: 'Engraving / Personalization',
                label: 'Engraving / Personalization',
              },
              { value: 'Marketing Outreach', label: 'Marketing Outreach' },
              { value: 'Collaboration', label: 'Collaboration' },
              { value: 'Wholesale Inquiry', label: 'Wholesale Inquiry' },
              { value: 'Account Questions', label: 'Account Questions' },
              { value: 'Unsubscribe Request', label: 'Unsubscribe Request' },
              { value: 'Data Removal Request', label: 'Data Removal Request' },
            ]}
            defaultValue='Select'
          />

          <Textarea
            placeholder='Message'
            label='Message'
            autosize
            minRows={7}
          />

          <div className='flex justify-center'>
            <SecondaryButton title='Submit' />
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default ContactUsPage;
