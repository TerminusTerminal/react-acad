import React, { useState } from "react";
import {
  SquareChevronUp, SquareChevronDown, Folder, FolderCheck, Grid2x2, Grid2x2Check, Search, Warehouse, Menu, Settings, User, UserCheck, Package, PackageCheck, List, SearchCheck
} from "lucide-react";
import "./App.css";

export const HomeComponent = ({ searchQuery }) => <p>🏠 Welcome to Home!</p>;
export const ProfileComponent = ({ searchQuery }) => <p>👤 This is your Profile.</p>;
export const SettingsComponent = ({ searchQuery }) => <p>⚙️ Adjust your Settings here.</p>;
export const InventoryComponent = ({ searchQuery }) => <p>📦 Inventory</p>;
export const StocksComponent = ({ searchQuery }) => <p>📦 Warehouse Stocks</p>;

const SidebarButton = ({ icon: Icon, label, onClick, isActive }) => (
  <button className={`sidebar-btn ${isActive ? "active" : ""}`} onClick={onClick}>
    <Icon size={26} />
  </button>
);

export default function App() {
  const [activePopup, setActivePopup] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const togglePopup = (name) => {
    setActivePopup((prev) => (prev === name ? null : name));
    setActiveDropdown(name); 
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="logo">
          <Warehouse />
        </div>
        <div className="topbutton-sdb">
          <SidebarButton icon={activePopup === "search" ? SearchCheck : Search} label="Search" onClick={() => togglePopup("search")} isActive={activePopup === "search"} />
          <SidebarButton icon={activePopup === "menu" ? List : Menu} label="Menu" onClick={() => togglePopup("menu")} isActive={activePopup === "menu"} />
          <SidebarButton icon={activePopup === "home" ? FolderCheck : Folder} label="Home" onClick={() => togglePopup("home")} isActive={activePopup === "home"} />
          <SidebarButton icon={activePopup === "inventory" ? PackageCheck : Package} label="Inventory" onClick={() => togglePopup("inventory")} isActive={activePopup === "inventory"} />
          <SidebarButton icon={activePopup === "stocks" ? Grid2x2Check : Grid2x2} label="Stocks" onClick={() => togglePopup("stocks")} isActive={activePopup === "stocks"} />
          <SidebarButton icon={activePopup === "profile" ? UserCheck : User} label="Profile" onClick={() => togglePopup("profile")} isActive={activePopup === "profile"} />
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

          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />

          <h2>{activePopup ? activePopup.toUpperCase() : ""}</h2>

          <div className="dropdown-container">
            <button className={`chevron-btn ${isDropdownOpen ? "rotated" : ""}`} onClick={toggleDropdown}>
              {isDropdownOpen ? <SquareChevronUp size={22} /> : <SquareChevronDown size={22} />}
            </button>
            <button className="dropdown-name" onClick={toggleDropdown}>
              {activeDropdown ? activeDropdown.toUpperCase() : "Select Option"}
            </button>
          </div>
          {/* Changable Dropdown Contents */}
          {isDropdownOpen && (
            <div className="dropdown-content">
              {activeDropdown === "home" && (
                <>
                  <button onClick={() => alert("🏠 Home Item 1")}>🏠 Home Item 1</button>
                  <button onClick={() => alert("🏠 Home Item 2")}>🏠 Home Item 2</button>
                </>
              )}
              {activeDropdown === "profile" && (
                <>
                  <button onClick={() => alert("👤 Profile Setting 1")}>👤 Profile Setting 1</button>
                  <button onClick={() => alert("👤 Profile Setting 2")}>👤 Profile Setting 2</button>
                </>
              )}
              {activeDropdown === "inventory" && (
                <>
                  <button onClick={() => alert("📦 Check Inventory")}>📦 Check Inventory</button>
                  <button onClick={() => alert("📦 Inventory Report")}>📦 Inventory Report</button>
                </>
              )}
              {activeDropdown === "settings" && (
                <>
                  <button onClick={() => alert("🔧 Change Password")}>🔧 Change Password</button>
                  <button onClick={() => alert("🔧 Privacy Settings")}>🔧 Privacy Settings</button>
                </>
              )}
              {activeDropdown === "stocks" && (
                <>
                  <button onClick={() => alert("📈 Stock Update")}>📈 Stock Update</button>
                  <button onClick={() => alert("📈 Stock Analysis")}>📈 Stock Analysis</button>
                </>
              )}
              {!["home", "profile", "inventory", "settings", "stocks"].includes(activeDropdown) && (
                <p className="dropdown-placeholder">No options available.</p>
              )}
            </div>
          )}

          {/* Display Components Based on Active Popup */}
          {activePopup === "home" && <HomeComponent searchQuery={searchQuery} />}
          {activePopup === "profile" && <ProfileComponent searchQuery={searchQuery} />}
          {activePopup === "inventory" && <InventoryComponent searchQuery={searchQuery} />}
          {activePopup === "settings" && <SettingsComponent searchQuery={searchQuery} />}
          {activePopup === "stocks" && <StocksComponent searchQuery={searchQuery} />}
        </div>
      </div>

      <div className="MainContentPage">
        <div className="TopContentPage">
          <section id="contents">
            <p>Differential Calculus</p>
            <p>></p>
            <p>Pre-Calculus</p>
            <p>></p>
            <p>Menu</p>
          </section>
          <section id="divider">
            <p>
              _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
            </p>
          </section>
        </div>
        <div className="MidContentPage">
          <section id="container1">
            <h2>"Random Quote"</h2>
          </section>
        </div>
      </div>
    </div>
  );
}

