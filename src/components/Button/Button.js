import React from 'react';
import Btn from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Button.scss';

export default function Button(props) {
  return (
    <Btn variant="primary">{props.text}</Btn>
  );
}
