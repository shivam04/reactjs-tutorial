function AddToCart({ product, cart, increaseQuantity, decreaseQuantity }) {
    function addQuantity() {
        increaseQuantity(product);
      }
      function reduceQuantity() {
        decreaseQuantity(product);
      }
    let quantity = cart[product.id] ? cart[product.id].quantity : 0;
    if (quantity > 0) {
        return (
          <div>
            <button onClick={reduceQuantity}>-</button>
            <span> {quantity} </span>
            <button onClick={addQuantity}>+</button>
          </div>
        );
      } else {
        return <button onClick={addQuantity}>AddToCart</button>;
      }
}

export default AddToCart;