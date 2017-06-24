import React from 'react';

import { connect } from 'react-redux';

class NavBar extends React.Component {

    render() {
        return <div id='header-navbar'>
            <img id='logo'  src='/assets/images/logo.png'/>
            <img id='cat' src="https://image.flaticon.com/icons/svg/375/375061.svg"/>
            <div id='logo-text'>PET ZONE</div> 
        </div>
    }


}

export default connect()(NavBar);