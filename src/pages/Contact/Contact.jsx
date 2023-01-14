import './contact.css'
import PageHeading from '../../components/Page-Heading/PageHeading'
import ButtonMultyColor from '../../components/Button/ButtonMultiplyColor'
import { FaLocationArrow, FaClock, FaPhoneAlt } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

function Contact() {

  const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wn6cqwd', 'template_1ykqdb9', e.target, 'zxzXoMJuwWf4jH9-7')
            .then((result) => {
                console.log(result);
                if (result.status === 200) {
                    console.log(result.text)
                    toast.success('Vaša poruka je uspešno poslata!', {
                      position: toast.POSITION.TOP_RIGHT
                  });
                }
            }, (error) => {
                console.log(error.text)
            });
            e.target.reset()
    }

  return (
    <div className='Appointment'>
    <PageHeading headingText={'Kontakt'} />
      <div className="appointemnt-holder">
        <div className="overlay"></div>
        <div className="appoitments-side">
            <form onSubmit={sendEmail} className='appoitment-form'>
                <input type="text" name='user_name' placeholder='Ime i prezime' />
                <input type="email" name='user_email' placeholder='Email' />
                <textarea type="text" name='message' placeholder='Tekst poruke' />
                <ButtonMultyColor type='submit' buttonType={'submit'} buttonText={'POŠALJI'} />
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
