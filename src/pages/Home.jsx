
import Hero from '../components/Hero';
import Controller from '../components/ARController';
import ARCrystal from '../components/ARCrystal';
import ChatBot from '../components/chatbot';



const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <ARCrystal />
      <Controller />
      <ChatBot/>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
