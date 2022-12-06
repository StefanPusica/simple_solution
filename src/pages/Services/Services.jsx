import { useContext } from "react"
import SolutionContext from '../../context/SolutionContext'
import './services.css'
import PageHeading from '../../components/Page-Heading/PageHeading'
import images from '../../constants/images';
import { HiX } from "react-icons/hi";
import  { Link } from 'react-router-dom'

function Services() {

  const {languange} = useContext(SolutionContext)

  return (
    <div className='Services'>
      <PageHeading headingText={languange === 'RS' ? 'Usluge' : 'Services'} />
      <div className="Services-holder">
        <Link to={'/servisRacunara'} className="service-box box1"></Link>
        <Link to={'/umrezavanjeRacunara'} className="service-box box2"></Link>
        <Link to={'/wifiPokrivenost'} className="service-box box3"></Link>
        <Link to={'/izradaVebAplikacija'} className="service-box box4"></Link>
        <Link to={'/eUprava'} className="service-box box5"></Link>
        <Link to={'/videoNadzor'} className="service-box box6"></Link>
      </div>
    </div>
  )
}

export default Services
