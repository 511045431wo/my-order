import React from 'react';
import './style.css';
import OrderList from '../OrderList'
import Header from '../Header'

function App() {
  return (
    <div className="app">
      <Header></Header>
      <OrderList></OrderList> 
    </div>
  );
}

export default App;
