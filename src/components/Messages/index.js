import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const Messages = ({counter}) => (
  <div className="message">
    <p>{counter > 0 ? `La recherche à donnée ${counter} résultats` : ' '}</p>
  </div>
);

Messages.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default Messages;
