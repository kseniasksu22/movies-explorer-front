import "../AboutProject/AboutProject.css";

function AboutProject() {
 return (
    <div className="about-project">
    <h2 className="about-project__title">О проекте</h2>
     <div className="about-project__info-wrapper">
         <h3 className="about-project__info-title about-project__info-title_position">Дипломный проект включал 5 этапов</h3>
         <h3 className="about-project__info-title about-project__info-title_place">На выполнение диплома ушло 5 недель</h3>
         <p className="about-project__info about-project__info_set">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
         <p className="about-project__info about-project__info_site">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
     </div>
     <div className="about-project__time-wrapper">
     <p className="about-project__time about-project__time_color">1 неделя</p>
     <p className="about-project__time about-project__time_colors">4 недели</p>
     <span className="about-project__text">Back-end</span>
     <span className="about-project__text">Front-end</span>
     </div>
</div>
   
 )
}

export default AboutProject;