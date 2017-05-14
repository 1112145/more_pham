import React from 'react';
import {connect} from 'react-redux';

import TEXT from 'ultils/lang';
import { selectLanguage } from 'actions/action';


class Footer extends React.Component {
    render(){
        return <div id='footer'>
            <div id='footer-content'></div>
            <p id='develop-by'>{TEXT.develop_by[this.props.language]}</p>
             <div id='lang'>
                <img src='/assets/images/vietnamese.png' height="24px" height='24px' onClick={this.onClickLanguage.bind(this, 'vi')} />
                <img src='/assets/images/english.png' height="24px" height='24px' onClick={this.onClickLanguage.bind(this, 'en')}  />
            </div>
        </div>
    }

    onClickLanguage(lang) {
        this.props.dispatch(selectLanguage(lang));
    }
}

const mapStateToProps = function (state) {
    return { language: state.language }
}



export default connect(mapStateToProps)(Footer);

