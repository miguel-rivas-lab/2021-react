import './stylesheets/application.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

const appElement = document.getElementById('app');

ReactDOM.render(<App />, appElement);