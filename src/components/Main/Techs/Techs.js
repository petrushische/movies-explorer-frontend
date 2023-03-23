import './Techs.css'
function Techs() {
 return (
  <div className='techs-wrapper'>
   <div className="techs">
    <h2 className="techs__title">Технологии</h2>
    <div className='techs__line'></div>
    <h3 className="techs__subtitle">7 технологий</h3>
    <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
    <div className='techs__block-all'>
     <div className="techs__block-tool">
      <p className="techs__tool-name">HTML</p>
     </div>
     <div className="techs__block-tool">
      <p className="techs__tool-name">CSS</p>
     </div>
     <div className="techs__block-tool">
      <p className="techs__tool-name">JS</p>
     </div>
     <div className="techs__block-tool">
      <p className="techs__tool-name">React</p>
     </div>
     <div className="techs__block-tool">
      <p className="techs__tool-name">Git</p>
     </div>
     <div className="techs__block-tool">
      <p className="techs__tool-name">Express.js</p>
     </div>
     <div className="techs__block-tool">
      <p className="techs__tool-name">mongoDB</p>
     </div>
    </div>
   </div>
  </div>
 );
}
export default Techs