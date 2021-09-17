import * as ReactDOM from 'react-dom';
import { StrictMode } from "react";
import App from './app';
import { Provider } from "react-redux";
import './stylesheets/application.scss';
import store from './redux/store';

import * as firebase from 'firebase/app';
import 'firebase/analytics';
import { app as fireApp } from "./modules/firebase";
firebase.analytics(fireApp);

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('app')
);