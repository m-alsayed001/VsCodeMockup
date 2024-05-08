import { VscEllipsis } from "react-icons/vsc";
import './RemoteExplorer.css';
import Dropdown from './dropdown';
import RemoteAccordion from './RemoteAccordion'
import React, { useState } from "react";
import RemoteMenu from '../remoteMenu';

const Rexplorer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };
  return <div className='main-content'>
          <div className="section-head">
        <p>REMOTE EXPLORER</p>
        <Dropdown />
        <button onClick={handleMenuClick} title="Views and More Actions..."><VscEllipsis/></button>
      </div>
      {isMenuOpen && (
        <div className="explorer-menu-container">
          <RemoteMenu />
        </div>
      )}
      <div className="section-content">
      <RemoteAccordion />
    </div>
  </div>;
};

export default Rexplorer;