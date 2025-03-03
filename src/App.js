import React, { useState } from "react";
import { ChartColumnBig, Search, Warehouse, Menu, Home, Settings, User } from "lucide-react";
import "./App.css";

const SidebarButton = ({ icon: Icon, label, onClick }) => (
  <button className="sidebar-btn" onClick={onClick}>
    <Icon size={26} />
  </button>
);

export default function App() {
  const [activePopup, setActivePopup] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

  const HomeComponent = () => <p>🏠 Welcome to Home!</p>;
  const ProfileComponent = () => <p>👤 This is your Profile.</p>;
  const SettingsComponent = () => <p>⚙️ Adjust your Settings here.</p>;
  const StocksComponent = () => <p>Warehouse Stocks</p>;

  const togglePopup = (name) => {
    setActivePopup(activePopup === name ? null : name);
  };
  
  return (
    <div className="app">
      <div className="sidebar">
        <div className="logo">
          <Warehouse />
        </div>
        <div className="topbutton-sdb">
          <SidebarButton icon={Search} label="Search" onClick={() => togglePopup("search")} />
          <SidebarButton icon={Menu} label="Menu" onClick={() => togglePopup("menu")} />
          <SidebarButton icon={Home} label="Home" onClick={() => togglePopup("home")} />
          <SidebarButton icon={ChartColumnBig} label="Stocks" onClick={() => togglePopup("stocks")} />
          <SidebarButton icon={User} label="Profile" onClick={() => togglePopup("profile")} />
        </div>
        <div className="bottomsidebar">
          <SidebarButton icon={Settings} label="Settings" onClick={() => togglePopup("settings")} />
        </div>
      </div>

      <div className={`popup ${activePopup ? "active" : ""}`}>
        <button className="close-btn" onClick={() => setActivePopup(null)}>
          ×
        </button>
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
          <h3>{activePopup ? activePopup.toUpperCase() : ""}</h3>
            {activePopup === "home" && <HomeComponent searchQuery={searchQuery} />}
            {activePopup === "profile" && <ProfileComponent searchQuery={searchQuery} />}
            {activePopup === "settings" && <SettingsComponent searchQuery={searchQuery} />}
            {activePopup === "stocks" && <StocksComponent searchQuery={searchQuery} />}
        </div>
      </div>

      <div className="MainContentPage">
        <div className="TopContentPage">
          <section id="contents">
            <p>Differential Calculus</p>
            <p>Pre-Calculus</p>
          </section>
          <section id="divider">
            <p>______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</p>
          </section>
        </div>
      </div>
    </div>
  );
};

