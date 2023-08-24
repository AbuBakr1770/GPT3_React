import React from 'react'
import css from './footercc.module.css'
import logo from '../../assets/logo.svg'

const FooterCC = () => {
  return (
    <div className={`${css.footer} section__padding`}>
      <div className={`${css.footer_heading}`}>
        <h1 className='gradient__text' >
        Do you want to step in to the future before others
        </h1>
      </div>

      <div className={`${css.footer_btn}`}>
        <p>Request Early Access</p>
      </div>

      <div className={`${css.footer_links}`}>
      <div className={`${css.footer_links_logo}`}> 
      <img src={logo} alt="logo" />
      <p>
      Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
      </p>
      </div>

          <div className={`${css.footer_links_div}`}>
              <h4>Links</h4>
              <p>Overons</p>
              <p>Social Media</p>
              <p>Counters</p>
              <p>Contact</p>
          </div>

          <div className={`${css.footer_links_div}`}>
              <h4>Company</h4>
              <p>Terms and condition</p>
              <p>Privacy policy</p>
              <p>Contact</p>
              
          </div>

          <div className={`${css.footer_links_div}`}>
              <h4>Get in touch</h4>
              <p>Crechterwoord K12 182 DK Alknjkcb</p>
              <p>085-132567</p>
              <p>info@payme.net</p>
              
          </div>

      </div>

      <div className={`${css.footer_copyright}`}>
          <p>© 2023 GPT-3. All rights reserved.</p>
      </div>

      </div>
  )
}

export default FooterCC