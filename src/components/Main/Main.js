import './Main.css'
import Promo from './Promo/Promo'
import AboutProject from '../Main/AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';

function Main({ loggedIn }) {
 return (
  <section className='main'>
   <Promo />
   <AboutProject />
   <Techs />
   <AboutMe />
  </section>
 );
}

export default Main;