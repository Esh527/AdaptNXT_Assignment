import React, { useState } from "react";
import "./index.css";

const SideBarComponent = () => {
  const [selected, setSelected] = useState("dashboard");

  return (
    <div className="sidebar">
      <ul>
        <li
          className={selected === "dashboard" ? "active" : ""}
          onClick={() => setSelected("dashboard")}
        >
          <i className="fas fa-tachometer-alt"></i> Dashboard
        </li>
        <li
          className={selected === "inventory" ? "active" : ""}
          onClick={() => setSelected("inventory")}
        >
          <i className="fas fa-warehouse"></i> Inventory
        </li>
        <li
          className={selected === "orders" ? "active" : ""}
          onClick={() => setSelected("orders")}
        >
          <i className="fas fa-shopping-cart"></i> Orders
        </li>
        <li
          className={selected === "shipping" ? "active" : ""}
          onClick={() => setSelected("shipping")}
        >
          <i className="fas fa-truck"></i> Shipping
        </li>
        <li
          className={selected === "channel" ? "active" : ""}
          onClick={() => setSelected("channel")}
        >
          <i className="fas fa-globe"></i> Channel
        </li>
      </ul>
    </div>
  );
};

export default SideBarComponent;

// import  './index.css'

// const SideBarComponent =()=>{
//     return (
//         <aside className="sidebar">
//           <ul className="sidebar-menu">
//             <li>Link 1</li>
//             <li>Link 2</li>
//             <li>Link 3</li>
//             <li>Link 4</li>
//           </ul>
//         </aside>
//       );
// }
// export default SideBarComponent