import React from "react";
import "./Register.css";
import AuthForm from "../AuthForm/AuthForm.js";
const validator = require("email-validator");

function Register(props) {
    const [data, setData] = React.useState({
        name: "",
        email: "",
        password: "",
    });


    const [emailErr, setEmailErr] = React.useState('');
    const [nameErr, setNameErr] = React.useState('');
    const [passwordErr, setPasswordErr] = React.useState('');
    const [isActiveButton, setIsActiveButton] = React.useState(true);


    const handleErrors = () => {
        if (!data.password) {
            setPasswordErr("Введите пароль");
        } else if (data.password.length < 8) {
            setPasswordErr("Пароль должен содержать минимум 8 символов");
        } else {
            setPasswordErr("")
        };
        if (!data.email) {
            setEmailErr("Введите емейл");
        } else if (!validator.validate(data.email)) {
            setEmailErr("Введите корректный емейл");
        } else {
            setEmailErr("");
        };
        if (!data.name) {
            setNameErr("Введите имя");
        } else if (data.name.length < 2) {
            setNameErr("Имя должно содержать минимум 2 символа");
        } else {
            setNameErr("");
        }
    }



    const handleChange = (e) => {
        console.log(e.target.validity.valid)
        if(!e.target.validity.valid) {
           setIsActiveButton(false);
        } else {
            setIsActiveButton(true);
        }
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
        const {
            email,
            password,
            name
        } = data;
        props.handleRegister(email, password, name);
    };
    const handleBlur = () => {
        setNameErr("");
        setEmailErr("");
        setPasswordErr("");
        props.setMsg("");
    }

    return (
<AuthForm isActive={isActiveButton} onEmailBlur={handleBlur} onPasswordBlur={handleBlur} passwordError={passwordErr} emailError={emailErr || props.message} title="Добро пожаловать!" buttonText="Зарегистрироваться" linkText="Уже зарегистрированы?" logText="Войти" onLog="/sign-in" onEmailInputChange={handleChange} onPasswordInputChange={handleChange} onEmailValue={data.email} onPasswordValue={data.password} onLogin={handleSubmit}>
<label className="auth-form__label" htmlFor="name">Имя</label>
         <input onBlur={handleBlur} type="text" className="auth-form__input-name auth-form__input"  name="name" id="name" onChange={handleChange} value={data.name} required/>
         <span className="auth-form__error">{nameErr}</span>

</AuthForm>
    )
}

export default Register;