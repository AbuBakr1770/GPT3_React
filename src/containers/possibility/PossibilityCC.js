import React from "react";
import css from "./possibilitycc.module.css";
import possibilityImg from "../../assets/possibility.png";

const PossibilityCC = () => {
  return (
    <div className={`${css.possibility} section__padding`} id="possibility">
      <div className={`${css.possibility_image}`}>
        <img  src={possibilityImg} alt='possibilityimg' />
      </div>

      <div className={`${css.possibility_content}`}>

        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
        The possibilities are beyond your imagination
        </h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>

      </div>
    </div>
  );
};

export default PossibilityCC;
