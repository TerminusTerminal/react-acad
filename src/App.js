import React, { useState } from "react";
import { ChartColumnBig, Search, Warehouse, Menu, Home, Settings, User } from "lucide-react";
import "./App.css";
import Portal from "./portal/Portal";

const SidebarButton = ({ icon: Icon, label, onClick }) => (
  <button className="sidebar-btn" onClick={onClick}>
    <Icon size={26} />
  </button>
);

const WarehouseMS = () => {
  const [activeSection1, setActiveSection1] = useState(null);

  const toggleSection1 = (section1) => {
    setActiveSection1(activeSection1 === section1 ? null : section1);
    }
  };

export default function App() {
  const [activePopup, setActivePopup] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

  const HomeComponent = () => <p>🏠 Welcome to Home!</p>;
  const ProfileComponent = () => <p>👤 This is your Profile.</p>;
  const SettingsComponent = () => <p>⚙️ Adjust your Settings here.</p>;
  const StocksComponent = () => <p>Warehouse Stocks</p>;

  const [isOpen, setIsOpen] = useState(false);

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

          <h2>{activePopup ? activePopup.toUpperCase() : ""}</h2>
          {/*add any content here :P*/}
          <button onClick={() => setIsOpen(!isOpen)}>togglePortal</button>
          {isOpen && (
            <div>
              <Portal containerId={new Date().getTime}>
                <p>Portal 1</p>
              </Portal>
            </div>
          )}
          <p>Some description or text here.</p>
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
            <p>></p>
            <p>Pre-Calculus</p>
            <p>></p>
            <p>Menu</p>
          </section>
          <section id="divider">
            <p>_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</p>
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
};

