import React from "react";
import { Element } from "react-scroll";
import "./new-arrivals.css";
interface NewArrivalsPropsTypes {
  arr_title: string,
  arr_pic1: string,
  arr_pic2: string,
  arr_pic3: string,
     
  arr_pic4: string,

}
const NewArrivals: React.FC<NewArrivalsPropsTypes> = ({ arr_title, arr_pic1, arr_pic2, arr_pic3, arr_pic4 }) => {
  return (
    <Element className="arrivals" name="new_arrivals">
      <div className="arrivals__title">{arr_title}</div>
      <div className="arrivals-container">
        <div className="arrivals-picture">
          <img src={arr_pic1} alt="" />
        </div>
        <div className="arrivals-picture">
          <img src={arr_pic2} alt="" />
        </div>
        <div className="arrivals-picture">
          <img src={arr_pic3} alt="" />
        </div>
        <div className="arrivals-picture">
          <img src={arr_pic4} alt="" />
        </div>
      </div>
    </Element>
  );
};
export default NewArrivals;
