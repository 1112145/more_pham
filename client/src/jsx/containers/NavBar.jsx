import React from 'react';

import { connect } from 'react-redux';

class NavBar extends React.Component {

    render() {
        return <div id='header-navbar'>
            <img id='logo'  src='/assets/images/logo.png'/>
            <div id='logo-text'>PET ZONE</div> 
        </div>
    }


}

export default connect()(NavBar);