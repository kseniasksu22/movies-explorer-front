import "./Register.css";
import AuthForm from "../AuthForm/AuthForm.js";
function Register (props) {
    return (
<AuthForm title="Добро пожаловать!" buttonText="Зарегистрироваться" linkText="Уже зарегистрированы?" logText="Войти" onLog="/sign-in">
<label className="auth-form__label" htmlFor="name">Имя</label>
         <input type="text" className="auth-form__input-name auth-form__input" name="name" id="name"/>
         <span className="auth-form__error">Что-то пошло не так</span>
</AuthForm>
    )
}

export default Register;