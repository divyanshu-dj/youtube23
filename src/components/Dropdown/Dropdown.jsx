import React, { useState } from 'react';

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onBlur={closeDropdown}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Open Dropdown
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
