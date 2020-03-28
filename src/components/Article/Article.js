import React from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Article.scss';

function Article(props) {
  return (
    <div class="article">
      <Card>
        <Card.Img style={{ height: '170px' }} variant="top" src={props.image} />
        <Card.Body>
          <Card.Subtitle>By {props.author}</Card.Subtitle>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.paragraph}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Article;
