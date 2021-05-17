import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';
import style from './style.scss';

const Result = ({ result }) => (
  <a href={result.html_url} rel="noreferrer" target="_blank">
    <Card className="card">
      <Image src={result.owner.avatar_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{result.full_name}</Card.Header>
        <Card.Meta>
          {result.name}
        </Card.Meta>
        <Card.Description>
          {result.description}
        </Card.Description>
      </Card.Content>
    </Card>
  </a>
);

Result.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Result;

/*
<div className="result">
    <img className="result-img" src={result.owner.avatar_url} alt="img" />
    <div>
      <h1 className="result-title">{result.full_name}</h1>
      <p className="result-alt">{result.name}</p>
      <p className="result-text">{result.description}</p>
    </div>
  </div>
*/
