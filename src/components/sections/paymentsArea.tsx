import AmericanExpress from '../atoms/icons/americanExpress';
import Ideal_ic from '../atoms/icons/ideal';
import MasterCard_icon from '../atoms/icons/mastercard';
import Paypal_ic from '../atoms/icons/paypal';
import Visa_ic from '../atoms/icons/visa';

const PaymentsArea = () => {
  return (
    <>
      <div className='border-t-[1px] border-solid border-[#e6e6e6] py-[1rem]'>
        <div className='container mx-auto px-4 grid gap-2'>
          <h2 className='font-bold'>Payment methods</h2>

          <ul className='flex gap-4'>
            <li className='border-solid border-[0.01rem] border-[#e6e6e6] rounded-[0.4rem] w-12 h-[30px]'>
              <AmericanExpress />
            </li>
            <li className='border-solid border-[0.01rem] border-[#e6e6e6] rounded-[0.4rem] w-12 h-[30px]'>
              <MasterCard_icon />
            </li>
            <li className='border-solid border-[0.01rem] border-[#e6e6e6] rounded-[0.4rem] w-12 h-[30px]'>
              <Visa_ic />
            </li>
            <li className='border-solid border-[0.01rem] border-[#e6e6e6] rounded-[0.4rem] w-12 h-[30px]'>
              <Paypal_ic />
            </li>
            <li className='border-solid border-[0.01rem] border-[#e6e6e6] rounded-[0.4rem] w-12 h-[30px]'>
              <Ideal_ic />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PaymentsArea;
