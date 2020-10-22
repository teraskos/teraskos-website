import React from 'react';
import ReactDOM from 'react-dom';
import ScriptTag from 'react-script-tag';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './Assets/Styles/Base/bootstrap.min.css';
import './Assets/Styles/Base/materialdesignicons.min.css'
import './Assets/Styles/Base/owl.carousel.min.css';
import './Assets/Styles/Base/owl.theme.default.min.css';
import './Assets/Styles/style.scss';
import './Assets/Styles/Base/colors/default.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
