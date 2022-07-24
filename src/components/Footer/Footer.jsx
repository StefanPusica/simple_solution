import './footer.css'
import images from '../../constants/images'
import { FaLocationArrow, FaClock, FaPhoneAlt } from "react-icons/fa"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-holder">
          <div className="footer-pages">
              <h1 className="footer-heading">Strane</h1>
                <ul className="footer-list">
                    <li className='footer-list-item'>
                        <a href='#'>Početna</a>
                    </li>
                    <li className='footer-list-item'>
                        <a href='#'>O nama</a>
                    </li>
                    <li className='footer-list-item'>
                        <a href='#'>Usluge</a>
                    </li>
                    <li className='footer-list-item'>
                        <a href='#'>Kontakt</a>
                    </li>
                </ul>
          </div>
          <div className="footer-about">
            <h1 className="footer-heading">O nama</h1>
            <p className='footer-about-text'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="logo-and-btn">
            <div className="footer-logo">
                <img src={images.logo} alt="footer-logo" />
            </div>
            <div className="footer-btn-holder">
                <a href='#' className='footer-btn'>Zašto baš mi?</a>
            </div>
          </div>
          <div className="footer-pages">
              <h1 className="footer-heading">Strane</h1>
                <ul className="footer-list">
                    <li className='footer-list-item'>
                        <a href='#'>Vraćanje podataka</a>
                    </li>
                    <li className='footer-list-item'>
                        <a href='#'>Servis računara</a>
                    </li>
                    <li className='footer-list-item'>
                        <a href='#'>Uklanjanje virusa</a>
                    </li>
                    <li className='footer-list-item'>
                        <a href='#'>Izrada Veb sajtova</a>
                    </li>
                </ul>
          </div>
          <div className="footer-info">
            <h1 className="footer-heading">Info</h1>
            <div className="footer-info-holder">
                {/* <div className="footer-location">
                    <FaLocationArrow />
                    <p className='footer-location-text'>Safarikova 25, Novi sad</p>
                </div> */}
                <div className="footer-time">
                    <FaClock fill='#fff' />
                    <p className='footer-time-text'>Radnim danima <br></br>09:00h - 18:00h</p>
                </div>
                <div className="footer-call">
                    <FaPhoneAlt fill='#fff' />
                    <p className='footer-call-text'>062388562</p>
                </div>
            </div>
          </div>
      </div>
      <div className="bottom-bar">
          <p className='bootom-bar-text'>© SIMPLE SOLUTION 2022. SVA PRAVA ZADRŽANA</p>
      </div>
    </div>
  )
}

export default Footer
