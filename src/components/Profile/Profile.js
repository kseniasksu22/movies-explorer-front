import React from "react";
import "../Profile/Profile.css";
import { CurrentUserContext } from "../../context/CurrentUserContext";
const validator = require("email-validator");
function Profile (props) {

    const currentUser = React.useContext(CurrentUserContext);
    console.log(currentUser.email)
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
   const [isNameValid, setIsNameValid] = React.useState(false);
   const [isEmailValid, setIsEmailValid] = React.useState(false);
 const [emailErr, setEmailErr] = React.useState("");
const [nameErr, setNameErr] = React.useState("");
console.log(email)
    function handleNameChange(e) {
        setName(e.target.value);
        if (!name) {
          setIsNameValid(true);
          setNameErr("Это поле обязательное для заполения")
        } else if(name.length < 2) {
          setIsNameValid(true)
          setNameErr("Имя должно содержать минимум 2 символа")
          } 
         else {
          setIsNameValid(false)
          };
          if (currentUser.name == e.target.value) {
            document.querySelector(".profile__edit").classList.add("profile__edit_unactive")
            setIsNameValid(true);
            setNameErr("Вы уже используете это имя")
             } else {
              document.querySelector(".profile__edit").classList.remove("profile__edit_unactive")
             }
        
        }
    
      function handleEmailChange(e) {
        setEmail(e.target.value);
        if (!email) {
          setIsEmailValid(true);
          setEmailErr("Это поле обязательное для заполения")
      } else if (!validator.validate(email)) {
        setIsEmailValid(true);
          setEmailErr( "Введите корректный, содержащий @, емейл,  или используйте старый для подтверждения действий")
      } else {
        setIsEmailValid(false);
      };
  
        
     
      }

      function handleBlur (){
        setIsEmailValid(false);
        setIsNameValid(false);
      }

    function handleInfoSubmit(e) {
        e.preventDefault();
        if (!email) {
      setIsEmailValid(true);
      return  setEmailErr("Это поле обязательное для заполения")
      }
      
        props.onUpdateUser({
          name: name,
          email: email,
        });
        
      }

    return (
        <div className="profile">
            <h2 className="profile__greeting">Привет, {currentUser.name}!</h2>
            <form className="profile-wrapper">
                <label htmlFor="name" className="profile__text profile__text-name_area">Имя</label>
                <input type="text" name="name" onBlur={handleBlur} className="profile__item profile__item_area profile__item_line" placeholder={currentUser.name} onChange={handleNameChange}/>
                <span className={`profile__error profile__error-name_area ${!isNameValid ? "" : "profile__error_visible"}`}>{nameErr}</span>
                <label htmlFor="email" className="profile__text profile__text_position">E-mail</label>
                <input type="email"  onBlur={handleBlur} className="profile__item profile__item_grid-area profile__item_line"  placeholder={currentUser.email} onChange={handleEmailChange}/>
                <span className={`profile__error ${!isEmailValid ? "" : "profile__error_visible"}`}>{emailErr}</span>
            </form>
            <button type="submit" className="profile__edit" onClick={handleInfoSubmit}>Редактировать</button>
            <button className="profile__exit" onClick={props.onLogOut}>Выйти из аккаунта</button>
        </div>  
  )
}

export default Profile;