import React, { useState } from "react";
import './Extension.css'
import ExtensionAccordion from './ExtensionAccordion'
import {VscFilter,VscRefresh,VscListSelection,VscEllipsis} from "react-icons/vsc";
import ExtensionMenu from '../ExtensionMenu';

const Extension = () => {
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
        <p>EXTENSIONS</p>
        <div className='buttons'>
        <button><VscFilter/></button>
        <button><VscRefresh/></button>
        <button><VscListSelection/></button>
        <button onClick={handleMenuClick} title="Views and More Actions..."><VscEllipsis/></button>
        </div>
        {isMenuOpen && (
        <div className="explorer-menu-container">
          <ExtensionMenu />
        </div>
      )}
      </div>
      <input type="text" placeholder="Search Extension in Marketplace" className='search-box' />
      <div className="section-content">
        <ExtensionAccordion />
      </div>
  </div>;
};

export default Extension;