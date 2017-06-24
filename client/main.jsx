import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {Container} from 'semantic-ui-react';


import FoodView from 'containers/FoodView';
import NavBar from 'containers/NavBar';
import Footer from 'containers/Footer';
import Map from 'containers/Map';
import Carousel from 'containers/Carousel';
import reducer from 'reducers/index';

var redux_dev_extension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
var store = createStore(reducer, redux_dev_extension);


ReactDOM.render(<Provider store={store}><div>
    <NavBar />
    <Container className='body-content'>
        <Carousel/>
        <FoodView />
        <Map/>
    </Container>
    
    <Footer />
    </div>
</Provider>, document.getElementById('root'));