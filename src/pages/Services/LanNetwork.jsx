import { useContext } from "react"
import SolutionContext from '../../context/SolutionContext'
import  { Link } from 'react-router-dom';
import PageHeading from '../../components/Page-Heading/PageHeading';
import SectionText from '../../components/SectionText/SectionText'
import './service.css';
import { BsArrowLeft } from "react-icons/bs";


function LanNetwork() {
  const {languange} = useContext(SolutionContext)
  return (
    <div className='Tretman'>
      <div className="tretman-holder">
        <Link className='back-icon-holder' to={'/usluge'}>
            <BsArrowLeft className='back-icon' fill='var(--main-yellow)' size={'2rem'} />    
        </Link> 
        <PageHeading headingText={'Umrezavanje racunara'} />
        <div className="tretman-page-holder">
            <div className="tretman-box">
                <SectionText text={languange === 'RS' ? 'Ukoliko Vam je potrebno povezivanje računara u jednu lokalnu mrežu tako da mogu da dele resurse poput stampača I skenera, kao I servera – na pravom ste mestu.' : 'Tekst na engleskom'} styleName='tretman-box-text'></SectionText>
                <span className='tretman-box-span-text'>Projektovanje I realizacija računarskih mreža u žičanoj I bežičnoj tehnologiji za
                  stambene jedinice I poslovne prostore. Povezivanje udaljenih lokacija u virtuelnuprivatnu mrežu (VPN).</span>
                <ul className='tretman-list'>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LanNetwork
