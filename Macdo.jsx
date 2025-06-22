import React from 'react';

const mcdonaldsMenuItems = [
  {
    name: "McAloo Tikki Burger",
    price: "₹59",
    rating: 4.3,
  },
  {
    name: "McChicken Burger",
    price: "₹129",
    rating: 4.5,
  },
  {
    name: "Fries (Medium)",
    price: "₹105",
    rating: 4.4,
  },
  {
    name: "McVeggie Burger",
    price: "₹119",
    rating: 4.2,
  },
  {
    name: "Coke (500ml)",
    price: "₹60",
    rating: 4.1,
  },
  {
    name: "Soft Serve (Vanilla)",
    price: "₹30",
    rating: 4.6,
  },
];

const McDonaldsMenu = () => {
  return (
    <div className="menu-container">
      <h1 className="menu-title">McDonald's Menu</h1>
      <div className="menu-grid">
        {mcdonaldsMenuItems.map((item, index) => (
          <div key={index} className="menu-card">
            <h2 className="item-name">{item.name}</h2>
            <p className="item-price">Price: {item.price}</p>
            <p className="item-rating">Rating: {item.rating} ⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default McDonaldsMenu;
