import { useContext } from "react"
import './footer.css'
import images from '../../constants/images'
import { FaLocationArrow, FaClock, FaPhoneAlt } from "react-icons/fa"
import { Link } from 'react-router-dom';
import SolutionContext from "../../context/SolutionContext"

function Footer() {
    
  return (
    <div className="footer">
      <div className="footer-holder">
          <div className="footer-pages">
              <h1 className="footer-heading">Strane</h1>
                <ul className="footer-list">
                    <li className='footer-list-item'>
                        <Link to={'/'}>Početna</Link>
                    </li>
                    <li className='footer-list-item'>
                        {/* <a href='#'>O nama</a> */}
                        <Link to={'/onama'}>O nama</Link>
                    </li>
                    <li className='footer-list-item'>
                        {/* <a href='#'>Usluge</a> */}
                        <Link to={'/usluge'} >Usluge</Link>
                    </li>
                    <li className='footer-list-item'>
                        {/* <a href='/kontakt'>Kontakt</a> */}
                        <Link to={'/kontakt'} >Kontakt</Link>
                    </li>
                </ul>
          </div>
          <div className="footer-about">
            <h1 className="footer-heading">O nama</h1>
            <p className='footer-about-text'>
                Kroz višegodišnju komunikaciju sa klijentima u okviru velikih kompanija i procene ponude i potražnje sličnih usluga 
                uvideli smo potrebu za istupanjem na tržište i odlučili smo se da našim novim korisnicima pružimo profesionalne
                usluge po najpristupačnijim cenama na tržištu.
            </p>
          </div>
          <div className="logo-and-btn">
            <div className="footer-logo">
                <img src={images.logo} alt="footer-logo" />
            </div>
            <div className="footer-btn-holder">
                <Link to={'/onama'} className='footer-btn'>Zašto baš mi?</Link>
            </div>
          </div>
          <div className="footer-pages">
              {/* <h1 className="footer-heading">Edukacija</h1>
                <ul className="footer-list">
                    <li className='footer-list-item'>
                        <a href='#'>Soon...</a>
                    </li> */}
                    {/* <li className='footer-list-item'>
                        <a href='#'>Servis računara</a>
                    </li>
                    <li className='footer-list-item'>
                        <a href='#'>Uklanjanje virusa</a>
                    </li>
                    <li className='footer-list-item'>
                        <a href='#'>Izrada Veb aplikacija</a>
                    </li> */}
                {/* </ul> */}
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
                    <p className='footer-call-text'>+381628719654</p>
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
