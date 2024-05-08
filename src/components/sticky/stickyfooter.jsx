import React from "react";
import { VscRemote, VscError, VscWarning, VscBell, VscFeedback } from "react-icons/vsc";
import './StickyFooter.css';

const StickyFooter = () => {
  return (
    <div className="footer">
      <div className="left-buttons">
        <button className="button footer-remote" title="Open a Remote Window">
          <VscRemote />
        </button>
        <button className="button footer-error" title="No Problems">
          <VscError className="footer-error-icon" />0<VscWarning className="footer-error-icon" />0
        </button>
      </div>
      <div className="right-buttons">
        <button className="button footer-layout">Layout: US</button>
        <button className="button footer-bell" title="Notifications">
          <VscBell />
        </button>
      </div>
    </div>
  );
};

export default StickyFooter;