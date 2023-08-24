import React from "react";
import css from "./cta.module.css";

const CTA = () => {
  return (
    <div className={css.cta}>
      <div className={css.cta_content}>
        <p>Request Early Access to Get Started</p>
        <h1>Register today & start exploring the endless possiblities.</h1>
      </div>

      <div className={css.cta_button}>
        <button type='button'>Get Started</button>
      </div>
    </div>
  );
};

export default CTA;
