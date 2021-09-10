import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Entrance from './Containers/Entrance'
//import Test from './Containers/Test';

import {Provider} from "react-redux"
// import configureStore from "./User Dashboard/Redux/store"
import store from "./User Dashboard/Redux/store"
// const store=configureStore()
ReactDOM.render(
    <Provider store={store}>
        <Entrance />
    </Provider>
,
document.getElementById('root'));