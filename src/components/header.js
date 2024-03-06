import { eventWrapper } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import './header.css';
import OutsideClickHandler from 'react-outside-click-handler';
import { BiMenuAltRight } from 'react-icons/bi';

const Header = () => {

  const [menuOpened,setMenuOpened]=useState(false);

  const getMenuStyle=(menuOpened)=>{
 if(document.documentElement.clientWidth<=800){
  return{right: !menuOpened && "-100%"};
 }
  }
  return (
  <section className='header-wrapper'>
    <div className=' flexcenter padding header-container'>
        <img src='https://c.housingcdn.com/demand/s/client/common/assets/housing.820bbe77.png' alt='logo' width={'100px'}></img>
      <OutsideClickHandler
      onOutsideClick={()=>setMenuOpened(false)}>
        <div className='h-menu flexcenter'
        style={getMenuStyle(menuOpened)}>
    <a href=''>Resedencies</a>
    <a href=''>Our Value</a>
    <a href=''>Contact Us</a>
    <a href=''>Get Started</a>
    <button className='button button1'>
    <a href=''>Contact</a></button>

        </div>
        </OutsideClickHandler>
        <div className='menu-icon' style={{color:'white'}} onClick={()=>setMenuOpened((prev)=>!prev)}>
      < BiMenuAltRight size={30}></BiMenuAltRight>
    </div>
    </div>
   
  </section>

  )
}

export default Header