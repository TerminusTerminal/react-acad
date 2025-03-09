import React, { useState } from "react";
import {
  SquareChevronUp, SquareChevronDown, Folder, FolderCheck, Grid2x2, Grid2x2Check, Search, SearchCheck, Warehouse, MailPlus, MailMinus, Menu, List,  Home, Settings, User, UserCheck, Package, PackageCheck
} from "lucide-react";
import "./App.css";

// Components for pages (edit here for further refinement of the middle page content...)
const HomePage = () => <p>🏠 This is the Home Page.</p>;
const ProfilePage = () => <p>👤 This is the Profile Page.</p>;
const InventoryPage = () => <p>📦 This is the Inventory Page.</p>;
const SettingsPage = () => <p>⚙️ Settings Configuration.</p>;
const StocksPage = () => <p>📈 Warehouse Stock Management.</p>;
const DefaultPage = () => <p>📃 Please select an option.</p>;
const MailPage = () => 
<div className="MailPager">
<p> Mail Page. </p>
</div>;

const SidebarButton = ({ icon: Icon, label, onClick, isActive }) => (
  <button className={`sidebar-btn ${isActive ? "active" : ""}`} onClick={onClick}>
    <Icon size={26} />
  </button>
);

export default function App() {
  const [activePopup, setActivePopup] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedPage, setSelectedPage] = useState(null); // Track current page from component pages

  const togglePopup = (name) => {
    setActivePopup((prev) => (prev === name ? null : name));
    setActiveDropdown(name);
    setSelectedPage(null); // Reset page when switching dropdown categories
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownSelect = (page) => {
    setSelectedPage(page);
    setIsDropdownOpen(false);
  };

  // selected page for components
  const renderPageContent = () => {
    switch (selectedPage) {
      case "Home Item 1":
      case "Home Item 2":
        return <HomePage />;
      case "Profile Setting 1":
      case "Profile Setting 2":
        return <ProfilePage />;
      case "Check Inventory":
      case "Inventory Report":
        return <InventoryPage />;
      case "Change Password":
      case "Privacy Settings":
        return <SettingsPage />;
      case "Stock Update":
      case "Stock Analysis":
        return <StocksPage />;
      case "Mails":
      case "Mailed":
        return <MailPage />;
      default:
        return <DefaultPage />;
    }
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="logo">
          <Warehouse />
        </div>
        <div className="topbutton-sdb">
          <SidebarButton icon={activePopup === "search" ? SearchCheck : Search} label="Search" onClick={() => togglePopup("search")} isActive={activePopup === "search"} />
          <SidebarButton icon={activePopup === "category" ? List : Menu} label="Categories" onClick={() => togglePopup("category")} isActive={activePopup === "category"} />
          <SidebarButton icon={activePopup === "home" ? FolderCheck : Folder} label="Home" onClick={() => togglePopup("home")} isActive={activePopup === "home"} />
          <SidebarButton icon={activePopup === "inventory" ? PackageCheck : Package} label="Inventory" onClick={() => togglePopup("inventory")} isActive={activePopup === "inventory"} />
          <SidebarButton icon={activePopup === "stocks" ? Grid2x2Check : Grid2x2} label="Stocks" onClick={() => togglePopup("stocks")} isActive={activePopup === "stocks"} />
          <SidebarButton icon={activePopup === "profile" ? UserCheck : User} label="Profile" onClick={() => togglePopup("profile")} isActive={activePopup === "profile"} />
          <SidebarButton icon={activePopup === "mail" ? MailMinus : MailPlus} label="Mail" onClick={() => togglePopup("mail")} isActive={activePopup === "mail"} />
        </div>
        <div className="bottomsidebar">
          <SidebarButton icon={Settings} label="Settings" onClick={() => togglePopup("settings")} isActive={activePopup === "settings"} />
        </div>
      </div>

      <div className={`popup ${activePopup ? "active" : ""}`}>
        <button className="close-btn" onClick={() => setActivePopup(null)}>×</button>
        <div className="popup-content">
          <div className="logoname">
            <h2>Warehouse</h2>
          </div>

          <h2>{activePopup ? activePopup.toUpperCase() : ""}</h2>

          <div className="dropdown-container">
            <button className={`chevron-btn ${isDropdownOpen ? "rotated" : ""}`} onClick={toggleDropdown}>
              {isDropdownOpen ? <SquareChevronUp size={22} /> : <SquareChevronDown size={22} />}
            </button>
            <button className="dropdown-name" onClick={toggleDropdown}>
              {selectedPage || "Select Option"}
            </button>
          </div>

          {isDropdownOpen && (
            <div className="dropdown-content">
              {activeDropdown === "home" && (
                <>
                  <button onClick={() => handleDropdownSelect("Home Item 1")}>🏠 Home Item 1</button>
                  <button onClick={() => handleDropdownSelect("Home Item 2")}>🏠 Home Item 2</button>
                </>
              )}
              {activeDropdown === "profile" && (
                <>
                  <button onClick={() => handleDropdownSelect("Profile Setting 1")}>👤 Profile Setting 1</button>
                  <button onClick={() => handleDropdownSelect("Profile Setting 2")}>👤 Profile Setting 2</button>
                </>
              )}
              {activeDropdown === "inventory" && (
                <>
                  <button onClick={() => handleDropdownSelect("Check Inventory")}>📦 Check Inventory</button>
                  <button onClick={() => handleDropdownSelect("Inventory Report")}>📦 Inventory Report</button>
                </>
              )}
              {activeDropdown === "settings" && (
                <>
                  <button onClick={() => handleDropdownSelect("Change Password")}>🔧 Change Password</button>
                  <button onClick={() => handleDropdownSelect("Privacy Settings")}>🔧 Privacy Settings</button>
                </>
              )}
              {activeDropdown === "stocks" && (
                <>
                  <button onClick={() => handleDropdownSelect("Stock Update")}>📈 Stock Update</button>
                  <button onClick={() => handleDropdownSelect("Stock Analysis")}>📈 Stock Analysis</button>
                </>
              )}
              {activeDropdown === "mail" && (
                <>
                <button onClick={() => handleDropdownSelect("Mails")}>Mails</button>
                <button onClick={() => handleDropdownSelect("Mailed")}>Mailed</button>
                </>
              )}
              {!["home", "profile", "inventory", "settings", "stocks", "mail",].includes(activeDropdown) && (
                <p className="dropdown-placeholder">No options available.</p>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="MainContentPage">
        <div className="TopContentPage">
          <section id="contents">
            <p>{selectedPage || "Menu"}</p>
            <p>></p>
            <p>Differential Calculus</p>
            <p>></p>
            <p>Pre-Calculus</p>
          </section>
          <section id="divider">
            <p>
              ________________________________________________________________________________________
            </p>
          </section>
        </div>
        <div className="MidContentPage">
          <section id="container1">
            {renderPageContent()}
          </section>
        </div>
      </div>
    </div>
  );
}
