import { useContext } from "react"
import SolutionContext from '../../context/SolutionContext'
import SectionText from '../../components/SectionText/SectionText'
import  { Link } from 'react-router-dom';
import PageHeading from '../../components/Page-Heading/PageHeading';
import './service.css';
import { BsArrowLeft } from "react-icons/bs";


function VideoSurveillance() {
  const {languange} = useContext(SolutionContext)
  return (
    <div className='Tretman'>
      <div className="tretman-holder">
        <Link className='back-icon-holder' to={'/usluge'}>
            <BsArrowLeft className='back-icon' fill='var(--main-yellow)' size={'2rem'} />    
        </Link> 
        <PageHeading headingText={languange === 'RS' ? 'Video nadzor' : 'Tekst na engleskom'} />
        <div className="tretman-page-holder">
            <div className="tretman-box">
                <SectionText styleName={'tretman-box-text'} text={languange === 'RS' ? 'Svedoci smo sve cescih obijanja kuca I stanova koja se desavaju oko nas.' : 'Tekst na engleskom'}></SectionText>
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
