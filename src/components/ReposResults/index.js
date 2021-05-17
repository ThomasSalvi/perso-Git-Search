import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'semantic-ui-react';
import Result from './result';
import style from './style.scss';

const ReposResults = ({ results, pageIncrement }) => {
  const handleClick = (event) => {
    event.preventDefault();
    pageIncrement();
  };
  return (
    <Card.Group className="cardGroup">
      {results.map((result) => (
        <Result result={result} />
      ))}
      <Button onClick={handleClick} primary>Charger les résultats suivants</Button>
    </Card.Group>
  );
};

ReposResults.propTypes = {
  results: PropTypes.array.isRequired,
  pageIncrement: PropTypes.func.isRequired,
};

export default ReposResults;
