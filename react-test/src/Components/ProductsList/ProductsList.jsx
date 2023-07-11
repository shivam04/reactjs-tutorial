import ProductCard from '../ProductCard'
import "./ProductsList.css";
import { useEffect, useState } from 'react';

function ProductsList({ cart, increaseQuantity, decreaseQuantity }) {
  console.log("productlist");
  let [isLoading, setLoadingState] = useState(true);
  let [allProducts, setAllProducts] = useState([]);
  // useEffect would be called once on mounting
  // next everytime on state change of dependency array variables
  // add [] in useEffect render only once during mounting
  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1//products")
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      setAllProducts(res);
      setLoadingState(false);
    });
  }, []);
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
                  product={product}
                  key={product.id}
                  cart={cart}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
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