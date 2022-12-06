import { useContext } from "react"
import SolutionContext from '../../context/SolutionContext'
import SectionText from '../../components/SectionText/SectionText'
import  { Link } from 'react-router-dom';
import PageHeading from '../../components/Page-Heading/PageHeading';
import './service.css';
import { BsArrowLeft } from "react-icons/bs";


function ECitizen() {
  const {languange} = useContext(SolutionContext)
  return (
    <div className='Tretman'>
      <div className="tretman-holder">
        <Link className='back-icon-holder' to={'/usluge'}>
            <BsArrowLeft className='back-icon' fill='var(--main-yellow)' size={'2rem'} />    
        </Link> 
        <PageHeading headingText={languange === 'RS' ? 'E uprava' : 'Tekst na engleskom'} />
        <div className="tretman-page-holder">
            <div className="tretman-box">
                <SectionText styleName={'tretman-box-text'} text={'Postanite E-građanin i zaboravite na čekanje u redu'}></SectionText>
                <SectionText styleName={'tretman-box-span-text'} text={'Mi ćemo Vas sprovesti kroz potpunu instalaciju i obučiti Vas za korišćenje servisa.'}></SectionText>
                <ul className='tretman-list'>
                    <li>Zakazujte online termine za izdavanje lične karte, pasoša, vozačke dozvole.</li>
                    <li>Uverenja o nekažnjavanju ili o vođenju krivičnog postupka mogu biti dostavljeni poštom, bez odlaska u policiju ili sud.</li>
                    <li>Prijava boravka stranca</li>
                    <li>Prijava za dobrovoljno služenje vojnog roka</li>
                    <li>Pristup ličnim podacima iz centralnog registra</li>
                    <li>Proverite staž i uplaćene doprinse</li>
                    <li>Pristup ličnim podacima iz centralnog registra</li>
                    <li>Pristup ličnim podacima iz centralnog registra</li>
                </ul>
                <SectionText styleName={'tretman-box-span-text'} text={'Sa Vaše strane je jedino potrebno da:'}></SectionText>
                <ul className='tretman-list'>
                    <li>posedujete ličnu kartu sa čipom</li>
                    <li>Uverenja o nekažnjavanju ili o vođenju krivičnog postupka mogu biti dostavljeni poštom, bez odlaska u policiju ili sud.</li>
                    <li>U MUP-u podnesete zahtev za izdavanje kvalifikovanog elektronskog sertifikata (završava se u istom danu, traje čitavih 5 minuta I košta samo 100 rsd)</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ECitizen
