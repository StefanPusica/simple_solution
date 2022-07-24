import './slider.css'
import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import images from '../../constants/images';

function Slider() {

  const [slider1, setSlider1] = useState(true)
  const [slider2, setSlider2] = useState(false)

  // const turnOnSlider1 = () => {
  //   setSlider1(slider1.active = true)
  //   console.log(slider1.active)
  //   setSlider2(slider2.active = false)
  // }

  // const turnOnSlider2 = () => {
  //   setSlider1(slider2.active = true)
  //   console.log(slider2.active)
  //   setSlider1(slider1.active = false)
  // }

  return (
    <div className='Slider'>
      <div className="slider-holder">
        <div className="slider-holder-left-side">
            <div className="slider-img 1">
            </div>
            <div className="slider-social">
                <a href='#'>
                 <FaFacebookF size={'1.3rem'} />
                </a>
                <a href='#'>
                 <FaInstagram size={'1.3rem'} />
                </a>
                <a href='#'>
                 <FaTiktok size={'1.3rem'} />
                </a>
            </div>
        </div>
        <div className="slider-holder-left-side">
            <h1 className='slider-heading'>{slider1 ? 'Dusan Cosic' : 'Sanja Stupar' }</h1>
            <p className='slider-text'>
              {/* { slider1 ? 'Text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br><br></br>It has survived not only five centuries.Lorem Ipsum is simply dummy .text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type  specimen book. It has survived not only five centuries.' : 'Lorem Ipsum is simply dummy .text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br><br></br>It has survived not only five centuries.Lorem Ipsum is simply dummy .text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'} */}
              It has survived not only five centuries.Lorem Ipsum is simply dummy .text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
              <br></br><br></br>
              It has survived not only five centuries.Lorem Ipsum is simply dummy .text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </p>
        </div>
      </div>
      <div className="slider-navigation">
          <div className={slider1 ? 'slider-navigation-slider active' : 'slider-navigation-slider'} onClick={() => setSlider1(false)}>

          </div>
          <div className={slider2 ? 'slider-navigation-slider active' : 'slider-navigation-slider'} onClick={() => setSlider1(true)}>
              
          </div>
          {/* <div className="slider-navigation-slider">
              
          </div> */}
      </div>
    </div>
  )
}

export default Slider
