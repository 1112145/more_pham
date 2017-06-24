import React from 'react';
import $ from 'jquery';
import style from '../../css/slider.scss';

import { Container, Header, Icon, Image } from 'semantic-ui-react';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Container className='carousel'>
            <div className="slider slider1">
                <div className="slides">
                    <div className="slide-item item1">
                    </div>
                    <div className="slide-item item2">
                    </div>
                    <div className="slide-item item3">
                    </div>
                    <div className="slide-item item4">
                    </div>
                </div>
            </div>

        </Container>
    }

    componentDidMount() {
        $('.slider').glide({
            arrowsWrapperClass: 'slider-arrows',
            arrowRightText: '',
            arrowLeftText: ''
        });

        console.log($('.slider').glide)
    }
}

export default Carousel;