import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';

import { viewFoodDetail } from 'actions/action';
import Food from 'components/PetFood';
import device from 'ultils/DeviceHelper';
import TEXT from 'ultils/lang';


const API = {
    url_food_list: 'https://petzone.herokuapp.com/foodlist'
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
        return ($.isEmptyObject(this.props.food_detail)) ? this.renderFoodPage() : this.renderDetail();
    }

    renderDetail() {
        return <div><h2 className='title'>{TEXT.pet_food[this.props.language]}</h2>
            <img src={this.props.food_detail.image} className='detail-img'></img>
            <div className='detail-texts'>
                <p id='detail-name'>{TEXT.product_name[this.props.language] + ' :  '}{this.props.food_detail.name}</p>
                <p id='detail-retail-price'>{TEXT.retail_price[this.props.language] + ' :  '}{this.props.food_detail.retail_price}</p>
                <p id='detail-producer'>{TEXT.producer[this.props.language] + ' :  '}{this.props.food_detail.producer}</p>
                <p id='detail-description'>{TEXT.description[this.props.language] + ' :  '}{this.props.food_detail.description}</p>
                <button id='btn-call-us' className='btn btn-success'>{TEXT.call_us[this.props.language]}</button>
                <button id='btn-other-food' className='btn btn-info' onClick={this.onClickBtnOtherProduct.bind(this)}>{TEXT.other_food[this.props.language]}</button>
            </div>

        </div>
    }

    renderFoodPage() {
        return (<div id='food-view'>
            <h2 className='title'>{TEXT.pet_food[this.props.language]}</h2>
            {this.renderFilterButtons()}
            <div id='food-panel' >{this.renderFoods(this.state.visibleFoods)}</div>
            {this.renderNavButtons()}
        </div>)
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

    renderFilterButtons() {
        var element = <div>
            <button className="btn btn-info" onClick={this.onClickFilter.bind(this, 'All')}>{TEXT.all[this.props.language]}</button>
            <button className="btn btn-default" onClick={this.onClickFilter.bind(this, 'Dog')}>{TEXT.dog[this.props.language]}</button>
            <button className="btn btn-default" onClick={this.onClickFilter.bind(this, 'Cat')}>{TEXT.cat[this.props.language]}</button>
            <button className="btn btn-default" onClick={this.onClickFilter.bind(this, 'SickDog')}>{TEXT.sick_dog[this.props.language]}</button>
            <button className="btn btn-default" onClick={this.onClickFilter.bind(this, 'SickCat')}>{TEXT.sick_cat[this.props.language]}</button>
        </div>

        return element;
    }

    renderNavButtons() {
        var totalPage = (this.state.foods.length % this.state.pageSize == 0) ?
            this.state.foods.length / this.state.pageSize : (this.state.foods.length / this.state.pageSize) - 1;

        var element = <div id='nav-button'>
            <button id='btn-prev' className='center btn btn-default' onClick={this.onClickBtnPrev.bind(this)}>{TEXT.prev[this.props.language]}</button>
            <span id='page-number' >{TEXT.page[this.props.language]} {this.state.pageIndex + 1} / {Math.ceil(totalPage) + 1}</span>
            <button id='btn-next' className='center btn btn-default' onClick={this.onClickBtnNext.bind(this)}>{TEXT.next[this.props.language]}</button>
        </div>

        return element;
    }

    onClickFilter(pet_type) {
        this.state.foods = this.filterFoodsFromRaw(pet_type);
        this.state.pageIndex = 0;
        this.state.visibleFoods = this.getFoodOnCurrentPage();
        this.updateState();
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
