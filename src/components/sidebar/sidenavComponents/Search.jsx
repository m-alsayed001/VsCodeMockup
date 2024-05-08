import React, { useState } from "react";
import { VscChevronRight,VscEllipsis } from "react-icons/vsc";
import {VscNewFile,VscRefresh,VscListSelection,VscExpandAll,VscListTree} from "react-icons/vsc";
import './search.css';

const Search = () => {
  const [isSearch2Visible, setIsSearch2Visible] = useState(false);
  const [isSearch34Visible, setIsSearch34Visible] = useState(false);
  const toggleSearch2 = () => {
    setIsSearch2Visible(!isSearch2Visible);
  };

  const toggleSearch34 = () => {
    setIsSearch34Visible(!isSearch34Visible);
  };

  return (
    <div className="main-content">
      <div className="section-head">
        <p>SEARCH</p>
        <div className='buttons'>
        <button><VscRefresh /></button>
        <button><VscListSelection /></button>
        <button><VscNewFile /></button>
        <button><VscListTree/></button>
        <button><VscExpandAll/></button>
        </div>
      </div>
      <div className="section-content">
        <div className="Search-Container">
        <button className="search2-icon" onClick={toggleSearch2}>
              <VscChevronRight/>
            </button>
          <input type="text" placeholder="Search" className='search-box1' />
          </div>
          <div className="search2-container">
            {isSearch2Visible && (
              <input type="text" placeholder="Replace" className='search-box2' />
            )}
          </div>
          <button className="three-dots" onClick={toggleSearch34}><VscEllipsis /></button>
          {isSearch34Visible && (
            <div >
              <p style={{fontSize:'12px'}}>files to include</p>
              <input type="text"  className='search-box2' />
              <p style={{fontSize:'12px'}}>files to exclude</p>
              <input type="text"  className='search-box2' />
              </div>
            )}
      </div>
    </div>
  );
};

export default Search;