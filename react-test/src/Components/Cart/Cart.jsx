import CartContext from "../../Context/CartContext";
import useWindowsize from "../../Hooks/useWindowSize";
import { useContext } from "react";

function Cart() {
    const { cart } = useContext(CartContext);
    const cartList = Object.values(cart);
    const windowSize = useWindowsize();
    console.log(windowSize);
    if (cartList.length === 0) {
        return <div>No items atleast buy something from me</div>;
    } else {
        return (
            <ol>
            {cartList.map((item) => (
              <li key={item.id}>
                <div>{item.title} </div>
                <div>quantity- {item.quantity}</div>
              </li>
            ))}
          </ol>
        );
    }
}

export default Cart;