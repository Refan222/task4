import React from "react";
import "./footer.css";
import {FaComments,FaPhoneAlt,FaEnvelope,FaHeadphones,FaUniversalAccess,FaAdjust,} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" dir="rtl">
      <div className="footer-top">
        <a href="/home">الرئيسية</a>
        <a href="/about">عن مزادات</a>
        <a href="/services">الخدمات</a>
        <a href="/question">الأسئلة الشائعة</a>

      <div className="footer-icons">
        <span>أدوات الراحة</span>
        <div className="icon-group">
        <FaHeadphones />
        <FaUniversalAccess />
        <FaAdjust />
  </div>
</div>

<div className="footer-icons">
  <span>تواصل معنا</span>
  <div className="icon-group">
    <FaComments />
    <FaPhoneAlt />
    <FaEnvelope />
  </div>
</div>
      </div>
<hr />
  
      <div className="bottom">
        <div className="copy">
          <p>جميع الحقوق محفوظة لشركة علم © 2024</p>
          <div className="copy-links">
            <a href="/terms">الشروط والأحكام</a>
            <span>|</span>
            <a href="/privacy">سياسة الخصوصية</a>
          </div>
        </div>
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/logo2.jpg`} alt=" logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;