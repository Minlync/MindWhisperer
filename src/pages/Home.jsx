
import Hero from '../components/Hero';
import Controller from '../components/ARController';
import ARCrystal from '../components/ARCrystal';




const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <ARCrystal />
      <Controller />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
