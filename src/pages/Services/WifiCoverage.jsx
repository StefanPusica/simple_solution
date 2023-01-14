import { useContext } from "react"
import SolutionContext from '../../context/SolutionContext'
import SectionText from '../../components/SectionText/SectionText'
import  { Link } from 'react-router-dom';
import PageHeading from '../../components/Page-Heading/PageHeading';
import './service.css';
import { BsArrowLeft } from "react-icons/bs";


function WifiCoverage() {
  const {languange} = useContext(SolutionContext)
  return (
    <div className='Tretman'>
      <div className="tretman-holder">
        <Link className='back-icon-holder' to={'/usluge'}>
            <BsArrowLeft className='back-icon' fill='var(--main-yellow)' size={'2rem'} />    
        </Link> 
        <PageHeading headingText={languange === 'RS' ? 'Wifi Pokrivenost' : 'Tekst na engleskom'} />
        <div className="tretman-page-holder">
            <div className="tretman-box">
                <SectionText styleName={'tretman-box-text'} text={'Primetili ste da Vam je internet u nekoj od prostorija znatno sporiji i sadržaj se učitavadosta duže nego što bi trebalo. To je znak da je potrebno dodati jednu ili više pristupnihtačaka kako bi pokrivenost WiFi signalom bila jednaka u celoj stambenoj jedinici ili poslovnom prostoru.'}></SectionText>
                <SectionText styleName={'tretman-box-span-text'} text={'Cena uredjaja (pristupnih tačaka) zavisi od konkretnih specifikacija uredjaja, a mi ćemo Vam pomoći da odabrete pravu stvar za Vas u skladu sa Vasim potrebama.'}></SectionText>
                <ul className='tretman-list'>
                    <li>Ugradnja I konfigurisanje rutera I pristupnih tačaka (ime wifi mreze, lozinka, itd)</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WifiCoverage
