import './contact.css'
import PageHeading from '../../components/Page-Heading/PageHeading'
import ButtonMultyColor from '../../components/Button/ButtonMultiplyColor'
import { FaLocationArrow, FaClock, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className='Appointment'>
    <PageHeading headingText={'Kontakt'} />
      <div className="appointemnt-holder">
        <div className="overlay"></div>
        <div className="appoitments-side">
            <form action="#" className='appoitment-form'>
                <input type="text" name='name' placeholder='Ime i prezime' />
                <input type="email" name='email' placeholder='Email' />
                <textarea type="text" name='name' placeholder='Tekst poruke' />
                <ButtonMultyColor buttonType={'submit'} buttonText={'POŠALJI'} />
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
