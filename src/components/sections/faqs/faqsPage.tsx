import { Accordion } from '@mantine/core';

const FaqsPage = () => {
  return (
    <>
      <div className='container px-4 py-8 mx-auto'>
        <div className='flex flex-col items-center gap-4 my-[40px] sm-m:my-[0px] mx-auto max-w-[55rem] s-1023:w-[55rem]  s-900:!w-[100%]'>
          <h1 className='font-[nexaBold,sans-serif] font-[50px]'>FAQs</h1>

          <div className='w-full'>
            <Accordion transitionDuration={500} className='grid gap-4'>
              <Accordion.Item value='q1'>
                <Accordion.Control>
                  Is NameSite online the same as NameSite jewellery?
                </Accordion.Control>
                <Accordion.Panel>
                  Yes, but we offer a different variety of Gold and Diamond
                  jewellery other than what is provided in NameSite stores.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value='q2'>
                <Accordion.Control>Do you deliver?</Accordion.Control>
                <Accordion.Panel>
                  Yes.We deliver within 3- 4 working days.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value='q3'>
                <Accordion.Control>
                  How much does the delivery cost?
                </Accordion.Control>
                <Accordion.Panel>
                  The shipping fees depends on the location, whether you’re in
                  Riyadh or all up the way to Al-Baha, (currently we are deliver
                  in Makkah, and Riyadh only). Each location has its own fees.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value='q4'>
                <Accordion.Control>How can I contact you?</Accordion.Control>
                <Accordion.Panel>
                  You can contact us through:
                  <ul>
                    <li>
                      1- E-mail{' '}
                      <a
                        className='underline'
                        href='online@jewellery.com'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        online@jewellery.com
                      </a>
                    </li>
                    <li>
                      2- Facebook page{' '}
                      <a
                        className='underline'
                        href='https://www.facebook.com/page/'
                      >
                        https://www.facebook.com/page/
                      </a>
                    </li>
                    <li>
                      3- Instagram{' '}
                      <a
                        className='underline'
                        href='https://www.instagram.com/page/'
                      >
                        https://www.instagram.com/page/
                      </a>
                    </li>
                  </ul>
                  <p className='mt-4'>
                    {' '}
                    - For more information please check the Contact us section.
                  </p>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value='q5'>
                <Accordion.Control>
                  Can I exchange/refund my item at NameSite Jewellery branch?
                </Accordion.Control>
                <Accordion.Panel>
                  Yes, you can exchange the item at all NameSite Jewellery
                  branches with a voucher with the price if you wish to buy
                  online or you can refund your money. Please keep the receipt
                  with you, and the item has to be in the same condition you
                  received it.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value='q6'>
                <Accordion.Control>Methods of payment?</Accordion.Control>
                <Accordion.Panel>
                  The available method of payment is cash on delivery(COD),
                  still you can pay with your visa on delivery. received it.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value='q7'>
                <Accordion.Control>
                  Can you deliver different sizes for me to try?
                </Accordion.Control>
                <Accordion.Panel>Unfortunately we can't.</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value='q8'>
                <Accordion.Control>What about a refund?</Accordion.Control>
                <Accordion.Panel>
                  You can refund, but it has a certain process. For more
                  information check the refund policy section.
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqsPage;
