import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

import {FaHeart, FaShareAlt, FaExpand, FaBullhorn, FaClock, FaUsers,FaPlus, FaMinus, FaCar, FaGavel, FaMedal, FaCreditCard,
  FaExchangeAlt, FaTruck, FaGasPump, FaTachometerAlt,
  FaShieldAlt, FaCogs, FaFileAlt, FaDollarSign} from "react-icons/fa";
import "./carDetails.css";

function CarDetailsPage() {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate("/messages"); 
  };
  return (
    <div className="car-details-page" dir="rtl">
      <div className="car-images">
        <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
          <img src={`${process.env.PUBLIC_URL}bmw.jpg`} alt="السيارة 1" className="main-image" />
          <img src={`${process.env.PUBLIC_URL}bmw3.jpg`} alt="السيارة 2" className="main-image" />
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
            <button className="withdraw-btn">الانسحاب من المزاد</button>
          </div>
        </div>
      </div>

      
      <div className="auction">
        <div className="alert-box">
          <span>مزايد آخر قدم عرضًا أعلى</span>
          <FaBullhorn className="icon" />
        </div>

        <div className="timer-box">
          <span>5 : 1 : 12 : 59</span>
          <FaClock className="icon" />
        </div>

        <div className="participants-box">
          <div className="participants-text">
            <FaUsers className="icon" />
            <div>
              <p>المشاركين بالمزاد</p>
              <span className="count">28 مشارك</span>
            </div>
          </div>
          <div className="avatars">
            <span>م</span>
            <span>ع</span>
            <span>س</span>
            <span>+25</span>
          </div>
        </div>
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

      
      <div className="bidding-control">
        <button><FaPlus /></button>
        <div>
          <h3>100,000</h3>
          <p>ريال سعودي</p>
        </div>
        <button><FaMinus /></button>
      </div>
      <button className="bid-now" onClick={handleClick}>المزايدة</button>

      
      <h3 className="section-title">خطوات المزايدة</h3>
      <div className="steps">
        <div className="step-box">
          <span>1</span>
          <FaCar className="icon" />
          <p>تصفح المركبات</p>
          <small>استعرض المركبات المتاحة</small>
        </div>
        <div className="step-box">
          <span>2</span>
          <FaGavel className="icon" />
          <p>المزايدة</p>
          <small>شارك في المزاد وقدم عروضك</small>
        </div>
        <div className="step-box">
          <span>3</span>
          <FaMedal className="icon" />
          <p>الترسية</p>
          <small>ترسى عليك المركبة كأعلى مزايد</small>
        </div>
        <div className="step-box">
          <span>4</span>
          <FaCreditCard className="icon" />
          <p>السداد</p>
          <small>ادفع قيمة المركبة خلال المهلة</small>
        </div>
        <div className="step-box">
          <span>5</span>
          <FaExchangeAlt className="icon" />
          <p>نقل الملكية</p>
          <small>تبدأ إجراءات نقل المركبة</small>
        </div>
        <div className="step-box">
          <span>6</span>
          <FaTruck className="icon" />
          <p>استلام المركبة</p>
          <small>استلم المركبة أو اطلب توصيل</small>
        </div>
      </div>

      
      <h3 className="section-title">بيانات المركبة</h3>
      <div className="vehicle-specs">
        <div>
          <FaGasPump className="icon" />
          <p>نوع الوقود</p>
          <small>بنزين</small>
        </div>
        <div>
          <FaTachometerAlt className="icon" />
          <p>قوة المحرك</p>
          <small>400 حصان</small>
        </div>
        <div>
          <FaShieldAlt className="icon" />
          <p>الضمان</p>
          <small>5 سنوات</small>
        </div>
        <hr />
        <div>
          <FaCar className="icon" />
          <p>حالة السيارة</p>
          <small>ممتازة</small>
        </div>
        <div>
          <FaTachometerAlt className="icon" />
          <p>السرعة القصوى</p>
          <small>250 كم/س</small>
        </div>
        <div>
          <FaCogs className="icon" />
          <p>ناقل الحركة</p>
          <small>أوتوماتيك</small>
        </div>
      </div>

      
      <h3 className="section-title">تفاصيل حالة المركبة</h3>
      <div className="vehicle-specs">
        
          <div>
            <p>هل المركبة تعمل؟</p>
            <small>نعم</small>
          </div>
          <div>
            <p>حالة السيارة</p>
            <small>مستعملة</small>
          </div>
          <div>
            <p>القطع المفقودة</p>
            <small>لا يوجد</small>
          </div>
        
       
          <div>
            <p>هل يوجد مفتاح؟</p>
            <small>نعم</small>
          </div>
          <div>
            <p>الحاجز الخلفي الأيسر</p>
            <small>مخدوش</small>
          </div>
          <div>
            <p>الحاجز الأمامي الأيسر</p>
            <small>نعم</small>
          </div>
        </div>
      

      
      <h3 className="section-title">التقارير</h3>
<div className="reports">

  <div className="report-card">
    <img src={`${process.env.PUBLIC_URL}/mojaz.jpg`} alt="تقرير موجز" className="report-icon" />
    <h4>تقرير موجز</h4>
    <p>احصل على تقرير موجز لهذه المركبة الآن واستكشف أهم التفاصيل</p>
    <hr />
    <div className="report-footer">
      <span>المبلغ الإجمالي</span>
      <span>300 ريال</span>
    </div>
    <button>احصل على التقرير</button>
  </div>

  <div className="report-card">
    <img src={`${process.env.PUBLIC_URL}/khalej.jpg`} alt="السعر التقديري" className="report-icon" />
    <h4>السعر التقديري</h4>
    <p>اكتشف السعر التقديري لهذه المركبة الآن واتخذ قرارك بثقة</p>
    <hr />
    <div className="report-footer">
      <span>المبلغ الإجمالي</span>
      <span>300 ريال</span>
    </div>
    <button>اكتشف السعر الآن</button>
  </div>

  <div className="report-card">
    <img src={`${process.env.PUBLIC_URL}/taqeem.jpg`} alt="تقرير الصيانة" className="report-icon" />
    <h4>تقرير الصيانة</h4>
    <p>تفاصيل الصيانة والتقارير الفنية السابقة للمركبة</p>
    <hr />
    <div className="report-footer">
      <span>المبلغ الإجمالي</span>
      <span>300 ريال </span>
    </div>
    <button>احصل على التقرير</button>
  </div>

</div>
    </div>
  );
}

export default CarDetailsPage;