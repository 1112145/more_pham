import React from 'react';
import style from 'css/style.scss';


class PetFood extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="food">
            {this.renderImage()}
            {this.renderName()}
            {this.renderPrice()}
            {this.renderDescription()}
        </div>);
    }

    renderName() {
        return <p>{this.props.info.name}</p>
    }

    renderDescription() {
        return <p className='description'>{this.props.info.description}</p>
    }

    renderImage() {
        return <img src={this.props.info.image}></img>
    }

    renderProducer() {
        return <p>{this.props.info.producer}</p>
    }

    renderPrice() {
        return <p id='price'>{this.props.info.retail_price}</p>
    }

}

export default PetFood;