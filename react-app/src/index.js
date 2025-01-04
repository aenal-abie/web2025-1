import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css';
import App  from './App';
import Home, {HomeAtas}  from './Home';
import Profile  from './Profile';
import Dashboard from './Dashboard';
import ProductList from './ProductList'
import MyButton from './Button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <MyButton/>
   <MyButton/>
   <MyButton/>
   <MyButton/>
  </React.StrictMode>
);
