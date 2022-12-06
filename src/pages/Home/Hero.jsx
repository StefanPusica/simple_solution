import { useContext } from "react"
import SolutionContext from '../../context/SolutionContext'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { FaChevronRight } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { MdMiscellaneousServices } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { BsHddNetworkFill, BsCodeSlash } from "react-icons/bs";
import { BiWebcam } from "react-icons/bi";
import { Link } from 'react-router-dom';
import SectionText from '../../components/SectionText/SectionText'
import './hero.css';

function Hero() {
  const {languange} = useContext(SolutionContext)
  return (
    <div className="Hero">
        <div className="hero-holder">
          <div className="hero-holder-background">
            <SectionText styleName={"hero-heading"} text={languange === 'RS' ? 'Ukoliko vam je potrebno' : 'If you need'}></SectionText>
              <div className="home-services-holder">
                <div className="home-service">
                  <MdMiscellaneousServices className='home-service-icon' />
                  <SectionText styleName={"home-service-text"} text={languange ==='RS' ? 'Servis racunara' : 'PC Service'}></SectionText>
                </div>
                <div className="home-service">
                  <AiOutlineWifi className='home-service-icon' />
                  <SectionText styleName={"home-service-text"} text={languange ==='RS' ? 'Wifi pokrivenost' : 'Wifi Coverage'}></SectionText>
                </div>
                <div className="home-service">
                  <BsHddNetworkFill className='home-service-icon' />
                  <SectionText styleName={"home-service-text"} text={languange ==='RS' ? 'Projektovanje LAN mreže' : 'Lan Network'}></SectionText>
                </div>
                <div className="home-service">
                  <BiWebcam className='home-service-icon' />
                  <SectionText styleName="home-service-text" text={languange ==='RS' ? 'Video nadzor' : 'Video Surveillance'}></SectionText>
                </div>
                <div className="home-service">
                  <BsCodeSlash className='home-service-icon' />
                  <SectionText styleName={"home-service-text"} text={languange ==='RS' ? 'Izrada Veb aplikacija' : 'Web Development'}></SectionText>
                </div>
              </div>
              <SectionText styleName={"hero-heading margin"} text={languange ==='RS' ? 'Nalazite se na pravoj veb lokacji!' : 'You are on true Web location'}></SectionText>
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
