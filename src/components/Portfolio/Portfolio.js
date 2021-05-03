import "./Portfolio.css";
import LinkLogo from "../../images/link.svg";
function Portfolio () {
    return (
        <div className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio-wrapper">
                <li className="portfolio__item"><a className="portfolio__link" href="https://github.com/kseniasksu22" target="_blank" rel="noreferrer">Статичный сайт</a> <a className="portfolio__link-logo" href="https://github.com/kseniasksu22" target="_blank" rel="noreferrer"> <img className="portfolio__link-pointer" src={LinkLogo} alt="Стрелка"/></a></li>
                <li className="portfolio__item"><a className="portfolio__link" href="https://github.com/kseniasksu22" target="_blank" rel="noreferrer">Адаптивный сайт</a> <a className="portfolio__link-logo" href="https://github.com/kseniasksu22" target="_blank" rel="noreferrer"> <img className="portfolio__link-pointer" src={LinkLogo} alt="Стрелка" /></a></li>
                <li className="portfolio__item"><a className="portfolio__link" href="https://github.com/kseniasksu22/react-mesto-api-full" target="_blank" rel="noreferrer">Одностраничное приложение</a> <a className="portfolio__link-logo" href="https://github.com/kseniasksu22/react-mesto-api-full" target="_blank" rel="noreferrer"> <img className="portfolio__link-pointer" src={LinkLogo} alt="Стрелка"/></a></li>
            </ul>
        </div>
    )
}

export default Portfolio;