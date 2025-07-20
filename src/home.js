import React, { useState } from "react";
import "./home.css";
import {FaGavel,FaTrophy,FaClock,FaFileAlt,FaCar,FaEllipsisV,} from "react-icons/fa";

function Home() {
  const [selectedTab, setSelectedTab] = useState("مشارك بها");

  function table() {
    return (
      <table className="auction-table">
        <thead>
          <tr>
            <th>رقم المزاد</th>
            <th>رقم الهيكل</th>
            <th>اللوحة</th>
            <th>إعلان المزاد</th>
            <th>إقامة المزاد</th>
            <th>الحالة</th>
            <th>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
                <tr>
                  <td>123456789</td>
                  <td>KJ123456789</td>
                  <td>د ح و 1234</td>
                  <td>1/1/2025</td>
                  <td>1/1/2025</td>
                  <td className="status">بانتظار الدفع</td>
                  <td>
                    <FaEllipsisV />
                  </td>
                </tr>
                 <tr>
                  <td>123456789</td>
                  <td>KJ123456789</td>
                  <td>د ح و 1234</td>
                  <td>1/1/2025</td>
                  <td>1/1/2025</td>
                  <td className="status">بانتظار الدفع</td>
                  <td>
                    <FaEllipsisV />
                  </td>
                </tr>
                 <tr>
                  <td>123456789</td>
                  <td>KJ123456789</td>
                  <td>د ح و 1234</td>
                  <td>1/1/2025</td>
                  <td>1/1/2025</td>
                  <td className="status">بانتظار الدفع</td>
                  <td>
                    <FaEllipsisV />
                  </td>
                </tr>
              
        </tbody>
      </table>
    );
  }

  return (
    <div className="home" dir="rtl">
      <div className="header">
        <h2>الرئيسية</h2>
        <button className="button">إنشاء مزاد جديد</button>
      </div>

      <div className="welcome">
        <img src="/car.jpg" alt="car" />
        <div className="welcome-text">
          <h3>مرحبًا بك في لوحة التحكم</h3>
          <p>اكتشف مزاداتك بكل سهولة</p>
        </div>
      </div>

      <div className="section">
        <h3>أرقام المزادات</h3>
        <div className="auctions">
          <div className="box">
            <FaGavel className="icon" />
            <span>15 مزادات مشارك فيها</span>
            <span className="percent green">+20%</span>
          </div>
          <div className="box">
            <FaTrophy className="icon" />
            <span>8 مزادات فائز بها</span>
            <span className="percent red">-10%</span>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>المهام المعلقة</h3>
        <div className="tasks-boxes">
          <div className="task-box">
            <FaClock className="icon" />
            <div>
              <p>4 مركبات بانتظار الدفع</p>
              <a href="home">اتخاذ إجراء</a>
            </div>
          </div>
          <div className="task-box">
            <FaFileAlt className="icon" />
            <div>
              <p>4 مستحقات بانتظار الدفع</p>
              <a href="home">اتخاذ إجراء</a>
            </div>
          </div>
          <div className="task-box">
            <FaCar className="icon" />
            <div>
              <p>4 مركبات بانتظار نقل الملكية</p>
              <a href="home">اتخاذ إجراء</a>
            </div>
          </div>
        </div>
        <div className="view-all">
          <a href="all">عرض الكل</a> <span>&larr;</span>
        </div>
      </div>

      <div className="section">
        <h3>مزاداتي</h3>
        <div className="home-tabs">
  <span
    className={selectedTab === "مشارك بها" ? "active-tab" : ""}
    onClick={() => setSelectedTab("مشارك بها")}>
    مشارك بها
  </span>
  <span
    className={selectedTab === "فائز بها" ? "active-tab" : ""}
    onClick={() => setSelectedTab("فائز بها")}>
    فائز بها
  </span>
</div>
        {table()}
      </div>
    </div>
  );
}

export default Home;