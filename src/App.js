import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Features from './Components/Features/Features';
import About from './Components/About us/About';
import Services from './Components/Our Sevices/Services';
import Projects from './Components/Projects Section/Projects';
import Contact from './Components/Contact Section/Contact';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      {/* Navabar */}
      <Navbar/>

      {/* banner */}
      <Banner/>

      {/* features */}
      <Features/>

       {/* about us */}
       <About/>

       {/* our serices */}
       <Services/>

       {/* projects */}
       <Projects/>

       {/* contacus */}
        <Contact/>

        {/* footer */}
        <Footer/>
    </div>
  );
}

export default App;
