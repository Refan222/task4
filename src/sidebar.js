import React, { useState } from "react";
import {
  FaHome, FaCog, FaChevronDown, FaChevronUp, FaGavel, FaRegIdCard, FaBars, FaTimes
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  const [Auctions, setAuctions] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* زر الهامبرقر يظهر فقط على الجوال */}
      <button className="mobile-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* السايد بار نفسه */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`} dir="rtl">
        <div className="sidebar-logo">
          <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="mazadatLogo" className="logo-image" />
        </div>

        <ul className="sidebar-menu">
          <li>
            <NavLink to="/" onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
              <FaHome className="icon" /> الرئيسية
            </NavLink>
          </li>

          <li onClick={() => setAuctions(!Auctions)} className="expandable">
            <FaGavel className="icon" /> المزادات
            <span className="chevron-icon">
              {Auctions ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </li>

          {Auctions && (
            <ul className="sub-menu">
              <li>
                <NavLink to="/auctions" onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
                  استعرض المزادات
                </NavLink>
              </li>
              <li>
                <NavLink to="/myAuctions" onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
                  مزاداتي
                </NavLink>
              </li>
            </ul>
          )}

          <li>
            <NavLink to="/cards" onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
              <FaRegIdCard className="icon" /> كروت المزايدة
            </NavLink>
          </li>

          <li>
            <NavLink to="/settings" onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
              <FaCog className="icon" /> الإعدادات
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;