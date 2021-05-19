import React from "react";
import "./Login.css";
import AuthForm from "../AuthForm/AuthForm.js";
const validator = require("email-validator");

function Login(props) {
    const [data, setData] = React.useState({
        email: "",
        password: "",
    });
    const [emailErr, setEmailErr] = React.useState('');
    const [passwordErr, setPasswordErr] = React.useState('');



    const handleErrors = () => {
        if (!data.password) {
            setPasswordErr("Введите пароль");
        } else if (data.password.length < 8) {
            setPasswordErr("Пароль должен содержать минимум 9 символов");
        } else {
            setPasswordErr("")
        };
        if (!data.email) {
            setEmailErr("Введите емейл");
        } else if (!validator.validate(data.email)) {
            setEmailErr("Введите корректный емейл. Емейл должен содержать @");
        } else {
            setEmailErr("");
        };
    }


    const handleChange = (e) => {
        const {
            name,
            value
        } = e.target;
        setData({
            ...data,
            [name]: value
        });
        handleErrors()
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.email || !data.password) {
            return;
        }
        props.handleLogin(data.email, data.password);
    };

    const handleBlur = () => {
        setEmailErr("");
        setPasswordErr("")
        props.setMsg('');
    }

    return ( <
        AuthForm onEmailBlur = {
            handleBlur
        }
        onPasswordBlur = {
            handleBlur
        }
        emailError = {
            emailErr || props.message
        }
        passwordError = {
            passwordErr
        }
        title = "Рады видеть!"
        linkText = "Ещё не зарегистрированы?"
        logText = "Регистрация"
        onLog = "/sign-up"
        buttonText = "Войти"
        class = "auth-form-wrapper_prolonged"
        onEmailValue = {
            data.email
        }
        onPasswordValue = {
            data.password
        }
        onEmailInputChange = {
            handleChange
        }
        onPasswordInputChange = {
            handleChange
        }
        onLogin = {
            handleSubmit
        } >

        </AuthForm>
    )
}

export default Login;