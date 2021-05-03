import "./AuthForm.css";
import { Link } from "react-router-dom";
import AuthFormLogo from "../../images/header-logo.svg";
function AuthForm (props) {
   
    return (
    <div className="auth-form">
        <img className="auth-form__logo" alt="Лого" src={AuthFormLogo}/>
        <h2 className="auth-form__title">{props.title}</h2>
        <form className={`auth-form-wrapper ${props.class}`}>
            {props.children}
             <label className="auth-form__label" htmlFor="">Е-mail</label>
        <input type="email" className="auth-form__input-email auth-form__input" htmlFor="email" id="email" name="email" required/>
        <span className="auth-form__error">Что-то пошло не так</span>
             <label className="auth-form__label" htmlFor="password">Пароль</label>
        <input type="password" className="auth-form__input-password auth-form__input" htmlFor="password" id="password" name="password" required/>
        <span className="auth-form__error">Что-то пошло не так</span>
        </form>
        <button className="auth-form__button">{props.buttonText}</button>
        <p className="auth-form__link-text"> {props.linkText} <Link to={props.onLog} className="auth-form__link">{props.logText}</Link></p>
    </div>
    )
}

export default AuthForm;