import ProductCard from '../ProductCard'
import "./ProductsList.css";
import { useEffect, useState } from 'react';

const products = [
    {
      id: 1,
      title: "Apple iPhone 14",
      price: "Rs. 1,00,000"
    },
    {
      id: 2,
      title: "Apple iPhone 13",
      price: "Rs. 70,000"
    },
    {
      id: 3,
      title: "Google Pixel 7",
      price: "Rs. 50,000"
    },
    {
      id: 4,
      title: "Nokia 1100",
      price: "Rs. 2,000"
    },
    {
      id: 5,
      title: "Samsung Galaxy S10",
      price: "Rs. 1,00,000"
    },
    {
      id: 6,
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
  // useEffect would be called once on mounting
  // next everytime on state change of dependency array variables
  // add [] in useEffect render only once during mounting
  useEffect(() => {
    getProductsApi(function (res) {
      console.log("api started1");
      setAllProducts(res);
      setLoadingState(false);
      console.log("api ended");
    });
  }, [allProducts, isLoading]);
  // function useEffect(callback, dependency array) {var counter;if(dep===[]&& counter<1){counter++; callback()} if(count)if(dep[0]!==prevdep[0]){callback()}}
  // setIsLoading(true);
  if (isLoading) {
    return (
      <img 
        alt="loading"
        src="https://miro.medium.com/v2/resize:fit:720/1*e_Loq49BI4WmN7o9ItTADg.gif"
      />)
  } else {
    return ( 
      <div className="products">
          {allProducts.map(function (product) {
              return (
                <ProductCard 
                  title={product.title} 
                  price={product.price} 
                  key={product.id}
                />
              );
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