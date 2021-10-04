import React, { useState, useEffect } from "react";


const LeftpostMenu = () => {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    setActiveSection(document.location.hash);
  }, []);
  return (
    <div className="LeftpostMenu" style={{ position: "", left: 0 }}>
      <div className="brandName" >
        Posts
      </div>
      <nav className="postlist">
        <ul type="none">
          <a href="#president">
            <li
            className={activeSection === "#about" ? "activeSection" : null}
              onClick={() => setActiveSection("#about")}>
            President
            </li>
          </a>
          <a href="#vicepresident">
            <li
            className={activeSection === "#about" ? "activeSection" : null}
              onClick={() => setActiveSection("#about")}>
             vice President
            </li>
          </a>
          <a href="#secretary">
            <li
            className={activeSection === "#about" ? "activeSection" : null}
              onClick={() => setActiveSection("#about")}>
              Secretary
            </li>
          </a>
          <a href="#jointsecretary">
            <li
            className={activeSection === "#about" ? "activeSection" : null}
              onClick={() => setActiveSection("#about")}>
            joint Secretary 
            </li>
          </a>
        </ul>
      </nav>
    </div>

  );
};

export default LeftpostMenu;