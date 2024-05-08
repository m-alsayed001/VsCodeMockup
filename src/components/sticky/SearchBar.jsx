import React from 'react';
import './StickyHeader.css';
import { VscArrowLeft,VscArrowRight } from "react-icons/vsc";

const StickyHeader = () => {
  return (
    <div className="sticky-header">
        <div className="buttons-container-S">
        <button className="button" title='Go back'><VscArrowLeft /></button>
        <button className="button" title='Go forward'><VscArrowRight /></button>
      </div>
      <input type="text" placeholder="WorkSpace" className="search-bar" title='Search Workspace'/>
    </div>
  );
};

export default StickyHeader;