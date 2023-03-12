import './AboutMe.css'
import myFoto from '../../../images/My-foto.jpg'
import strelka from '../../../images/strelka-aboutMe.svg'
function AboutMe() {
 return (
  <div className='about-me'>
   <h2 className='about-me__title'>Студент</h2>
   <div className='about-me__line about-me__line_order_van'></div>
   <h3 className='about-me__name'>Пётр</h3>
   <p className='about-me__busyness'>Frontend-developer, 21 год</p>
   <p className='about-me__text'>Я родился в подмосковном городе Истра. Сейчас проживая в городе Тверь и учусь в ТвГТУ по специальности инженер. В свободное время занимаюсь спортом. Недавно начал заниматься кодингом. C 2021 года работал в магазине одежды «Off-Price». Во время прохождения курса по веб-разработке, начал стажировку в компании «Salt and Pepper».
   </p>
   <img className='about-me__image' alt='Моя фотография' src={myFoto} />
   <p className='about-me__link-wrapper'>
    <a href='https://github.com/petrushische' className='about-me__link-github' target="_blank" rel="noopener noreferrer">Github</a>
   </p>
   <h4 className='about-me__portfolio'>Портфолио</h4>
   <a className='about-me__portfolio-link about-me__portfolio-link_number_van' href='https://petrushische.github.io/how-to-learn/' target="_blank" rel="noopener noreferrer">
    Статичный сайт
    <img className='about-me__portfolio-image' alt='Стрелка' src={strelka} />
   </a>
   <div className='about-me__line about-me__line_theme_dark'></div>
   <a className='about-me__portfolio-link' href='https://petrushische.github.io/tour/' target="_blank" rel="noopener noreferrer">
    Адаптивный сайт
    <img className='about-me__portfolio-image' alt='Стрелка' src={strelka} />
   </a>
   <div className='about-me__line about-me__line_theme_dark'></div>
   <a className='about-me__portfolio-link about-me__portfolio-link_number_three' href='https://petrushische.github.io/circle-game/' target="_blank" rel="noopener noreferrer">
    Одностраничное приложение
    <img className='about-me__portfolio-image' alt='Стрелка' src={strelka} />
   </a>
  </div>
 );
}
export default AboutMe;