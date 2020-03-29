import './Header.scss';
import React from 'react';
import Button from '../Button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import mockup from '../../assets/img/image-mockups.png'
import bg from '../../assets/img/bg-intro-desktop.svg';
import logo from '../../assets/img/logo.svg';
import hamburger from '../../assets/img/icon-hamburger.svg';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-5 mega-title">
            <h1>Next generation digital banking</h1>
            <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <Button text="Request Invite" />
          </div>
          <div className="col-md-7 mock-up">
            <img src={bg} className="bg-mockup"/>
            <img src={mockup} className="img-mockup"/>
          </div>
        </div>
      </div>

      <div class="drop-down-nav">
        <div class="dr-list-nav" id="top-nav">
          <img src={logo} class="logo"  alt ="logo" />
          <img src={hamburger} class="hamburger" onclick="myFunction()"  alt ="icon" />
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>
      </div>
    </header>
  )
}

export default Header;
