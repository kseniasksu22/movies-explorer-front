import "./Portfolio.css";
import LinkLogo from "../../images/link.svg";
function Portfolio () {
    return (
        <div className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio-wrapper">
                <li className="portfolio__item"><a className="portfolio__link" href="#">Статичный сайт</a> <a className="portfolio__link-logo" href="#"> <img className="portfolio__link-pointer" src={LinkLogo} alt="Стрелка"/></a></li>
                <li className="portfolio__item"><a className="portfolio__link" href="#">Адаптивный сайт</a> <a className="portfolio__link-logo" href="#"> <img className="portfolio__link-pointer" src={LinkLogo} alt="Стрелка"/></a></li>
                <li className="portfolio__item"><a className="portfolio__link" href="https://github.com/kseniasksu22/react-mesto-api-full/settings">Одностраничное приложение</a> <a className="portfolio__link-logo" href="#"> <img className="portfolio__link-pointer" src={LinkLogo} alt="Стрелка"/></a></li>
            </ul>
        </div>
    )
}

export default Portfolio;