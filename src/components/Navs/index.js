import React from 'react';
import style from './style.scss';
import { NavLink } from 'react-router-dom';

const Navs = () => (
  <div className="navigation">
    <NavLink className="navigation-item" activeClassName="selected" exact to="/">Rechercher un repo</NavLink>
    <NavLink className="navigation-item" activeClassName="selected" exact to="/auteur">Rechercher un auteur</NavLink>
    <NavLink className="navigation-item" activeClassName="selected" exact to="/faq">FAQ</NavLink>
  </div>
);

export default Navs;
