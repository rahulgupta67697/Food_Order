
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../store/cartSlice';


const Cart = () => {
  const { items, total } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map((item, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              {item.name} - {item.price}
              <button onClick={() => dispatch(removeFromCart(item))} style={{ marginLeft: "10px" }}>
                Remove
              </button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
