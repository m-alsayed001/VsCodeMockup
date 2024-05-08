import React, { useState } from "react";
import {
  VscGear,
  VscRemoteExplorer,
  VscExtensions,
  VscDebugAlt,
  VscSourceControl,
  VscSearch,
  VscMenu,
  VscFiles,
  VscAccount,
} from "react-icons/vsc";
import Explorer from "./sidenavComponents/Explorer";
import Search from "./sidenavComponents/Search";
import SourceControl from "./sidenavComponents/SourceControl";
import RunDebug from "./sidenavComponents/RunDebug";
import Extension from "./sidenavComponents/Extension";
import RemoteExplorer from "./sidenavComponents/RemoteExplorer";
import Menu from "./menu";
import "./sidenav.css";
import MainPage from "../mainPage";
import AccountMenu from './accountMenu'
import SettingsMenu from "./settingsMenu";

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const handleAccountMenuClick = () => {
    if (isAccountMenuOpen) {
      setIsAccountMenuOpen(false);
    } else {
      setIsAccountMenuOpen(true);
    }
  };

  const [isSetMenuOpen, setIsSetMenuOpen] = useState(false);
  const handleSetMenuClick = () => {
    if (isSetMenuOpen) {
      setIsSetMenuOpen(false);
    } else {
      setIsSetMenuOpen(true);
    }
  };

  const handleButtonClick = (buttonIndex) => {
    setActiveButton((prevButtonIndex) =>
      prevButtonIndex === buttonIndex ? null : buttonIndex
    );
  };

  const renderComponent = () => {
    switch (activeButton) {
      case 1:
        return <Explorer />;
      case 2:
        return <Search />;
      case 3:
        return <SourceControl />;
      case 4:
        return <RunDebug />;
      case 5:
        return <Extension />;
      case 6:
        return <RemoteExplorer />;
      default:
        return null;
    }
  };

  return (
    <div className="section-1">
      <div className="sidebar">
        <button onClick={handleMenuClick} className="menu">  
          <VscMenu /> {isMenuOpen && <Menu />}
        </button>
        <button
          onClick={() => handleButtonClick(1)}
          className={activeButton === 1 ? "active" : ""}
          title="Explorer">
          <VscFiles />
        </button>
        <button
          onClick={() => handleButtonClick(2)}
          className={activeButton === 2 ? "active" : ""}
          title="Search"
        >
          <VscSearch />
        </button>
        <button
          onClick={() => handleButtonClick(3)}
          className={activeButton === 3 ? "active" : ""}
          title="SourceControl"
        >
          <VscSourceControl />
        </button>
        <button
          onClick={() => handleButtonClick(4)}
          className={activeButton === 4 ? "active" : ""}
          title="Run and Debug"
        >
          <VscDebugAlt />
        </button>
        <button
          onClick={() => handleButtonClick(5)}
          className={activeButton === 5 ? "active" : ""}
          title="Extensions"
        >
          <VscExtensions />
        </button>
        <button
          onClick={() => handleButtonClick(6)}
          className={activeButton === 6 ? "active" : ""}
          title="RemoteExplorer"
        >
          <VscRemoteExplorer />
        </button>
        <button onClick={handleAccountMenuClick} className="account" title="Accounts - Sign in requested">
          <VscAccount /> {isAccountMenuOpen && <AccountMenu />}
        </button>
        <button onClick={handleSetMenuClick} className="gear" title="Manage">
          <VscGear /> {isSetMenuOpen && <SettingsMenu />}
        </button>
      </div>
      <div>{renderComponent()}</div>
      <MainPage />
    </div>
  );
};

export default Sidebar;
