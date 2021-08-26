import React from "react";
import "./info-page.css";
interface InfoPagePropsTypes {
  info_text: string, 
  info_title: string,  
  info_img: string, 

}
const InfoPage: React.FC<InfoPagePropsTypes> = ({ info_text, info_title, info_img }) => {
  return (
    <section className="info">
      <h2 className="info-title">{info_title}</h2>
      <div className="info-text">{info_text}</div>
      <div className="info-img">
        <img src={info_img} alt="info-pic" />
      </div>
    </section>
  );
};
export default InfoPage;
