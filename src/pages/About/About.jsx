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
                
                </p>
              </div>
              <div className="about-row-right">
                <p className='about-row-left-text'>
                Kroz višegodišnju komunikaciju sa klijentima u okviru velikih kompanija i procene ponude i potražnje sličnih usluga 
                uvideli smo potrebu za istupanjem na tržište i odlučili smo se da našim novim korisnicima pružimo profesionalne
                usluge po najpristupačnijim cenama na tržištu. 
                </p>
              </div>
          </div>
      </div>
      <PageHeading headingText='Šta naši korisnici kažu o nama?' />
      <Slider />
    </div>
  )
}

export default About
