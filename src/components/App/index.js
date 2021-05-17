// == Import npm
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from 'src/components/Header';
import Navs from 'src/components/Navs';
import Faq from 'src/components/Faq';
import Searched from 'src/components/Search';
import Messages from 'src/components/Messages';
import Spinner from 'src/components/Spinner';
import ReposResults from 'src/components/ReposResults';
import ReposResultUsers from 'src/components/ReposResultUsers';

// == Import
import './styles.css';

// == Composant
const App = () => {
  const [postsData, setPosts] = useState([]);
  const [postsDataUser, setPostsUser] = useState([]);
  const [page, setPage] = useState(1);
  const [inputText, setInputText] = useState('');
  const [repoCounter, setrepoCounter] = useState(0);
  const [userCounter, setUserCounter] = useState(0);
  const [loading, setLoading] = useState(false);
  const [lastSearch, setLastSearch] = useState('');

  const inputChange = (event) => {
    const value = event.target.value;
    setInputText(value);
  };

  const loadRepo = () => {
    setLoading(true);
    setPosts([]);
    const results = [];
    let count = 0;
    setLastSearch(inputText);
    const promise = axios.get(`https://api.github.com/search/repositories?q=${inputText}`);
    promise.then((response) => {
      response.data.items.forEach((element) => {
        results.push(element);
      });
      setInputText('');
      count = response.data.total_count;
      setrepoCounter(count);
      setPosts(results);
      setLoading(false);
    });
  };

  const loadUsers = () => {
    setLoading(true);
    setPostsUser([]);
    const results = [];
    let count = 0;
    setLastSearch(inputText);
    const promise = axios.get(`https://api.github.com/search/users?q=${inputText}`);
    promise.then((response) => {
      response.data.items.forEach((element) => {
        results.push(element);
      });
      setInputText('');
      count = response.data.total_count;
      setUserCounter(count);
      setPostsUser(results);
      setLoading(false);
    });
  };

  const loadMoreRepo = () => {
    axios.get('/search/repositories', {
      params: {
        q: lastSearch,
        sort: 'stars',
        order: 'desc',
        page: page + 1,
        per_page: 9,
      },
      baseURL: 'https://api.github.com',
    })
      .then((response) => {
        setPosts([...postsData, ...response.data.items]);
        setPage(page + 1);
      })
      .catch((errorMessage) => {
        console.error(errorMessage);
      });
  };

  const loadMoreUsers = () => {
    axios.get('/search/users', {
      params: {
        q: lastSearch,
        sort: 'stars',
        order: 'desc',
        page: page + 1,
        per_page: 9,
      },
      baseURL: 'https://api.github.com',
    })
      .then((response) => {
        setPostsUser([...postsDataUser, ...response.data.items]);
        setPage(page + 1);
      })
      .catch((errorMessage) => {
        console.error(errorMessage);
      });
  };

  return (
    <div className="app">
      <Header />
      <Navs />
      {loading && <Spinner />}
      {!loading && (
        <Switch>
          <Route exact path="/">
            <Searched inputChange={inputChange} inputText={inputText} submitApi={loadRepo} />
            {repoCounter >0 && <Messages counter={repoCounter} /> }
            {repoCounter >0 && <ReposResults results={postsData} pageIncrement={loadMoreRepo} />}
          </Route>
          <Route exact path="/faq">
            <Faq />
          </Route>
          <Route exact path="/auteur">
            <Searched inputChange={inputChange} inputText={inputText} submitApi={loadUsers} />
            {userCounter > 0 && <Messages counter={userCounter} /> }
            {userCounter > 0 && <ReposResultUsers results={postsDataUser} pageIncrement={loadMoreUsers} />}
          </Route>
        </Switch>
      )}
    </div>
  );
};

// == Export
export default App;
