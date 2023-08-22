import FineArt from '../components/sections/FineArt';
import FirstSection from '../components/sections/FirstSection';
import HelpBar from '../components/sections/HelpBar';
import NavigationArea from '../components/sections/NavigationArea';
import NewIn from '../components/sections/NewIn';
import Newsletter from '../components/sections/Newsletter';
import TrendingWeek from '../components/sections/TrendingWeek';
import PaymentsArea from '../components/sections/paymentsArea';

const Home = () => {
  return (
    <>
      <FirstSection />
      <NewIn />
      <TrendingWeek />
      <FineArt />
      <HelpBar />
      <Newsletter />
      <PaymentsArea />
      <NavigationArea />
    </>
  );
};

export default Home;
