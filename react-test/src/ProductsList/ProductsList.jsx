import ProductCard from '../ProductCard'
import "./ProductsList.css";
import { useState } from 'react';

const products = [
    {
      title: "Apple iPhone 14",
      price: "Rs. 1,00,000"
    },
    {
      title: "Apple iPhone 13",
      price: "Rs. 70,000"
    },
    {
      title: "Google Pixel 7",
      price: "Rs. 50,000"
    },
    {
      title: "Nokia 1100",
      price: "Rs. 2,000"
    },
    {
      title: "Samsung Galaxy S10",
      price: "Rs. 1,00,000"
    },
    {
      title: "Sony Xperia S10",
      price: "Rs. 1,00,000"
    }
  ];

function getProductsApi(callback) {
  setTimeout(function () {
    callback(products);
  }, 1000);
}

function ProductsList() {
  let [isLoading, setLoadingState] = useState(true);
  let [allProducts, setAllProducts] = useState([]);
  getProductsApi(function (res) {
    setAllProducts(res);
    setLoadingState(false);
  });
  if (isLoading) {
    return <div>Loading....</div>
  } else {
    return ( 
      <div className="products">
          {allProducts.map(function (product) {
              return <ProductCard title={product.title} price={product.price} />;
          })}
      </div>
    );
  }
}

// what is state variable?
// state is a variable whose value when set rerender the whole component.
// How do we create state variable?
// React hooks
// React hooks are function in js
// hooks are helper function.
// useState hook
// useEffect
// useName
// useCallback

// state variable going to persist the state even with re-render.

// only child re-render

export default ProductsList;