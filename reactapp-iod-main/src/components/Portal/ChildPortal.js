// These two containers are siblings in the DOM
import React from "react";


function ChildPortal() {
  // The click event on this button will bubble up to parent,
  // because there is no 'onClick' attribute defined
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}

export default ChildPortal;