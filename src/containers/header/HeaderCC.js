import React from "react";
import classes from "./headercc.module.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const HeaderCC = () => {
  return (
    <div className={`${classes.header} section__padding`} id="home">
      <div className={classes.header_content}>
        <h1 className={`gradient__text`}>
          Let's Build Something Amazing with ChatGPT3 OpenAi
        </h1>

        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className={`${classes.header_content_input}`}>
          <input type="email" placeholder="Your Email" />
          <button type="button">Get Started</button>
        </div>

        <div className={`${classes.header_content_people}`}>
          <img src={people} alt="people img" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className={`${classes.header_image}`}>
        <img src={ai} alt="ai img" />
      </div>
    </div>
  );
};

export default HeaderCC;
