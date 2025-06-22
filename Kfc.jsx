import React from 'react';
import { useDispatch } from 'react-redux';



const kfcMenuItems = [
  { name: "Zinger Burger", price: "₹129", rating: 4.5 },
  { name: "Chicken Bucket", price: "₹499", rating: 4.7 },
  { name: "Krusher", price: "₹89", rating: 4.2 },
  { name: "Hot Wings (4 pcs)", price: "₹149", rating: 4.4 },
  { name: "Popcorn Chicken", price: "₹199", rating: 4.6 },
  { name: "Peri Peri Chicken", price: "₹249", rating: 4.3 },
];

const KfcMenu = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="menu-container">
      <h1>KFC Menu</h1>
      <div className="menu-grid">
        {kfcMenuItems.map((item, index) => (
          <div key={index} className="menu-card">
            <h2>{item.name}</h2>
            <p>Price: {item.price}</p>
            <p>Rating: {item.rating} ⭐</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KfcMenu;
