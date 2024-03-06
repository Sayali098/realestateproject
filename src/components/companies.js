import React from 'react';
import './companies.css';
import '../index.css';

const Companies = () => {
  return (
    <section className='company-wrappper'>
        <div className='padding flexcenter c-container'>
        <img  style={{width:'100px'}} src='./prologis.png' alt='pro'></img>
        <img  style={{width:'100px'}}  src='./equinix.png' alt='eq'></img>
        <img  style={{width:'100px'}}   src='./realty.png'></img>
        <img   style={{width:'100px'}} src='./tower.png'></img>
        </div>
    </section>
  )
}

export default Companies;