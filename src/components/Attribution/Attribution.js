import React from 'react';
import './Attribution.scss';

export default function Attribution(props) {
  return (
    <div class="attribution">
      Challenge by <a href={props.challengeUrl} target="_blank">{props.challengeName}</a>.
      Coded by <a href={props.authorUrl}>{props.authorName}</a>.
    </div>
  );
}
