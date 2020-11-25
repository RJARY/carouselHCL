import React, { Component } from 'react';
import FilterOptions from "./filterOptions";

const initialstate = {
    allItems: [],
    filteredItems: [],
    filterNameText: '',
    filterCategoryText: '',
    filterPriceText: ''
};
class FilterMenu extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = initialstate;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.items && nextProps.items.length > 0) {
            this.setState({
                allItems: JSON.parse(JSON.stringify(nextProps.items)),
                filteredItems: JSON.parse(JSON.stringify(nextProps.filteredItems))
            });
        }
    }

    handleFilteration = (event, ops) => {
        const filterText = event.target.value;
        let filterCategoryText = this.state.filterCategoryText;
        let filterNameText = this.state.filterNameText;
        let filterPriceText = this.state.filterPriceText;
        let array = [...this.state.allItems] || [];
        if (ops === 'category') {
            filterCategoryText = filterText;
        } else if (ops === 'price') {
            filterPriceText = filterText;
        } else {
            filterNameText = filterText;
        }
        // category filter
        array = array.filter((obj) => {
            let ok = true;

            if (filterCategoryText !== '') {
                ok = (obj.categoryName === filterCategoryText);
            }

            return ok;
        });
        // other filters
        array.forEach((obj, idx) => {
            let filteredItems = obj.items.filter((item) => {
                let ok = true;

                if (ok && filterPriceText !== '') {
                    const finalPrice = this.calculatePrice(item.price, item.discount);
                    ok = (finalPrice > filterPriceText.split(",")[0] && (filterPriceText.split(",")[1] && finalPrice <= filterPriceText.split(",")[1]));
                }

                if (ok && filterNameText !== '') {
                    ok = (item.name.toLowerCase().search(filterNameText.toLowerCase()) > -1);
                }
                return ok;
            });
            obj.items = filteredItems;
            array[idx] = obj;
        });
        // set State
        this.setState({ filterNameText, filterCategoryText, filterPriceText, filteredItems: array });
        // this.props.filterItems(array);
    }

    calculatePrice = (op, d) => {
        return (op - (Number(op) * Number(d) / 100));
    }


    render() {
        return (
            <FilterOptions
                filterCategoryText={this.state.filterCategoryText}
                filterNameText={this.state.filterNameText}
                filterPriceText={this.state.filterPriceText}
                handleFilteration={this.handleFilteration}
            />
        );
    }
}


export default FilterMenu;