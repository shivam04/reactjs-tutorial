import { useSelector } from "react-redux";

function ReduxCart() {
    const cart = useSelector((state) => state.cart);
    const cartList = Object.values(cart.items);
    let totalPrice = 0;
    function getTotal() {
      cartList.forEach((cartItem) => {
        totalPrice += cartItem.quantity * cartItem.price.value;
      });
      return totalPrice;
    }
    let total = getTotal();
    if (cartList.length === 0) {
        return <div>No items atleast buy something from me</div>;
    } else {
        return (
          <>
            <ol>
              {cartList.map((item) => (
                <li key={item.id}>
                  <div>{item.title} </div>
                  <div>quantity- {item.quantity}</div>
                </li>
              ))}
            </ol>
            <span> Total: {total}</span>
          </>
        );
    }
}

export default ReduxCart;