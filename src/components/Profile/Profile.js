import React from "react";
import "../Profile/Profile.css";
import { CurrentUserContext } from "../../context/CurrentUserContext";
function Profile (props) {

    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");

    function handleNameChange(e) {
        setName(e.target.value);
      }
    
      function handleEmailChange(e) {
        setEmail(e.target.value);
      }

    function handleInfoSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
          name: name,
          email: email,
        });
      }

    return (
        <div className="profile">
            <h2 className="profile__greeting">Привет, {currentUser.name}!</h2>
            <form className="profile-wrapper">
                
                <label htmlFor="name" className="profile__text profile__item_line">Имя</label>
                <input type="text" name="name" className="profile__item profile__item_line" placeholder={currentUser.name} onChange={handleNameChange}/>
                
                <label htmlFor="email" className="profile__text profile__text_position">E-mail</label>
                <input type="email" className="profile__item" placeholder={currentUser.email} onChange={handleEmailChange}/>
            </form>
            <button type="submit" className="profile__edit" onClick={handleInfoSubmit}>Редактировать</button>
            <button className="profile__exit" onClick={props.onLogOut}>Выйти из аккаунта</button>
        </div>  
  )
}

export default Profile;