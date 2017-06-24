import React from 'react';
import style from 'css/style.scss';
import { connect } from 'react-redux';
import { viewFoodDetail } from 'actions/action';
import TEXT from 'ultils/lang';
import { Image, Container, Button } from 'semantic-ui-react';


class PetFood extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Container className="food">
            {this.renderImage()}
            {this.renderName()}
            {this.renderPrice()}
            {this.renderDetailButton()}
        </Container>);
    }

    renderName() {
        return <p>{this.props.info.name}</p>
    }

    renderDescription() {
        return <p className='description'>{this.props.info.description}</p>
    }

    renderImage() {
        return <Image src={this.props.info.image}/>
    }

    renderProducer() {
        return <p>{this.props.info.producer}</p>
    }

    renderPrice() {
        return <p id='price'>{this.props.info.retail_price}</p>
    }

    renderDetailButton() {
        return <Button color='blue' className='btn btn-warning' onClick={this.props.onFoodViewDetail.bind(this,this.props.info)}>
            {TEXT.detail[this.props.language]}</Button>
    }

}

const mapStateToProps = function (state) {
    return { language: state.language}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFoodViewDetail: (food) => {
      dispatch(viewFoodDetail(food))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PetFood);