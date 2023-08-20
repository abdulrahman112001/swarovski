import FineArt from '../components/sections/FineArt';
import FirstSection from '../components/sections/FirstSection';
import HelpBar from '../components/sections/HelpBar';
import NewIn from '../components/sections/NewIn';
import TrendingWeek from '../components/sections/TrendingWeek';

const Home = () => {
  return (
    <>
      <div className='container mx-auto px-4'>
        <FirstSection />
        <NewIn />
        <TrendingWeek />
        <FineArt />
        <HelpBar />
      </div>
    </>
  );
};

export default Home;
