import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

const Result = ({ result }) => (
  <a href={result.html_url} rel="noreferrer" target="_blank">
    <Card>
      <Image src={result.avatar_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>login: {result.login}</Card.Header>
        <Card.Meta>id: {result.id}</Card.Meta>
        <Card.Description>
          Score: {result.score}
        </Card.Description>
      </Card.Content>
    </Card>
  </a>
);

Result.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Result;
