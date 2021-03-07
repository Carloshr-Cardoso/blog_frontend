import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return(
    <React.Fragment>
      <section className="navbar">
        <div className="container">
          <nav>
            <div className="row">
              <div className="col lg-2">
                <Link to="/home">
                  <div className="logo">
                    <span className="naming">
                      B.Logging
                    </span>
                    <svg width="22" height="21" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <title>Layer 1</title>
                        <line stroke="#a3608f" fill="none" opacity="undefined" x1="1.5" y1="21.49999" x2="8.92424" y2="6.28757" id="svg_3" stroke-linejoin="undefined" stroke-linecap="undefined" stroke-width="4"/>
                        <line stroke="#483fc6" fill="none" opacity="undefined" x1="10.27778" y1="21.49999" x2="21.09596" y2="-0.66668" id="svg_2" stroke-linejoin="undefined" stroke-linecap="undefined" stroke-width="4"/>
                      </g>

                    </svg>
                  </div>
                </Link>
              </div>
              <div className="col lg-8 right-text">
                <ul>
                  <li className="menu-link">
                    <div className="list-link">
                      User
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Navbar;