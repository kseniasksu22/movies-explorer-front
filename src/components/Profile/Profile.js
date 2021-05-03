import "../Profile/Profile.css";

function Profile () {
    return (
        <div className="profile">
            <h2 className="profile__greeting">Привет, Виталий!</h2>
            <form className="profile-wrapper">
                
                <label htmlFor="name" className="profile__text profile__item_line">Имя</label>
                <input type="text" className="profile__item profile__item_line" placeholder="Vitalik"/>
                
                <label htmlFor="email" className="profile__text profile__text_position">E-mail</label>
                <input type="email" className="profile__item" placeholder="Vitalik@yandex.ru"/>
            </form>
            <button type="submit" className="profile__edit">Редактировать</button>
            <button className="profile__exit">Выйти из аккаунта</button>
        </div>  
  )
}

export default Profile;