import React from 'react';
import "./menuItems.css"
const FilterOptions = (props) => {
  return (
    <div>
      <span className="itemList">
        <label className="itemLabel">Name:</label>
        <input  type="text" autoFocus placeholder="Search" className="inputBox" value={props.filterNameText ? props.filterNameText : ''} onChange={e => props.handleFilteration(e, 'name')} />
      </span>
      <span className="itemList">
        <label className="itemLabel">Price:</label>
        <select value={props.filterPriceText ? props.filterPriceText : ''} onChange={e => props.handleFilteration(e, 'price')} >
          <option value="">{'All'}</option>
          <option value="0,100">{'₹0 - ₹100'}</option>
          <option value="100,125">{'₹100 - ₹125'}</option>
          <option value="125,150">{'₹125 - ₹150'}</option>
          <option value="150,175">{'₹150 - ₹175'}</option>
          <option value="175,">{'₹175+'}</option>
        </select>
      </span>
      <span className="itemList">
        <label className="itemLabel">Category:</label>
        <select value={props.filterCategoryText ? props.filterCategoryText : ''} onChange={e => props.handleFilteration(e, 'category')}>
          <option value="">{'All'}</option>
          <option value="Food Item">{'Food Item'}</option>
          <option value="Dog Food">{'Dog Food'}</option>
          <option value="Shoe">{'Shoe'}</option>
          <option value="Cloth">{'Cloth'}</option>
        </select>
      </span>
    </div>
  );
};

export default FilterOptions;
