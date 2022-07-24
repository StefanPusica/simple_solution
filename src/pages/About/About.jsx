import './about.css'
import PageHeading from '../../components/Page-Heading/PageHeading'
import Slider from './Slider'
import images from '../../constants/images'

function About() {
  return (
    <div className="About">
      <PageHeading headingText='O nama' />
      <div className="about-holder">
          <div className="about-row 1">
              <div className="about-row-left">
                <p className='about-row-left-text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                    a type specimen book. 
                </p>
              </div>
              <div className="about-row-right">
                <p className='about-row-left-text'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                  a type specimen book. 
                </p>
              </div>
          </div>
      </div>
      <PageHeading headingText='Šta naši polaznici kažu o nama?' />
      <Slider />
    </div>
  )
}

export default About
