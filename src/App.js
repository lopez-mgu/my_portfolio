import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nabvar from './components/Navbar/Nabvar';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import Badges from './components/Badges/Badges';
import Skills from './components/Skills/Skills';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Nabvar/>
      <main id="main">
        <HeroSection/>
        <About/>
        <Badges/>
        <Skills/>
        <Resume/>
        <Portfolio/>
       {/*  <Services/>
        <Testimonials/> */}
        <Contact/>
      </main>
      <Footer/>
      
    </>
  );
}

export default App;
