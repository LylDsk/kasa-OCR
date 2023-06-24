import React, { useState } from "react";
import Arrow from "../assets/arrow.png";
const Collapsible = (data) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div className="one-collapse">
      <h3 className="case-title" onClick={toggle}>
        {data.label}
        <img
          src={Arrow}
          alt="Arrow"
          style={{ transform: open ? "rotate(0deg)" : "rotate(180deg)" }}
        />
      </h3>
      {open && (
        <div className="case-hidden">
          <p className="text-hidden">{data.data}</p>
        </div>
      )}
    </div>
  );
};
export default Collapsible;
