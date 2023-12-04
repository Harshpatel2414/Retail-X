import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Partners from './components/Partners';
import Prides from './components/Prides';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Prides/>
      <Partners/>
      <Footer />
    </>
  );
}

export default App;
