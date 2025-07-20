import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Home from "./home";
import Auctions from "./auctions";
import MyAuctions from "./myAuctions";
import Cards from "./cards";
import Settings from "./settings";
import CarDetails from "./carDetails";
import Messages from "./messages";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="app" dir="rtl">
        <Navbar />
        <div className="layout">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auctions" element={<Auctions />} />
              <Route path="/myAuctions" element={<MyAuctions />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/carDetails" element={<CarDetails />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;