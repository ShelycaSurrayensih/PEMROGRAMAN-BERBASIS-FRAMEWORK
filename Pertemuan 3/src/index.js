import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import Test from './Test';
import App from './App';
import HelloComponent from './component/HelloComponent';
import reportWebVitals from './reportWebVitals';
import Login from './Login';


// function HelloComponent(){
//   return HelloComponent}
  
// class StateFullComponent extends React.Component{
//   render(){
//     return<p>StateFullComponent</p>
//   }
// }
ReactDOM.render(<Login />, document.getElementById('root'));



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
