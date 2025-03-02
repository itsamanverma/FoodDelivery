import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Delicious Meals Delivered Fast</h2>
        <p>
          Craving something tasty? Discover a wide variety of dishes from your
          favorite local restaurants, delivered fresh and fast to your door.
          Order now and enjoy hassle-free delivery at your fingertips!
        </p>
        <button type="button">View Menu</button>
      </div>
    </div>
  );
};

export default Header;
