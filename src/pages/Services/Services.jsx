import './services.css'
import PageHeading from '../../components/Page-Heading/PageHeading'
import images from '../../constants/images';
import { HiX } from "react-icons/hi";
import  { Link } from 'react-router-dom'

function Services() {

  // const { serviceItems1, serviceItems2, FlagItem, showDetalis, closeDetalis } = useContext(Context);

  return (
    <div className='Services'>
      <PageHeading headingText={'Usluge'} />
      <div className="Services-holder">
        <Link to={'/servisRacunara'} className="service-box box1"></Link>
        <Link to={'/umrezavanjeRacunara'} className="service-box box2"></Link>
        <Link to={'/wifiPokrivenost'} className="service-box box3"></Link>
        <Link to={'/izradaVebAplikacija'} className="service-box box4"></Link>
        <div className="service-box box5"></div>
        <Link to={'/videoNadzor'} className="service-box box6"></Link>
      </div>
    </div>
  )
}

export default Services
