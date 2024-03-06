import React from 'react';
import './hero.css';
import {HiLocationMarker} from 'react-icons/hi';
import  CountUp from 'react-countup';

const Hero = () => {
    return (

        <section className='hero-wrapper'>
            <div className='padding hero-container'>
                <div className='hero-left'>
                    <div className='hero-title'>
                        <div className='orange-circle'></div>
                        <h1>Discover <br></br>most suitable<br></br>property</h1>

                    </div>
                    <div className='flexColstart hero-desc'>
                        <span className='secondaryText'>Find a variety of properties that siut you easily</span>
                        <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                    </div>
                    <div className='search-bar'>
                        <HiLocationMarker className='search-icon'></HiLocationMarker>
                        <input type='text'></input>
                        <button className='button'>Search</button>
                    </div>

                    <div className='flexcenter stats'>
                        <div className='flexColCenter stat'>
                            <span>
                                <CountUp  start={0} end={100} duration={4} ></CountUp>
                            <span>+</span>
                                </span>
                                <span className='secondaryText'>Premium Products</span>
                          
                        </div>
                        <div className='flexColCenter stat'>
                            <span>
                                <CountUp  start={9} end={100} duration={4} ></CountUp>
                            <span>+</span>
                                </span>
                                <span className='secondaryText'>Happy customers</span>
                          
                        </div>
                        <div className='flexColCenter stat'>
                            <span>
                                <CountUp  end={28} duration={4} ></CountUp>
                            <span>+</span>
                                </span>
                                <span className='secondaryText'>Award Winning</span>
                          
                        </div>
                    </div>
                </div>

                <div className='hero-right'>
                    <div className='image-container'>
                        <img width={'300px'} src='https://housing-images.n7net.in/4f2250e8/ccbe5d43d9bfd90ea43e173c853a9efa/v0/fs/venkatesh_erandwane_central-erandwane-pune-shree_venkatesh_buildcon.jpeg'></img>
                    </div></div>
                    
            </div>
            
     



        </section>
    )
}

export default Hero;