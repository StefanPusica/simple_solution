import  { Link } from 'react-router-dom';
import PageHeading from '../../components/Page-Heading/PageHeading';
import './service.css';
import { BsArrowLeft } from "react-icons/bs";


function PcServices() {
  return (
    <div className='Tretman'>
      <div className="tretman-holder">
        <Link className='back-icon-holder' to={'/usluge'}>
            <BsArrowLeft className='back-icon' fill='var(--main-yellow)' size={'2rem'} />    
        </Link> 
        <PageHeading headingText={'Servis laptop I desktop racunara'} />
        <div className="tretman-page-holder">
            <div className="tretman-box">
            <p className='tretman-box-text'>Vasem racunaru treba citava vecnost da se pokrene?
                Pre samo par godina ste skupo platili Vas racunar a imate utisak kao da je vec
                prevazidjen? Znatno ubrzajte svoj racunar i ponovo ga ucinite upotrebljivim za rad
                ili zabavu. Vec od 2999rsd.</p>
                <span className='tretman-box-span-text'></span>
                <ul className='tretman-list'>
                <li>Dijagnostika kvara</li>
                <li>Zamena delova</li>
                <li>Nadogradnja</li>
                <li>Detaljno ciscenje i zamena termalne paste,</li>
                <li>Instalacija operativnog sistema (Windows 7, Windows 10, Windows 11 ili Linux po izboru)</li>
                <li>Instalacija svih drajvera I potrebnih programa</li>
                <li>Otkljucavanje naloga sa zaboravljenom lozinkom</li>
                <li>Vracanje podataka sa starog hard diska</li>
                <li>Zamena kertridza(tonera) stampaca</li>
                <li>Instalacija e uprave I e poreza I obuka</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PcServices
