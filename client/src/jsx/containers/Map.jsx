import React from 'react';

import { Container, Header, Icon, Image } from 'semantic-ui-react';

class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Container className='map'>
            <Header as='h2'>
                <Image src="https://image.flaticon.com/icons/svg/148/148842.svg"/>BẢN ĐỒ
            </Header>
            <iframe className='iframe-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2330.634267544601!2d106.69917566926402!3d10.761895697085023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f6b5f65aeef%3A0x62de4503fcb623b7!2zTmd1eeG7hW4gSOG7r3UgSMOgbywgUXXhuq1uIDQsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1498301774989" 
           ></iframe>
        </Container>
    }
}

export default Map;