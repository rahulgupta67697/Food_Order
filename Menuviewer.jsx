import React, { useEffect, useState } from "react";

export const MenuViewer = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const rawData = localStorage.getItem("kfcMenu");
    if (rawData) {
      const parsed = JSON.parse(rawData);
      setMenuData(parsed);
    }
  }, []);

  return (
    <div>
      <h2>Restaurants From Saved KFC Menu</h2>
      <div className="container-1">
        {menuData.length === 0 ? (
          <p>Loading or No Data Found</p>
        ) : (
          menuData.map((res) => (
            <div key={res.id} className="res-card">
              <h3>{res.name}</h3>
              <p>⭐ {res.rating}</p>
              <p>{res.locality}</p>
              <p>{Array.isArray(res.cuisines) ? res.cuisines.join(", ") : res.cuisines}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
