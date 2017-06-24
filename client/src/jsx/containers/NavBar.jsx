import React from 'react';

import { connect } from 'react-redux';

import {Icon, Image, Container, Header} from 'semantic-ui-react';

class NavBar extends React.Component {

    render() {
        return <div id='header-navbar'>
            <Image id='logo'  src='/assets/images/logo.png'/>
            <Image id='cat' src="https://image.flaticon.com/icons/svg/375/375061.svg"/>
            <Container id='logo-text'>PET ZONE</Container> 
            <Header id='hotline' as='h5' color='yellow'>
                <Icon  name='phone' color='yellow'/>HOTLINE: (08)22532497-0987459907
            </Header>
        </div>
    }


}

export default connect()(NavBar);