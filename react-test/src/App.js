import { useState } from "react";
import "./App.css";
import ProductsList from "./ProductsList";

export default function App() {
  const [cart, setCart] = useState({});
  function increaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price.value,
        quantity: 0
      };
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);
  }
  
  function decreaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id]; // delete deltes a key from an object
    }
    setCart(newCart);
  }
  
  return (
    <div className="App">
      <ProductsList 
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
    </div>
  )
}


// named exports
// default exports
// Child()
// Component is
// It is a function
// Which returns some html
// jsx

// Pascal case for a component

// function that return jsx is known as a component in react
// functional component