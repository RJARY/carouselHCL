import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import FilterMenu from "./FilterMenu";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

function App() {
  return (
    <>
      <h1 className="appHeader">Welcome to the carousel</h1>
      <FilterMenu />
      <div className="App">
        <Carousel breakPoints={breakPoints} className="Item">
          <Item>
            <ul>
              <li><img src="https://static.connect2india.com/c2icd/product_resources/images/maggie-noodles.jpg" height="150px" width="300px" alt="itemImage" /></li>
              <li><span>Maggie noodles</span></li>
              <li><span>Price: ₹20</span></li>
              <li><span>Food Item</span></li>
            </ul>
          </Item>
          <Item>
            <ul>
              <li><img src="https://i2.wp.com/www.spainonafork.com/wp-content/uploads/2019/04/popcornHOR-11.png?fit=750%2C750&ssl=1" height="150px" width="300px" alt="itemImage1"/></li>
              <li><span>Popcorn</span></li>
              <li><span>Price: ₹150</span></li>
              <li><span>Food Item</span></li>
            </ul>
          </Item>
          <Item>
            <ul>
              <li><img src="https://images-na.ssl-images-amazon.com/images/I/713RJa%2BLENL._SX569_.jpg" height="150px" width="300px" alt="itemImage2"/></li>
              <li><span>Protein</span></li>
              <li><span>Price: ₹4500</span></li>
              <li><span>Food Item</span></li>
            </ul>
          </Item>
          <Item>
            <ul>
              <li><img src="https://hkprod.s3.amazonaws.com/11640/bnr_1163939_o.jpg" height="150px" width="300px" alt="itemImage3"/></li>
              <li><span>Chocobar</span></li>
              <li><span>Price: ₹20</span></li>
              <li><span>Food Item</span></li>
            </ul>
          </Item>
          <Item>
            <ul>
              <li><img src="https://hwnews.in/wp-content/uploads/2020/06/parleg.jpg" height="150px" width="300px" alt="itemImage4"/></li>
              <li><span>ParleG</span></li>
              <li><span>Price: ₹10</span></li>
              <li><span>Food Item</span></li>
            </ul>
          </Item>
          <Item>
            <ul>
              <li><img src="https://5.imimg.com/data5/WP/TM/MY-29684602/pedigree-meat-and-rice-10-kg-500x500.jpg" height="150px" width="300px" alt="itemImage5"/></li>
              <li><span>Padegery</span></li>
              <li><span>Price: ₹300</span></li>
              <li><span>Dog Food</span></li>
            </ul>
          </Item>
          <Item>
            <ul>
              <li><img src="https://5.imimg.com/data5/UX/UM/MY-14554186/nike-500x500.jpg" height="150px" width="300px" alt="itemImage6"/></li>
              <li><span>Nike Shoe</span></li>
              <li><span>Price: ₹2200</span></li>
              <li><span>Shoe </span></li>
            </ul>
          </Item>
          <Item>
            <ul>
              <li><img src="https://5.imimg.com/data5/PA/MF/MY-25748225/nike-sport-tracksuit-500x500.jpg" height="150px" width="300px" alt="itemImage7"/></li>
              <li><span>Nike Tracksuit</span></li>
              <li><span>Price: ₹3000</span></li>
              <li><span>Cloth</span></li>
            </ul>
          </Item>
        </Carousel>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
