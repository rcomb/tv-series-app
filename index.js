import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

//const greeting = React.createElement('h1', {}, 'Hello World');
// const getCurrentDate = () => {
//   const date = new Date()
//   return date.toDateString();
// }

// same as function { const date = new Date(); return Date.toDateString9();}

//const greeting = <h1>Hello World Current Date: {getCurrentDate()}</h1>

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
