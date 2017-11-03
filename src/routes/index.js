import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import Profile from './profile';
import Contact from './contact';
import RouterWrapper from '../routeWrapper';

export default (
  <RouterWrapper>
    <Route exact path="/" component={Home} />
    <Route path="/profile" component={Profile} />
    <Route path="/contact" component={Contact} />
  </RouterWrapper>
);
