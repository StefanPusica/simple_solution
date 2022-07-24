import './services.css'
import PageHeading from '../../components/Page-Heading/PageHeading'
import images from '../../constants/images';
import { HiX } from "react-icons/hi";

function Services() {

  // const { serviceItems1, serviceItems2, FlagItem, showDetalis, closeDetalis } = useContext(Context);

  return (
    <div className='Services'>
      <PageHeading headingText={'Usluge'} />
      <div className="Services-holder">
        <div className="service-box box1"></div>
        <div className="service-box box2"></div>
        <div className="service-box box3"></div>
        <div className="service-box box4"></div>
        <div className="service-box box5"></div>
        <div className="service-box box6"></div>
      </div>
    </div>
  )
}

export default Services
