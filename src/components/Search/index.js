import React from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

const Searched = ({ inputChange, submitApi, inputText }) => {
  const handleChange = (event) => {
    inputChange(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitApi();
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input onChange={handleChange} className="search-input" placeholder="rechercher" value={inputText}/>
    </form>
  );
};

Searched.propTypes = {
  inputChange: PropTypes.func.isRequired,
  submitApi: PropTypes.func.isRequired,
  inputText: PropTypes.string.isRequired,
};

export default Searched;
