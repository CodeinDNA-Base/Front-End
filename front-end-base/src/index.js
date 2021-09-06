import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Entrance from './Containers/Entrance'
import configureStore from '../src/Admin Dashborad/Redux/CentralStore'
import { Provider } from 'react-redux';
const store = configureStore();
ReactDOM.render(
<Provider store={store}>
    <Entrance />
</Provider>

,document.getElementById('root'));