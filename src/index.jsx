import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import CreatePoll from './components/createpoll';
import './index.scss';

ReactDOM.render(
  <Router>
    <Route path="/" component={CreatePoll} />
  </Router>,
  document.getElementById('root')
);
