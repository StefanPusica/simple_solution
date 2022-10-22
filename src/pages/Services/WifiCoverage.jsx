import  { Link } from 'react-router-dom';
import PageHeading from '../../components/Page-Heading/PageHeading';
import './service.css';
import { BsArrowLeft } from "react-icons/bs";


function WifiCoverage() {
  return (
    <div className='Tretman'>
      <div className="tretman-holder">
        <Link className='back-icon-holder' to={'/usluge'}>
            <BsArrowLeft className='back-icon' fill='var(--main-yellow)' size={'2rem'} />    
        </Link> 
        <PageHeading headingText={'Wifi Pokrivenost'} />
        <div className="tretman-page-holder">
            <div className="tretman-box">
                <p className='tretman-box-text'>Primetili ste da Vam je internet u nekoj od prostorija znatno sporiji I sadrzaj se
                ucitava dosta duze nego sto bi trebalo
                To je znak da je potrebno dodati jednu ili vise pristupnih tacaka kako bi
                pokrivenost wifi signalom bila jednaka u celoj stambenoj jedinici ili poslovnom
                prostoru.</p>
                <span className='tretman-box-span-text'>Cena uredjaja (pristupnih tacaka) zavisi od konkretnih specifikacija uredjaja, a mi
                    cemo Vam pomoci da odabrete pravu stvar za Vas u skladu sa Vasim potrebama.</span>
                <ul className='tretman-list'>
                    <li>Ugradnja I konfigurisanje rutera I pristupnih tacaka (ime wifi mreze, lozinka, itd)</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WifiCoverage
