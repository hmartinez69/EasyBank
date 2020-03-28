import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { ReactComponent as Facebook } from '../../assets/img/icon-facebook.svg';
import { ReactComponent as Youtube } from '../../assets/img/icon-youtube.svg';
import { ReactComponent as Twitter } from '../../assets/img/icon-twitter.svg';
import { ReactComponent as Pinterest } from '../../assets/img/icon-pinterest.svg';
import { ReactComponent as Instagram } from '../../assets/img/icon-instagram.svg';
import Button from '../Button/Button';

function Footer(props) {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row footer-content">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <Logo className="logo"/>
              </div>
            </div>
            <div className="row social-icons">
              <div className="col-md-12">
                <Facebook className="social-icon"/>
                <Youtube className="social-icon"/>
                <Twitter className="social-icon"/>
                <Pinterest className="social-icon"/>
                <Instagram className="social-icon"/>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <ul className="menu-footer">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="menu-footer">
              <li><a href="#">Careers</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-3 offset-md-1">
            <div className="row">
              <div className="col-md-12 footer-btn">
                <Button text="Request Invite" />
              </div>
            </div>
            <div className="row">
              <div className="offset-md-2 credits">
                <p>© Easybank. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
