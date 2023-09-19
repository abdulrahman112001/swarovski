import { Link } from 'react-router-dom';

const ReturnsAndRefunds = () => {
  return (
    <>
      <div className='container px-4 py-8 mx-auto'>
        <div className='flex flex-col items-start gap-4 my-[40px] sm-m:my-[0px] mx-auto max-w-[55rem] s-1023:w-[55rem]  s-900:!w-[100%]'>
          <h1 className='font-[nexaBold,sans-serif] text-center w-full font-[50px]'>
            Returns and refunds
          </h1>

          <div className='grid gap-8'>
            <div>
              <h2 className='font-bold mb-2'>For Gold:</h2>
              <ul className='list-disc grid gap-2'>
                <li>
                  Exchange within 14 days: With total payment amount. (one time
                  only).
                </li>
                <li>
                  Refund within 14 days: total amount of money is returned in
                  case of manufacturing defects ONLY.
                </li>

                <li>
                  Refund after 14 days : Through branches ONLY; workmanship is
                  deducted from the total amount & will be sold according to
                  daily price of gold.
                </li>
              </ul>
            </div>

            <div>
              <h2 className='font-bold mb-2'>For Diamonds:</h2>
              <ul className='list-disc grid gap-2'>
                <li>
                  Exchange within 14 days: With total payment amount. (one time
                  only)
                </li>
                <li>
                  Exchange after 14 days: 10% of payment amount is deducted.
                </li>

                <li>
                  Refund within 14 days: 10% of payment amount is deducted.{' '}
                </li>

                <li>Refund after 14 days: 20% of the money is deducted.</li>
              </ul>
            </div>

            <div>
              <h2 className='font-bold mb-2'>Credit cards payment :</h2>
              <ul className='list-disc grid gap-2'>
                <li>Refund will be on the same card account.</li>
              </ul>
            </div>

            <div>
              <h2 className='font-bold mb-2'>Damages and issues</h2>
              <p>
                Please inspect your order upon reception and contact us
                immediately if the item is defective, damaged or if you receive
                the wrong item, so that we can evaluate the issue and make it
                right.{' '}
              </p>

              <span>You can contact us at online@jewellery.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReturnsAndRefunds;
