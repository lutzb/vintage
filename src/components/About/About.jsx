import React from 'react';
import './About.scss';
import Banner from '../Banner/Banner'
import NavMenu from '../NavMenu/NavMenu'
import Footer from '../Footer/Footer'

import Profile from './Profile/Profile'
import JakeCimperman1 from '../../img/jake-cimperman-1.jpg'
import JakeCimperman2 from '../../img/jake-cimperman-2.jpg'
import JeanieBuss1 from '../../img/jeanie-buss-1.jpg'
import JeanieBuss2 from '../../img/jeanie-buss-2.png'
import MaxMcCormick1 from '../../img/max-mccormick-1.jpg'
import ChrisDriedger1 from '../../img/chris-driedger-1.jpg'

function AboutText1() {
  return `
  Pro Beach Hockey is a feature-length documentary celebrating the 1990s golden era of roller hockey in Southern California. Lead by an unforgettable cast of characters, the sport exploded from beach parking lots to packed arenas. 
  `
}

function AboutText2() {
  return `
  This film explores the rise and fall of the sport and it’s incredible impact on hockey’s accessibility for kids in non-traditional markets. 
  `
}

function AboutText3() {
  return `
  For all inquires: jake.cimperman@gmail.com 
  `
}

function JakeCimpermanText() {
  return `
  Jake has been leading this project since 2020.

  Prior to Pro Beach Hockey, he produced and directed unscripted content for Major League Baseball and Bleacher Report.

  Every week, he plays beach roller hockey in Santa Monica (but strictly for research purposes). 
  `
}

function JeanieBussText() {
  return `
  As the owner for the Los Angeles Blades Jeanie Buss brought professional roller hockey to Southern California. 

  From 1993-1997, the Blades were one of Roller Hockey International’s most successful franchises. In addition to being a key catalyst in the sport’s growth, Jeanie is now the Governor and Owner of the Los Angeles Lakers.
  `
}

function MaxAndChrisText() {
  return `
  Max and Chris aren't just a couple of exceptionally athletic dudes. In addition to being current NHL players in the Seattle Kraken organization, they joined the project as producers in 2022.
  
  With a large network of industry contacts, Chris leads development and distribution for PBH.
  
  Max brings an entrepreneurial spirit to his producer role, balancing the big-picture business goals with the creative process. 
  
  Their connections in sports media and business have been an incredibly valuable asset to this production!
  `
}

function About() {
  return (
    <div className="about">
      <Banner />
      <NavMenu />

      {/* ABOUT THINGS */}
      <div className="about-body">
        <p className='about-header'>About the Team</p>
        <p className='about-text'>{AboutText1()}</p>
        <p className='about-text'>{AboutText2()}</p>
        <p className='about-text'>{AboutText3()}</p>
        <Profile image1={JakeCimperman1} image2={JakeCimperman2} name='Jake Cimperman' role='Director' text={JakeCimpermanText()}/>
        <Profile image1={JeanieBuss1} image2={JeanieBuss2} name='Jeanie Buss' role='Executive Producer' text={JeanieBussText()}/>
        <Profile image1={MaxMcCormick1} image2={ChrisDriedger1} name='Max McCormick & Chris Driedger' role='Producers' text={MaxAndChrisText()}/>
      </div>

      <Footer />
    </div>
  );
}

export default About;
