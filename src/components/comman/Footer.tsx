import * as React from 'react';
import {NavLink} from 'react-router-dom'

class Footer extends React.Component<any, any> {
  render() {
    return (
      <footer className="Footer">
          <div className="container-fluid">
              <div className="row">
                  <div className="container">
                      <div className="row">
                        <div className="col-sm-3 col-xs-12">

                        </div>
                        <div className="col-sm-3 col-xs-12">
                            <h4>Links</h4>
                        </div>
                        <div className="col-sm-3 col-xs-12">
                            <h4>Contact</h4>
                        </div>
                        <div className="col-sm-3 col-xs-12">
                            <h4>Social</h4>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
          <div className="container">
              <div className="row">
                  <div className="col-sm-3 col-xs-12">

                  </div>
                  <div className="col-sm-3 col-xs-12">
                    <h4>Links</h4>
                    <ul>
                        <li>
                            <a href="#Home">Home</a>
                        </li>
                        <li>
                            <a href="#About-Us">About Us</a>
                        </li>
                        <li>
                            <a href="#Features">Features</a>
                        </li>
                        <li>
                            <a href="#Inception">Inception</a>
                        </li>
                        <li>
                            <a href="#Contact">Contact</a>
                        </li>
                        <li>
                            <NavLink to="/faqs">FAQS</NavLink>
                        </li>
                    </ul>
                  </div>
                  <div className="col-sm-3 col-xs-12">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="mailto:info@spotter.buzz">info@spotter.buzz</a></li>
                        <li><NavLink to="/support">Support</NavLink></li>
                    </ul>
                  </div>
                  <div className="col-sm-3 col-xs-12">
                    <h4>Social</h4>
                    <ul>
                        <li>
                            <a href="http://facebook.com" target="_blank" className="fa fa-facebook"></a>
                        </li>
                        <li>
                            <a href="http://twitter.com" target="_blank" className="fa fa-twitter"></a>
                        </li>
                        <li>
                            <a href="http://instagram.com" target="_blank" className="fa fa-instagram"></a>
                        </li>
                    </ul>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xs-12">
                      <p>
                          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                          <NavLink to="/terms-and-conditions">Terms &amp; Conditions</NavLink>
                      </p>
                      <p>© 2017 by Techniexe Infolabs LLP. All Rights Reserved.</p>
                  </div>
              </div>
          </div>
      </footer>
    );
  }
}

export default Footer;
