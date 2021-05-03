import "./Login.css";
import AuthForm from "../AuthForm/AuthForm.js";

function Login(props) {
return (
   <AuthForm title="Рады видеть!" linkText="Ещё не зарегистрированы?" logText="Регистрация" onLog="/sign-up" buttonText="Войти" class="auth-form-wrapper_prolonged" >

</AuthForm>
)
}

export default Login;