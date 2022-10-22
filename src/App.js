import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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


function App() {
  return (
    <div className="App">
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
          <Route path='/kontakt' element={< Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
