import './Avantages.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../assets/img/icon-api.svg'
import budgeting from '../../assets/img/icon-budgeting.svg';
import onboarding from '../../assets/img/icon-onboarding.svg';
import online from '../../assets/img/icon-online.svg';

function Avantages() {
  return (
    <section className="avantages">
      <div className="container">
        <div className="row argu-title">
          <div className="col-md-6">
            <h2>Why choose Easybank?</h2>
            <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
          </div>
        </div>
        <div className="row arguments">
          <div className="col-md-3">
            <img src={online} />
            <h3>Online Banking</h3>
            <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
          </div>
          <div className="col-md-3">
            <img src={budgeting} />
            <h3>Simple Budgeting</h3>
            <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
          </div>
          <div className="col-md-3">
            <img src={onboarding} />
            <h3>Fast Onboarding</h3>
            <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
          </div>
          <div className="col-md-3">
            <img src={api} />
            <h3>Open API</h3>
            <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Avantages;
