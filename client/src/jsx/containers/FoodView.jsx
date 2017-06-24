import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';

import { viewFoodDetail } from 'actions/action';
import Food from 'components/PetFood';
import device from 'ultils/DeviceHelper';
import TEXT from 'ultils/lang';

import { Tab, Container, Button, Header, Image } from 'semantic-ui-react';


const API = {
    url_food_list: 'https://petzone.herokuapp.com/foodlist'
    //url_food_list: 'http://localhost:8000/foodlist'
}


const CONST = {
    pageSize: 4, // number element per page
}

class FoodView extends React.Component {

    constructor(props) {
        super(props);
        this.init();
    }

    init() {
        this.state = {
            rawdata: [],
            foods: [],
            visibleFoods: [],
            pageIndex: 0,
            pageSize: (device.isMobile()) ? 1 : CONST.pageSize
        }

        $.get(API.url_food_list, function (res) {
            this.state.rawdata = JSON.parse(res);
            this.state.foods = this.state.rawdata; // default food list is raw data
            this.state.visibleFoods = this.getFoodOnCurrentPage();
            this.updateState();
        }.bind(this));


    }

    render() {
        return (<Container className='food-container'>
            <Header as='h2'>
                <Image src='https://image.flaticon.com/icons/svg/372/372936.svg' />
                {' ' + TEXT.pet_food[this.props.language]}
            </Header>
            {($.isEmptyObject(this.props.food_detail)) ? this.renderFoodPage() : this.renderDetail()}
        </Container>);
    }

    renderDetail() {
        return <Container>
            <Container className='detail-img-container'>
                <img src={this.props.food_detail.image} className='detail-img'></img>
            </Container>
            <Container className='detail-infors'>
                <p id='detail-name'>{TEXT.product_name[this.props.language] + ' :  '}{this.props.food_detail.name}</p>
                <p id='detail-retail-price'>{TEXT.retail_price[this.props.language] + ' :  '}{this.props.food_detail.retail_price}</p>
                <p id='detail-producer'>{TEXT.producer[this.props.language] + ' :  '}{this.props.food_detail.producer}</p>
                <p id='detail-description'>{TEXT.description[this.props.language] + ' :  '}{this.props.food_detail.description}</p>
                <Button color="green" id='btn-call-us' className='btn btn-success'>
                    {(!device.isMobile()) ? TEXT.call_us[this.props.language] : <a href='tel:+841693689453'>{TEXT.call_us[this.props.language]}</a>}
                    <p>(+84) 987 459 907</p>
                </Button>
                <Button id='btn-other-food' color="blue" className='btn btn-info' onClick={this.onClickBtnOtherProduct.bind(this)}>{TEXT.other_food[this.props.language]}</Button>
            </Container>

        </Container>
    }

    renderFoodPage() {
        this.tabs = [{ menuItem: TEXT.all[this.props.language], render: this.renderFoodPanel.bind(this, "All") },
        { menuItem: TEXT.dog[this.props.language], render: this.renderFoodPanel.bind(this, "Dog") },
        { menuItem: TEXT.cat[this.props.language], render: this.renderFoodPanel.bind(this, "Cat") },
        { menuItem: TEXT.sick_dog[this.props.language], render: this.renderFoodPanel.bind(this, "SickDog") },
        { menuItem: TEXT.sick_cat[this.props.language], render: this.renderFoodPanel.bind(this, "SickCat") }]

        var onTabChange = function () {
            this.state.pageIndex = 0;
        }

        return (<div id='food-view'>
            <Tab panes={this.tabs} onTabChange={onTabChange.bind(this)}/>
        </div>)
    }

    renderFoodPanel(name) {
        this.state.foods = this.filterFoodsFromRaw(name);
        this.state.visibleFoods = this.getFoodOnCurrentPage();
        return <Tab.Pane>
            <Container id='food-panel' >
                {this.renderFoods(this.state.visibleFoods)}
                {this.renderNavButtons()}
            </Container>
        </Tab.Pane>;
    }

    renderFoods(foods) {
        var elements = [];
        for (var i = 0; i < foods.length; i++) {
            elements.push(<Food key={i} info={foods[i]}></Food>);
        }
        return elements;
    }

    getFoodOnCurrentPage() {
        var foods = [];
        for (var i = 0; i < this.state.pageSize; i++) {
            var index = this.state.pageIndex * this.state.pageSize + i;
            if (index < this.state.foods.length) {
                foods.push(this.state.foods[index]);
            }
        }
        return foods;
    }

    filterFoodsFromRaw(pet_type) {
        if (pet_type == 'All') return this.state.rawdata;
        var foods = [];
        for (var i = 0; i < this.state.rawdata.length; i++) {
            if (this.state.rawdata[i].pet_type == pet_type) {
                foods.push(this.state.rawdata[i]);
            }
        }
        return foods;
    }

    renderNavButtons() {
        var totalPage = (this.state.foods.length % this.state.pageSize == 0) ?
            this.state.foods.length / this.state.pageSize : (this.state.foods.length / this.state.pageSize) - 1;

        var element = <div id='nav-button'>
            <Button id='btn-prev' className='center btn btn-default' onClick={this.onClickBtnPrev.bind(this)}>{TEXT.prev[this.props.language]}</Button>
            <span id='page-number' >{TEXT.page[this.props.language]} {this.state.pageIndex + 1} / {Math.ceil(totalPage) + 1}</span>
            <Button id='btn-next' className='center btn btn-default' onClick={this.onClickBtnNext.bind(this)}>{TEXT.next[this.props.language]}</Button>
        </div>

        return element;
    }

    onClickBtnNext() {
        var totalPage = (this.state.foods.length % this.state.pageSize == 0) ?
            this.state.foods.length / this.state.pageSize : (this.state.foods.length / this.state.pageSize) - 1;


        if (this.state.pageIndex < totalPage) {

            this.state.pageIndex++;
            this.state.visibleFoods = this.getFoodOnCurrentPage();
            this.updateState();
        }
    }

    onClickBtnPrev() {
        if (this.state.pageIndex > 0) {
            this.state.pageIndex--;
            this.state.visibleFoods = this.getFoodOnCurrentPage();
            this.updateState();
        }

    }

    onClickBtnOtherProduct() {
        this.props.dispatch(viewFoodDetail({}));
    }

    updateState() {
        var prevState = this.state;
        this.setState(prevState);
    }


}

const mapStateToProps = function (state) {
    return { language: state.language, food_detail: state.food_detail }
}

export default connect(mapStateToProps, null)(FoodView);
