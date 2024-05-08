import React, { useState } from "react";
import { VscChevronDown } from "react-icons/vsc";
import "./RemoteExplorer.css";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="toggle-container">
        <span className="dropdown-toggle" onClick={handleToggle}>
          <span className="dropdowwn-content">
            Remotes (tunnels/) <VscChevronDown />
          </span>
        </span>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <a href="#" className="dropdown-item">
            Github Codespaces
          </a>
          <a href="#" className="dropdown-item">
            Remotes (tunnels/ssh)
          </a>
          <a href="#" className="dropdown-item">
            Remote Repositories
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
