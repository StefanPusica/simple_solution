import './topbar.css'
import { FaLocationArrow, FaPhoneAlt, FaFacebookF, FaInstagram } from "react-icons/fa";

function TopBar() {
  return (
    <div className='TopBar'>
        <div className="left">
            {/* <div className="location">
                <FaLocationArrow />
                <p>Safarikova 25, Novi Sad</p>
            </div> */}
            <div className="phone">
                <a href='tel:062388562'>
                    <FaPhoneAlt className='phone-icon' />
                </a>
            </div>
        </div>
        <div className="right">
            <FaFacebookF />
            <FaInstagram />
        </div>
    </div>
  )
}

export default TopBar
