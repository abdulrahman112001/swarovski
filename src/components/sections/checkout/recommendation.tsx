import EnterBox_IC from '../../atoms/icons/enterBox';
import StarShine_IC from '../../atoms/icons/starShine';
import PersonSVG from '../../atoms/icons/Person';

const Recommendation = () => {
  return (
    <>
      <section className='bg-[#f5f5f5] mt-8'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-3 py-5'>
            <div className='grid justify-items-center gap-2 px-16'>
              <span>
                <EnterBox_IC />
              </span>

              <h2 className='font-bold'>
                Free global returns collection service
              </h2>

              <p className='text-center'>
                We offer a free returns collection service on all orders
                worldwide
              </p>
            </div>
            <div className='grid justify-items-center gap-2  px-16'>
              <span>
                <StarShine_IC />
              </span>

              <h2 className='font-bold'>4.7/5 stars and 25,000+ reviews</h2>

              <p className='text-center'>
                100% authentic brands and original styles. You know you can
                trust us.
              </p>
            </div>
            <div className='grid justify-items-center gap-2  px-16'>
              <span>
                <PersonSVG />
              </span>

              <h2 className='font-bold'>Not ready to commit?</h2>

              <p className='text-center'>
                No worries, you can place an order without an account. Head to
                checkout and continue as a guest.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recommendation;
