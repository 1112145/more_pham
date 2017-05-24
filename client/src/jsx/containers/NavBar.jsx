import React from 'react';

import { connect } from 'react-redux';

class NavBar extends React.Component {

    render() {
        return <div id='header-navbar'>
            <img id='logo'  src='/assets/images/logo.png'/>
            <img src="https://image.flaticon.com/icons/svg/375/375061.svg" height="64px"/>
            <div id='logo-text'>PET ZONE</div> 
        </div>
    }


}

export default connect()(NavBar);