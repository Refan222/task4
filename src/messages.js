import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import {FaHeart,FaShareAlt,FaExpand,FaFileAlt,FaDollarSign,FaGavel,FaBullhorn,FaTrophy} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./messages.css";

function Messages() {
  const [winMessage, setWinMessage] = useState(false);
  const [popup, setPopup] = useState(false); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setWinMessage(true);
    }, 5000); 

    const timer2 = setTimeout(() => {
      setPopup(true); 
    }, 10000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleConfirm = () => {
    navigate("/carDetails"); 
  };

  return (
    <div className="car-details-page" dir="rtl">
      <div className="car-images">
        <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
          <img src={`${process.env.PUBLIC_URL}/bmw.jpg`} alt="السيارة 1" className="main-image" />
          <img src={`${process.env.PUBLIC_URL}/bmw3.jpg`} alt="السيارة 2" className="main-image" />
        </Slider>
        <div className="top-icons">
          <FaHeart className="icon" />
          <FaShareAlt className="icon" />
        </div>
        <div className="bottom-icon">
          <FaExpand className="icon" />
        </div>
      </div>

      
      <div className="car-title-section">
        <h2 className="car-name">بي ام دبليو 2024</h2>
        <div className="seller-info">
          <span className="seller-icon">ع</span>
          <div>
            <p>عبداللطيف جميل</p>
          </div>
        </div>
      </div>

      {winMessage ? (
        <div className="win-box">
          <FaTrophy className="trophy-icon" />
          <h3>🎉 مبروك!  انت الفائز</h3>
          <p>( مزاداتي ) ضمن ( المزادات المشاركة ) . نحن الان بانتظار قرار التسوية من قبل البائع. سيتم اشعارك عبر رسالة نصية كما يمكنك متابعتها من خلال صفحة</p>
          <button>عرض التفاصيل</button>
        </div>
      ) : (
        <>
          <div className="thank-you-box">
            <FaGavel className="thank-icon" />
            <h3>شكراً لمشاركتك في المزاد</h3>
            <p>لم تفز في هذه المزايده لكننا نقدر مشاركتك ونشجعك على متابعة المزادات القادمة</p>
            <p>نتمنى لك التوفيق في المستقبل</p>
          </div>

          <div className="winner-box">
            <span>مزايد آخر فاز بالمزاد</span>
            <FaBullhorn />
          </div>

          <div className="bid-status">
            <div className="status-box">
              <FaFileAlt className="icon" />
              <p>آخر مزايدة اليوم</p>
              <h3>495,284.50 رس</h3>
            </div>

            <div className="status-box">
              <FaDollarSign className="icon" />
              <p>مزايدتك الأخيرة</p>
              <h3>139,284.50 رس</h3>
            </div>
          </div>
        </>
      )}

      
      {popup && (
       <div className="confirmation-popup">
    <div className="popup-content">
      <h3>تأكيد المزايدة</h3>
      <p>هل أنت متأكد من المزايدة على هذه السيارة؟</p>
      <div className="bid-amount">
        <span>قيمة المزايدة:</span>
        <strong>139,286.50 رس</strong>
      </div>
      <button className="confirm-btn" onClick={handleConfirm}>تأكيد المزايدة</button>
      <button className="cancel-btn">إلغاء</button>
      <label className="dont-show">
        <input type="checkbox" /> عدم إظهار هذه الرسالة مرة أخرى
      </label>
    </div>
  </div>
      )}
    </div>
  );
}

export default Messages;