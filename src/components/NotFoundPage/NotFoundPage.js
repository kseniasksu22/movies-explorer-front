import "../NotFoundPage/NotFoundPage.css";
import { createBrowserHistory } from "history";

function NotFoundPage () {
   
    const history = createBrowserHistory();

    return (
        <div className="not-found-page">
<h2 className="not-found-page__title">404</h2>
<p className="not-found-page__text">Страница не найдена</p>
<button className="not-found-page__link" onClick={()=> {history.goBack()}}>Назад</button>
        </div>
    )
}

export default NotFoundPage;