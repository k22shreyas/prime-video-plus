import React from 'react'; // importing offcial react library
import ReactDOM from 'react-dom/client'; // importing react-dom for working with the DOM
import './index.css'; // importing css 
import App from './App'; // Importing app component
import reportWebVitals from './reportWebVitals'; // importing webvitals setup
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
//app component is rendered in a div that has an id 'root'
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
