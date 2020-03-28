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
        <div class="row footer-content">
          <div class="col-md-4">
            <div class="row">
              <div class="col-md-12">
                <Logo class="logo"/>
              </div>
            </div>
            <div class="row social-icons">
              <div class="col-md-12">
                <Facebook className="social-icon"/>
                <Youtube className="social-icon"/>
                <Twitter className="social-icon"/>
                <Pinterest className="social-icon"/>
                <Instagram className="social-icon"/>
              </div>
            </div>
          </div>
          <div class="col-md-2">
            <ul class="menu-footer">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div class="col-md-2">
            <ul class="menu-footer">
              <li><a href="#">Careers</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="col-md-3 offset-md-1">
            <div class="row">
              <div class="col-md-12">
                <Button text="Request Invite" />
              </div>
            </div>
            <div class="row">
              <div class="offset-md-2 credits">
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
