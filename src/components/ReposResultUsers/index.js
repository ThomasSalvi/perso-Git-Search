import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'semantic-ui-react';
import Result from './result';

const ReposResultUsers = ({ results, pageIncrement }) => {
  const handleClick = (event) => {
    event.preventDefault();
    pageIncrement();
  };
  return (
    <Card.Group itemsPerRow={3}>
      {results.map((result) => (
        <Result result={result} />
      ))}
      <Button onClick={handleClick} primary>Charger les résultats suivants</Button>

    </Card.Group>
  );
};

ReposResultUsers.propTypes = {
  results: PropTypes.array.isRequired,
  pageIncrement: PropTypes.func.isRequired,
};

export default ReposResultUsers;
