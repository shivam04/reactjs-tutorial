import { useState } from "react";
import "./App.css";
import ProductsPage from "./Pages/ProductsPage";
import CartPage from "./Pages/CartPage";
import ReduxCartPage from "./Pages/ReduxCartPage";
import CartContext from "./Context/CartContext";
import NotFoundPage from "./Pages/NotFoundPage";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

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
    <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity}}>
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={ProductsPage} />
          <Route exact={true} path="/cart" component={CartPage} />
          <Route exact={true} path="/redux-cart" component={ReduxCartPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </CartContext.Provider>
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