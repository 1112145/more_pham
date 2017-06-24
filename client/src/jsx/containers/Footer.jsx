import React from 'react';
import { connect } from 'react-redux';

import TEXT from 'ultils/lang';
import { selectLanguage } from 'actions/action';
import { Flag, Container } from 'semantic-ui-react';


class Footer extends React.Component {
    render() {
        return <Container id='footer'>
            <Container id='footer-content'></Container>
            <p id='develop-by'>{TEXT.develop_by[this.props.language]}</p>
            <Container id='lang'>
                <Flag name='us' onClick={this.onClickLanguage.bind(this, 'vi')} />
                <Flag name='vn' onClick={this.onClickLanguage.bind(this, 'en')} />
            </Container>
        </Container>
    }

    onClickLanguage(lang) {
        this.props.dispatch(selectLanguage(lang));
    }
}

const mapStateToProps = function (state) {
    return { language: state.language }
}



export default connect(mapStateToProps)(Footer);

