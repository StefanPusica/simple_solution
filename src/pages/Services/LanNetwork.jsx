import  { Link } from 'react-router-dom';
import PageHeading from '../../components/Page-Heading/PageHeading';
import './service.css';
import { BsArrowLeft } from "react-icons/bs";


function LanNetwork() {
  return (
    <div className='Tretman'>
      <div className="tretman-holder">
        <Link className='back-icon-holder' to={'/usluge'}>
            <BsArrowLeft className='back-icon' fill='var(--main-yellow)' size={'2rem'} />    
        </Link> 
        <PageHeading headingText={'Umrezavanje racunara'} />
        <div className="tretman-page-holder">
            <div className="tretman-box">
                <p className='tretman-box-text'>Ukoliko Vam je potrebno povezivanje racunara u jednu lokalnu mrezu tako da
                mogu da dele resurse poput stampaca I skenera, kao I servera – na pravom ste
                mestu.</p>
                <span className='tretman-box-span-text'>CProjektovanje I realizacija racunarskih mreza u zicanoj I bezicnoj tehnologiji za
                stambene jedinice I poslovne prostore. Povezivanje udaljenih lokacija u virtuelnu privatnu mrezu (VPN).</span>
                <ul className='tretman-list'>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LanNetwork
