import React from "react";
import classes from './brand.module.css'
import { google, slack, atlassian, dropbox, shopify } from "./import";

const CTA = () => {
  return <div className={`${classes.brand} section_padding`}>

    <div className="">
      <img src={google} alt="google" />
    </div>

    <div className="">
      <img src={slack} alt="slack" />
    </div>

    <div className="">
      <img src={atlassian} alt="atlassian" />
    </div>

    <div className="">
      <img src={dropbox} alt="dropbox" />
    </div>

    <div className="">
      <img src={shopify} alt="shopify" />
    </div>
    

  </div>;
};

export default CTA;
