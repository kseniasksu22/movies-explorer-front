import "../Preloader/Preloader.css";

function Preloader (props) {
    return (
     <div className={`preloader ${props.isOpen ? "preloader_showed" : ""}`}>
         <div className="preloader-content">
            <div className="preloader__item preloader__item-one"></div>
            <div className="preloader__item preloader__item-two"></div>
            <div className="preloader__item preloader__item-three"></div>
            <div className="preloader__item preloader__item-four"></div>
            <div className="preloader__item preloader__item-five"></div>
         </div>
      
    </div>
    )
}

export default Preloader;