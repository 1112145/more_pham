import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import FoodView from 'containers/FoodView';
import NavBar from 'containers/NavBar';
import Footer from 'containers/Footer';
import reducer from 'reducers/index';

var redux_dev_extension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
var store = createStore(reducer, redux_dev_extension);


ReactDOM.render(<Provider store={store}><div>
    <NavBar />
    <div className='body-content'>
        <FoodView />
    </div>
    
    <Footer />
    </div>
</Provider>, document.getElementById('root'));