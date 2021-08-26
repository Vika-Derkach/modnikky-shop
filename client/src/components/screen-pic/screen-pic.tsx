import React from "react";
import { Link } from "react-router-dom";
import "./screen-pic.css";
interface ScreenPicPropsTypes {
  screen_pic: string, 
  title: string,
  descr: string, 
  button: string, 
  buttonLink: string, 

}
const ScreenPic: React.FC<ScreenPicPropsTypes> = ({ screen_pic, title, descr, button, buttonLink }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };
  return (
    <div className={screen_pic}>
      <div className="main-text">
        <div className="main-text__title"> {title}</div>
        <div className="main-text__descr">{descr}</div>
        <Link to={buttonLink}>
          <button onClick={scrollToTop} className="main-text__button">
            {button}
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ScreenPic;
