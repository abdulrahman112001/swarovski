import { t } from 'i18next';
import CardTrending from '../organisms/cardTrending';

const TrendingWeek = () => {
  return (
    <div className='container mx-auto px-4'>
      <section>
        <h2 className='text-center text-[2rem] mt-12 mb-8'>
          {t('Trending this week')}
        </h2>
        <div className='grid grid-cols-3 md-m:grid-cols-2 sm-m:!grid-cols-1 gap-8'>
          <CardTrending
            title='BALMAIN'
            desc='Inspired by the house’s mid-century archives'
            image='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/5008952/data/c0b4a8e82911b5b83a84118519fcfa5d/3x4_three-columns/480/data.jpeg'
          />
          <CardTrending
            title='BEST-IN-CLASS ACTIVEWEAR'
            desc='See There Was One’s latest drop'
            image='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/5008922/data/02b872b28c5b7d5f47470a54d0ec34f8/3x4_three-columns/480/data.jpeg'
          />
          <CardTrending
            title='SAINT LAURENT'
            desc='Newness worthy of your immediate attention'
            image='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/5008924/data/3e481cfd51f375c9d4e2d418aacc3a8f/3x4_three-columns/480/data.jpeg'
          />
        </div>
      </section>
    </div>
  );
};

export default TrendingWeek;
