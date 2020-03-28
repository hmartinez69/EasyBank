import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Article from '../Article/Article';
import imgArticle1 from '../../assets/img/image-currency.jpg';
import imgArticle2 from '../../assets/img/image-restaurant.jpg';
import imgArticle3 from '../../assets/img/image-plane.jpg';
import imgArticle4 from '../../assets/img/image-confetti.jpg';
import './LatestArticles.scss';


function LatestArticles(props) {
  return (
    <div class="blog">
      <div class="container">
        <h2>Latest Articles</h2>
        <CardDeck className="row">
          <div className="col-md-3">
            <Article
              image={imgArticle1}
              author="Claire Robinson"
              title="Receive money in any currency with no fees"
              paragraph="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
            ></Article>
          </div>

          <div className="col-md-3">
            <Article
              image={imgArticle2}
              author="Wilson Hutton"
              title="Treat yourself without worrying about money"
              paragraph="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
            ></Article>
          </div>

          <div className="col-md-3">
            <Article
              image={imgArticle3}
              author="Wilson Hutton"
              title="Take your Easybank card wherever you go"
              paragraph="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
            ></Article>
          </div>

          <div className="col-md-3">
            <Article
              image={imgArticle4}
              author="Claire Robinson"
              title="Our invite-only Beta accounts are now live!"
              paragraph="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
            ></Article>
          </div>
        </CardDeck>
      </div>
    </div>
  );
}

export default LatestArticles;
