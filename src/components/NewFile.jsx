import React, { useState } from "react";
import { VscListFlat, VscChromeClose } from "react-icons/vsc";
import './NewFile.css';

const NewFile = () => {
  const [isComponentVisible, setComponentVisible] = useState(true);

  const handleDelete = () => {
    setComponentVisible(false);
  };


  return (
    <div className="main-page">
      <div className="main-page-Header">
        {isComponentVisible && (
          <div>
            <div className="welcome-bar">
              <div className="welcome-tag-holder">
                <div className="welcome-tag">
                  <p>
                    <VscListFlat className="brand-icon" />
                    NewFile
                  </p>
                  <button onClick={handleDelete} title="Close">
                    <VscChromeClose />
                  </button>
                </div>
              </div>
              <div className="welcome-bar1">
                <p> </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="main-page-content">

        </div>
      </div>
  );
};

export default NewFile;