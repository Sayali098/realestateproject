import React from 'react';
import data from '../utlis/slider.json';
import './Resedencies.css';
import {sliderSetting} from '../utlis/common'

import {Swiper,SwiperSlide,useSwiper} from 'swiper/react';
import 'swiper/css';
const Resedencies = () => {
  return (
    <section className='res-wrapper'> 
    <div className='padding r-container'>

        <div className='r-head flexColstart'>
            <span className='OrangeText'>Best Choices</span>
            <span className='PrimaryText'>Popular Resedencies</span>
        </div>

<Swiper {...sliderSetting}>
  <SliderButtons></SliderButtons>
   {data.map((item,i)=>(
         <SwiperSlide key={i}>
        <div className='flexColstart r-card'>
           
        <img src={item.image} alt='images'></img>
         
         <span className='secondaryText'>
         <span style={{color:'orange'}}> ₹</span>
         <span>{item.price}</span>
         </span>
          <span className='PrimaryText'>{item.name}</span>
          <span className='secondaryText card-details'>{item.detail}</span>
        </div>
        </SwiperSlide>
    
   ))

}
</Swiper>



    </div>
    </section>
  )
}

export default Resedencies;

const SliderButtons=()=>{
  const swiper=useSwiper();
  return(
  <div className='flexcenter Res-Button'>
{/* <button onClick={()=>swiper.slidePrev()}>&lt;</button>
<button onClick={()=>swiper.slideNext()}>&gt;</button> */}
  </div>)
}