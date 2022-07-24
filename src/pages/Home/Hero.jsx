import { FaChevronRight } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { MdMiscellaneousServices } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { BsHddNetworkFill, BsCodeSlash } from "react-icons/bs";
import { BiWebcam } from "react-icons/bi";
import { Link } from 'react-router-dom';
import './hero.css';

function Hero() {
  return (
    <div className="Hero">
        <div className="hero-holder">
          <div className="hero-holder-background">
            <h1 className="hero-heading">Ukoliko vam je potrebno</h1>
              <div className="home-services-holder">
                <div className="home-service">
                  <MdMiscellaneousServices className='home-service-icon' />
                  <p className="home-service-text">Servis racunara</p>
                </div>
                <div className="home-service">
                  <AiOutlineWifi className='home-service-icon' />
                  <p className="home-service-text">Wifi pokrivenost</p>
                </div>
                <div className="home-service">
                  <BsHddNetworkFill className='home-service-icon' />
                  <p className="home-service-text">Projektovanje LAN mreže</p>
                </div>
                <div className="home-service">
                  <BiWebcam className='home-service-icon' />
                  <p className="home-service-text">Video nadzor</p>
                </div>
                <div className="home-service">
                  <BsCodeSlash className='home-service-icon' />
                  <p className="home-service-text">Izrada Veb sajta</p>
                </div>
              </div>
              <h1 className="hero-heading margin">Nalazite se na pravoj veb lokacji!</h1>
              {/* <Link to={'/zakazivanje'} className="hero-btn">
                  <p>Zakažite svoj termin</p>
                  <FaChevronRight />
              </Link> */}
          </div>
          <div className="hero-overlay"></div>
        </div>
    </div>
  )
}

export default Hero
