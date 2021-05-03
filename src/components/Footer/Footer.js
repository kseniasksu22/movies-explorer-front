import "../Footer/Footer.css"
import { Route, Switch } from "react-router-dom";;

function Footer () {
    return (
       <footer className="footer">
           <Switch>
               <Route exact path="/">
                   <div className="footer-container footer-main">
               <p className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm.</p>
           <div className="footer-wrapper">
               <p className="footer__prod-year">&#169; 2021</p>
               <ul className="footer__navlinks">
                   <li className="footer__item"><a className="footer__link" href='https://praktikum.yandex.ru'>ЯндексПрактикум</a></li>
                   <li className="footer__item"><a className="footer__link" href='https://github.com/kseniasksu22'>GitHub</a></li>
                   <li className="footer__item"><a className="footer__link" href='https://www.facebook.com/'>Facebook</a></li>
               </ul>
           </div>
           </div>
               </Route>
               <Route path="/movies">
                   <div className="footer-container footer-movies">
               <p className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm.</p>
           <div className="footer-wrapper">
               <p className="footer__prod-year">&#169; 2021</p>
               <ul className="footer__navlinks">
                   <li className="footer__item"><a className="footer__link" href='https://praktikum.yandex.ru'>ЯндексПрактикум</a></li>
                   <li className="footer__item"><a className="footer__link" href='https://github.com/kseniasksu22'>GitHub</a></li>
                   <li className="footer__item"><a className="footer__link" href='https://www.facebook.com/'>Facebook</a></li>
               </ul>
           </div>
           </div>
               </Route>
               <Route path="/saved-movies">
               <div className="footer-container footer-movies">
               <p className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm.</p>
           <div className="footer-wrapper">
               <p className="footer__prod-year">&#169; 2021</p>
               <ul className="footer__navlinks">
                   <li className="footer__item"><a className="footer__link" href='https://praktikum.yandex.ru'>ЯндексПрактикум</a></li>
                   <li className="footer__item"><a className="footer__link" href='https://github.com/kseniasksu22'>GitHub</a></li>
                   <li className="footer__item"><a className="footer__link" href='https://www.facebook.com/'>Facebook</a></li>
               </ul>
           </div>
           </div>
               </Route>
        
           </Switch>
       </footer>
    )
}

export default Footer;