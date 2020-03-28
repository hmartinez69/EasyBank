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
              <li className="tab">Home</li>
              <li className="tab">About</li>
              <li className="tab">Contact</li>
              <li className="tab">Blog</li>
              <li className="tab">Careers</li>
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
