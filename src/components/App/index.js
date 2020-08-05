import React from 'react';
import './style.css';
import OrderList from '../OrderList'
import Header from '../Header'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="app__container">
        <OrderList></OrderList> 
      </div> 
    </div>
  );
}

export default App;
