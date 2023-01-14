import './topbar.css'
import { useContext } from "react"
import SwitchToggleButton from '../SwitchToggleButton/SwitchToggleButton';
import { FaLocationArrow, FaPhoneAlt, FaFacebookF, FaInstagram } from "react-icons/fa";
import SolutionContext from "../../context/SolutionContext"

function TopBar() {
    const {english} = useContext(SolutionContext)

  return (
    <div className='TopBar'>
        <div className="left">
            {/* <div className="location">
                <FaLocationArrow />
                <p>Safarikova 25, Novi Sad</p>
            </div> */}
            <div className="phone">
                <a href='tel:+381628719654'>
                    <FaPhoneAlt className='phone-icon' />
                </a>
            </div>
        </div>
        <div className="right">
            <FaFacebookF />
            <a className='ig' href='https://www.instagram.com/simple_solution_balkan/'>
                <FaInstagram  />
            </a>
            {/* <span>SR</span>
            <SwitchToggleButton />
            <span>ENG</span> */}
        </div>
    </div>
  )
}

export default TopBar
