import React, { useState } from "react";
import "./mainPage.css";
import "./Welcomepage.css";
import {
  VscNewFile,
  VscSourceControl,
  VscRemote,
  VscGoToFile,
  VscFolderOpened,
  VscChecklist,
} from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import { TbBrandVscode } from "react-icons/tb";
import NewFile from "./NewFile";

const MainPage = () => {
  const [isComponentVisible, setComponentVisible] = useState(true);
  const [showNewFileComponent, setShowNewFileComponent] = useState(false);

  const handleDelete = () => {
    setComponentVisible(false);
  };

  const handleClick = () => {
    setComponentVisible(false);
    setShowNewFileComponent(true);
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
                    <TbBrandVscode className="brand-icon" />
                    Welcome
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
            <div className="welcome-page">
      <div className="container">
        <div className="section">
          <p>Start</p>
          <ul>
            <li>
              <a className="section-link" href="#" title="Open a new untiteled text file"  onClick={handleClick}>
                <VscNewFile className="link-icon"/> New File...
              </a>
            </li>
            <li>
              <a className="section-link" href="#" title="Open a file to start working">
                <VscGoToFile className="link-icon" /> Open File...
              </a>
            </li>
            <li>
              <a className="section-link" href="#" title="Open a folder to start working">
                <VscFolderOpened className="link-icon" /> Open Folder...
              </a>
            </li>
            <li>
              <a className="section-link" href="#" title="Connect to a remote repository">
                <VscSourceControl className="link-icon" /> Open Repository...
              </a>
            </li>
            <li>
              <a className="section-link" href="#" title="View a walkthrough on the editor or an extension">
                <VscChecklist className="link-icon" /> Open a Walkthrough...
              </a>
            </li>
            <li>
              <a className="section-link" href="#" title="Connect to a remote machine through a Tunnel">
                <VscRemote className="link-icon" /> Open Tunnel...
              </a>
            </li>
          </ul>
        </div>
        <div className="section-2">
          <p>Recent</p>
          <p className="section2-p">
            You have no recent folders ,
            <a className="section-link" href="#">
              open a folder
            </a>{" "}
            to start.
          </p>
        </div>
      </div>
    </div>
          </div>
        )}
      </div>
      <div className="main-page-content">
      {showNewFileComponent && <NewFile />}
      </div>
    </div>
  );
};

export default MainPage;
