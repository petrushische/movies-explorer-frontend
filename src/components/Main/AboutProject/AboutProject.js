import './AboutProject.css'
function AboutProject() {
 return (
  <div className="about-project">
   <h2 className='about-project__title'>О проекте</h2>
   <div className='about-project__line'></div>
   <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
   <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
   <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
   <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
   <div className='about-project__progress-bar'>
    <div className='about-project__backend-block'>
     <p className='about-project__backend-text'>1 неделя</p>
    </div>
    <div className='about-project__frontend-block'>
     <p className='about-project__frontend-text'>4 недели</p>
    </div>
   </div>
   <h4 className='about-project__progress-bar-caption'>Back-end</h4>
   <h4 className='about-project__progress-bar-caption'>Front-end</h4>
  </div>
 );
}
export default AboutProject
