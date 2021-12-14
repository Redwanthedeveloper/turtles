import HomeScreen from './Screens/HomeScreen';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <HomeScreen />
    </>
  );
}

export default App;
