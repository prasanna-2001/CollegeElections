import React, { useState, useEffect } from "react";


const LeftPostMenu = () => {
  
  return (
    <div class="LeftpostMenu" style={{ position: "absolute", left: 0 }}>
      <div className="brandName" >
        Posts
      </div>
      <nav className="postlist">
        <ul type="none">
          <a href="#president">
            <li class="borderBottom">
            President
            </li>
          </a>
          <a href="#vicepresident">
            <li class="borderBottom">
             vice President
            </li>
          </a>
          <a href="#rsecretary">
            <li class="borderBottom">
              Secretary
            </li>
          </a>
          <a href="#jointsecretary">
            <li class="borderBottom">
            joint Secretary 
            </li>
          </a>
        </ul>
      </nav>
    </div>

  );
};

export default LeftPostMenu;