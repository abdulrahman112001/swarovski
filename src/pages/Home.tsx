import FirstSection from '../components/sections/FirstSection';
import NewIn from '../components/sections/NewIn';
import TrendingWeek from '../components/sections/TrendingWeek';

const Home = () => {
  return (
    <>
      <div className='container mx-auto px-4'>
        <FirstSection />
        <NewIn />
        <TrendingWeek />
      </div>
    </>
  );
};

export default Home;
