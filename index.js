require('./client/stylesheets/style.scss');
import 'babel-core/polyfill';
import React from 'react';
import {render} from 'react-dom';
import Root from './client/containers/Root';
import configureStore from './client/store/configureStore';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);
