import Navbar from '../components/layout/navbar';
import Home from './Home';

const UnAuthHome = () => {
  return (
    <>
      <Navbar links={[]} />
      <Home />
    </>
  );
};

export default UnAuthHome;
