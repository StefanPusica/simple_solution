import { createContext, useState, useContext } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios'
import SolutionContext from "./context/SolutionContext";
import TopBar from './components/TopBar/TopBar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './pages/Home/Hero';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import PcServices from './pages/Services/PcServices';
import WifiCoverage from './pages/Services/WifiCoverage';
import LanNetwork from './pages/Services/LanNetwork';
import VideoSurveillance from './pages/Services/VideoSurveillance';
import WebDevelopment from './pages/Services/WebDevelopment';
import Contact from './pages/Contact/Contact';
import { SolutionProvider } from './context/SolutionContext';
import ECitizen from './pages/Services/ECitizen';


function App() {

  const [countryName, setCountryName] = useState('')
  const [countryCode, setCountryCode] = useState('')


  const init = componentDidMount =>  {
    // Get Coutry Name and Coutry Code
    axios.get('https://ipapi.co/json/').then((response) => {
        let data = response.data;
        setCountryName(response.data.country_name)
        setCountryCode(response.data.country_code)
        console.log("mis", data.country_name)
        localStorage.setItem('CountryName', data.country_name)
        localStorage.setItem('CountryCode', data.country_code)
    }).catch((error) => {
        console.log(error);
    });
  }
  init();
  console.log('countryName', countryName)
  console.log('countryName', countryCode)


  
  return (
    <div className="App">
      <>
      <SolutionProvider>
        <Router>
            <TopBar/>
            <Navbar />
            <Routes>
              <Route path='/' element={< Hero />} />
              <Route path='/onama' element={< About />} />
              <Route path='/usluge' element={< Services />} />
              <Route path='/servisRacunara' element={<PcServices />} />
              <Route path='/wifiPokrivenost' element={<WifiCoverage />} />
              <Route path='/umrezavanjeRacunara' element={<LanNetwork />} />
              <Route path='/videoNadzor' element={<VideoSurveillance />} />
              <Route path='/izradaVebAplikacija' element={<WebDevelopment />} />
              <Route path='/eUprava' element={<ECitizen />} />
              <Route path='/kontakt' element={< Contact />} />
            </Routes>
            <Footer />
          </Router>
      </SolutionProvider>
      </>
    </div>
  );
}

export default App;
