import "../AboutMe/AboutMe.css";
import Pic from  "../../images/pic.png";
function AboutMe () {
    return(
        <div className="about-me">
            <p className="about-me__title">Студент</p>
            <div className="about-me-wrapper">
                <div className="about-me-container">
                    <h3 className="about-me__name">Виталий</h3>
                       <p className="about-me__description">Фронтенд-разработчик, 30 лет</p>
                       <p className="about-me__full-description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена &nbsp;
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <ul className="about-me__links">
                    <li className="about-me__link"> <a className="about-me__navlink" href="#">Facebook</a></li>
                    <li className="about-me__link"><a className="about-me__navlink" href="#">GitHub</a></li>
                </ul>
                </div>
                <img className="about-me__img" alt="Картинка" src={Pic}/>
            </div>
        </div>
    )
}

export default AboutMe;