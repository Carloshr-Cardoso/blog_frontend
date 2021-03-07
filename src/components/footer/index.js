import React from 'react';

const Footer = () =>{
  return(
  <section className="footer">
    <div className="container" id="contato">
      <div className="row">
        <div className="col lg-33">
          <ul>
            <li className="footer-list">
              <a href="mailto:carlos.h.cardoso140@gmail.com">
                carlos.h.cardoso140@gmail.com
              </a>
            </li>
            <li className="footer-list">
              <a href="tel:+5591984713364">
                +55 91 9 8471 3364
              </a>
            </li>
          </ul>
        </div>
        <div className="col lg-33 center">
          <ul>
            <li className="footer-list">
              <a href="https://github.com/Carloshr-Cardoso" target="blank">
                Github
              </a>
            </li>
            <li className="footer-list">
              <a href="https://www.linkedin.com/in/carloshrcardoso/" target="blank">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <div className="col lg-33 right">
          <p classname="copy">
            Desenvolvido por: Carlos Henrique R. Cardoso
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Footer;