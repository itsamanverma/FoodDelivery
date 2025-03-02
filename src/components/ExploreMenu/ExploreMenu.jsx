import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore Our Delicious Menu</h1>
        <div className="explore-menu-text">
          Dive into our diverse menu, packed with mouth-watering dishes made to
          satisfy every craving. From comforting classics to bold new flavors,
          there’s something for everyone. Start exploring now and treat yourself
          to something amazing!
        </div>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => {
            return (
              <div onClick={() => setCategory(prev=>prev===item.menu_name?"ALL":item.menu_name)} key={index} className="explore-menu-list-item">
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" srcset="" />
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
