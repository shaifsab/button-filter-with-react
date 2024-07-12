import React, { useEffect, useState } from 'react';
import './App.css';
import carData from './api.js';

const App = () => {
const [data, setData] = useState(carData);


//filter data
const handelButton = (category) => {
const filterData = carData.filter((car) => car.category === category);
setData(filterData);
};


//class
useEffect(() => {
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
card.classList.remove('animation-data');
requestAnimationFrame(() => {
requestAnimationFrame(() => {
card.classList.add('animation-data');
});
});
});
}, [data]);



return (
<>
  {/* navbar button */}
  <nav>
    <div className='py-2 px-3 bg-white'>
      <div className="container">
        <div className='flex justify-between'>
          <div className="nav_text">
            <h1 className='font-teko text-[35px] font-bold'>Car<span className='text-[#F97300]'>Hub</span></h1>
          </div>
          <div className='flex justify-center'>
            <div className="flex gap-3 font-teko">
              <button onClick={()=> setData(carData)} className='py-2 px-[30px] bg-white rounded-full text-lg font-semibold text-black duration-200  ease-in-out hover:bg-black hover:text-white active:bg-[#1B4242]'>All</button>
              <button onClick={()=> handelButton('electric')} className='py-2 px-[30px] bg-white rounded-full text-lg font-semibold text-black duration-200  ease-in-out hover:bg-black hover:text-white active:bg-[#481E14]'>Electric</button>
              <button onClick={()=> handelButton('hybrid')} className='py-2 px-[30px] bg-white rounded-full text-lg font-semibold text-black duration-200  ease-in-out hover:bg-black hover:text-white active:bg-[#481E14]'>Hybrid</button>
              <button onClick={()=> handelButton('sports')} className='py-2 px-[30px] bg-white rounded-full text-lg font-semibold text-black duration-200  ease-in-out hover:bg-black hover:text-white active:bg-[#481E14]'>Sports</button>
              <button onClick={()=> handelButton('luxury')} className='py-2 px-[30px] bg-white rounded-full text-lg font-semibold text-black duration-200  ease-in-out hover:bg-black hover:text-white active:bg-[#481E14]'>Luxury</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  {/* card item */}
  <div className='bg-black h-screen pt-10'>
    <div className="container">
      <div className="main-item flex gap-5 flex-wrap justify-center">
        {data.map((item) => (
        <div key={item.product_id} className="card bg-white overflow-hidden rounded-md w-[300px]">
          <div className="card-image relative px-[35px] py-[50px]">
            {item.discount_price && (<p className='absolute top-3 left-3 px-5 py-1 bg-[#F97300] font-teko text-md font-bold'>Sale</p>)}
            <img className='w-[250px] h-[200px]' src={item.car_image} alt="img" />
          </div>
          <div className="card-text">
            <div className='text-box flex flex-col text-center'>
              <h1 className='text-[25px] font-semibold font-teko mb-1'>{item.car_name}</h1>
              <p className='text-[20px] font-teko font-bold mb-3 text-black'>{item.discount_price ? item.discount_price : item.car_price}<span className='text-[#F97300] ml-5 line-through'>{item.discount_price && item.car_price}</span>
              </p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  </div>
</>
);
}

export default App;