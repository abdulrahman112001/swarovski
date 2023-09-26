import EnterBox_IC from '../../atoms/icons/enterBox';
import StarShine_IC from '../../atoms/icons/starShine';
import PersonSVG from '../../atoms/icons/Person';
import { t } from 'i18next';

const Recommendation = () => {
  return (
    <>
      <section className='bg-[#f5f5f5] mt-8'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-12 py-5 gap-16 lg-m:grid md-m:!flex md-m:flex-col'>
            <div className='grid justify-items-center gap-2 col-span-4 lg-m:col-span-6 '>
              <span>
                <EnterBox_IC />
              </span>

              <h2 className='font-bold'>
                {t('Free global returns collection service')}
              </h2>

              <p className='text-center'>
                {t(
                  'We offer a free returns collection service on all orders worldwide'
                )}
              </p>
            </div>
            <div className='grid justify-items-center gap-2 col-span-4 lg-m:col-span-6 '>
              <span>
                <StarShine_IC />
              </span>

              <h2 className='font-bold'>
                {t('4.7/5 stars and 25,000+ reviews')}
              </h2>

              <p className='text-center'>
                {t(
                  '100% authentic brands and original styles. You know you can trust us.'
                )}
              </p>
            </div>
            <div className='grid justify-items-center gap-2 col-span-4  lg-m:col-span-12 '>
              <span>
                <PersonSVG />
              </span>

              <h2 className='font-bold'>{t('Not ready to commit?')}</h2>

              <p className='text-center lg-m:w-[60%] md-m:!w-[100%]'>
                {t(
                  'No worries, you can place an order without an account. Head to checkout and continue as a guest.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recommendation;
