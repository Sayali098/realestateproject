// import logo from './logo.svg';
import './App.css';
import './index.css';
import 'swiper/swiper-bundle.css';
import Header from './components/header';
import Hero from './components/hero';
import Companies from './components/companies';
import Resedencies from './components/Resedencies';
import Value from './components/value';
import Contact from './components/Contact';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';
 
function App() {
  return (
  
    <div className="App">
      <div> 
        <div className='white-gradient'></div>
      <Header></Header>
      <Hero></Hero>
    </div>
      {/* <div> */}
      <Companies></Companies>
      <Resedencies></Resedencies>
    <Value></Value>
    <Contact></Contact>
    <GetStarted></GetStarted>
    <Footer></Footer>
      {/* </div> */}
    </div>
  );
}

export default App;
