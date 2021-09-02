import ReactDOM from 'react-dom';
import { StrictMode } from "react";
import App from './app';
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import './stylesheets/application.scss';
import store from './redux/store';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
