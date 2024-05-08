import React, { useState } from "react";
import CustomizedAccordions from './accordion';
import {VscEllipsis} from 'react-icons/vsc';
import ExplorerMenu from '../ExplorerMenu';

const Explorer = () => {
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
      <p>EXPLORER</p>
    <button onClick={handleMenuClick} title="Views and More Actions..."> <VscEllipsis /> </button> 
    </div>
    {isMenuOpen && (
        <div className="explorer-menu-container">
          <ExplorerMenu />
        </div>
      )}
    <div className="section-content">
    <CustomizedAccordions />
    </div>
  </div>;
};

export default Explorer;