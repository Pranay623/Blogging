import React, { useState, useEffect } from 'react';
import './Hero.css'
import img1 from '../hero/1.png'
import img2 from '../hero/2.png'
import img3 from '../hero/3.png'

const Hero = () => {


  return (
    <div className='main'>
        <section >
            <ul>
                <li>
                    <div className="slider-bg">
                     <div className='slide slide1'>
                       <img src={img1} width="1880" height="950" alt="" className="img-cover"/>
                      </div>
                       <div className="slide slide2">
                       <img src={img2} width="1880" height="950" alt="" className="img-cover"/>
                      </div>
                      <div className="slide slide3">
                       <img src={img3} width="1880" height="950" alt="" className="img-cover"/>
                      </div>

                      <div className="section-content">
                            <h2 className="hero-title">Share your passions, your style</h2>
                           <p className="hero-text">Create an eye-catching blog effortlessly.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>

    </div>
  )
}

export default Hero