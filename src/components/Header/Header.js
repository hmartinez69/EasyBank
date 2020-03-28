import './Header.scss';
import React from 'react';
import Button from '../Button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import mockup from '../../assets/img/image-mockups.png'
import bg from '../../assets/img/bg-intro-desktop.svg';

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
    </header>
  )
}

export default Header;
