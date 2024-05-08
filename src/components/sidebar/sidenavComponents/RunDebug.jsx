import React, { useState } from "react";
import {VscEllipsis} from 'react-icons/vsc';
import RunMenu from '../RunMenu';

const RunDebug = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };
  return (
    <div className="main-content">
      <div className="section-head">
        <p>RUN AND DEBUG:RUN</p>
        <button onClick={handleMenuClick} title="Views and More Actions..."><VscEllipsis/></button>
        {isMenuOpen && (
        <div className="explorer-menu-container">
          <RunMenu />
        </div>
      )}
      </div>
      <div className="section-content-B">
        <p >
          All debug extensions are disabled. Enable debug extension or install a
          new one from the Marketplace.
        </p>
        <p>
          Run and Debug are not available in the web editor. Continue in an
          environment that can run code, like a codespace or VS Code Desktop.
        </p>
      </div>
    </div>
  );
};

export default RunDebug;
