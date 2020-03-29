import React from 'react';
import './Nav.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import Button from '../Button/Button';

export default function Nav(props) {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-md-2 logo-header">
            <Logo />
          </div>
          <div className="col-md-4 offset-md-2">
            <ul className="tabs row">
              <li><a href="#" className="tab">Home</a></li>
              <li><a href="#" className="tab">About</a></li>
              <li><a href="#" className="tab">Contact</a></li>
              <li><a href="#" className="tab">Blog</a></li>
              <li><a href="#" className="tab">Careers</a></li>
            </ul>
          </div>
          <div className="col-md-2 offset-md-2">
            <Button text="Request Invite" />
          </div>
        </div>
      </div>
    </nav>
  );
}
