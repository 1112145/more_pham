import React from 'react';

import { connect } from 'react-redux';

class NavBar extends React.Component {

    render() {
        return <div id='header-navbar'>
            <img id='logo'  src='/assets/images/logo.png'/>
            <h1 id='logo-text'>PET ZONE</h1> 
        </div>
    }


}

export default connect()(NavBar);