import  { Link } from 'react-router-dom';
import PageHeading from '../../components/Page-Heading/PageHeading';
import './service.css';
import { BsArrowLeft } from "react-icons/bs";


function VideoSurveillance() {
  return (
    <div className='Tretman'>
      <div className="tretman-holder">
        <Link className='back-icon-holder' to={'/usluge'}>
            <BsArrowLeft className='back-icon' fill='var(--main-yellow)' size={'2rem'} />    
        </Link> 
        <PageHeading headingText={'Video nadzor'} />
        <div className="tretman-page-holder">
            <div className="tretman-box">
                <p className='tretman-box-text'>Svedoci smo sve cescih obijanja kuca I stanova koja se desavaju oko nas.</p>
                <span className='tretman-box-span-text'></span>
                <ul className='tretman-list'>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSurveillance
