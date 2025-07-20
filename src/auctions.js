import React, { useState } from 'react';
import './auctions.css';
import { FaFileExcel } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function Auctions() {
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();
  const carBrands = [
  { name: 'Volkswagen', logo: `${process.env.PUBLIC_URL}/volkswagen.jpg`},
  { name: 'Peugeot', logo: `${process.env.PUBLIC_URL}/peugeot.jpg`},
  { name: 'Mercedes Benz', logo: `${process.env.PUBLIC_URL}/mercedes.jpg`},
  { name: 'Ford', logo: `${process.env.PUBLIC_URL}/ford.jpg` },
  { name: 'BMW', logo: `${process.env.PUBLIC_URL}/bmwlogo.jpg` },
  { name: 'Audi', logo: `${process.env.PUBLIC_URL}/audi.jpg` },
];

  const cars = [
   {
  brand: 'BMW',
  title: 'بي ام دبليو 2024',
  desc: 'كيوبيه اسود سقف متحرك 460i',
  price: '50,0000',
  image: `${process.env.PUBLIC_URL}/bmw.jpg`,
  logo: `${process.env.PUBLIC_URL}/bmwlogo.jpg`,
},
      {
  brand: 'BMW',
  title: 'بي ام دبليو 2024',
  desc: 'كيوبيه اسود سقف متحرك 460i',
  price: '50,0000',
  image: `${process.env.PUBLIC_URL}/bmw.jpg`,
  logo: `${process.env.PUBLIC_URL}/bmwlogo.jpg`,
},
       {
  brand: 'BMW',
  title: 'بي ام دبليو 2024',
  desc: 'كيوبيه اسود سقف متحرك 460i',
  price: '50,0000',
  image: `${process.env.PUBLIC_URL}/bmw.jpg`,
  logo: `${process.env.PUBLIC_URL}/bmwlogo.jpg`,
},
       {
  brand: 'BMW',
  title: 'بي ام دبليو 2024',
  desc: 'كيوبيه اسود سقف متحرك 460i',
  price: '50,0000',
  image: `${process.env.PUBLIC_URL}/bmw.jpg`,
  logo: `${process.env.PUBLIC_URL}/bmwlogo.jpg`,
},
      {
  brand: 'BMW',
  title: 'بي ام دبليو 2024',
  desc: 'كيوبيه اسود سقف متحرك 460i',
  price: '50,0000',
  image: `${process.env.PUBLIC_URL}/bmw.jpg`,
  logo: `${process.env.PUBLIC_URL}/bmwlogo.jpg`,
},
   {
  brand: 'BMW',
  title: 'بي ام دبليو 2024',
  desc: 'كيوبيه اسود سقف متحرك 460i',
  price: '50,0000',
  image: `${process.env.PUBLIC_URL}/bmw.jpg`,
  logo: `${process.env.PUBLIC_URL}/bmwlogo.jpg`,
},
    
  ];

  return (
    <div className="auctions-page" dir="rtl">
      <div className="hero-section">
        <img src={`${process.env.PUBLIC_URL}/car2.jpg`} className="hero-img" alt="car" />
        <div className="hero-content">
          <h2>المزادات</h2>
          <button className="excel-button">
            <FaFileExcel className="excel-icon" />
            تصدير ملف اكسل
          </button>
        </div>
      </div>

      <div className="brand-logos">
        {carBrands.map((brand, i) => (
          <div key={i} className="brand-box">
            <img src={brand.logo} alt={brand.name} />
            <p>{brand.name}</p>
          </div>
        ))}
      </div>

      <div className="auction-tabs">
        {['all', 'new', 'used'].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}>
            {tab === 'all' ? 'الكل' : tab === 'new' ? 'جديد' : 'مستعمل'}
          </button>
        ))}
      </div>

       <div className="car-cards">
      {cars.map((car, i) => (
        <div
          key={i}
          className="car-card"
          onClick={() => navigate('/carDetails', { state: { car } })}
          style={{ cursor: "pointer" }} 
        >
          <img src={car.image} alt={car.title} className="car-image" />
          <div className="car-info">
            <img src={car.logo} alt={car.brand} className="car-logo" />
            <h3>{car.title}</h3>
            <p>{car.desc}</p>
          </div>
          <hr />
          <div className="price">أعلى سعر : {car.price} ريال</div>
        </div>
      ))}
    </div>

    </div>
  );
}

export default Auctions;