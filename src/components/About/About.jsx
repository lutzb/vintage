import React from 'react';
import './About.scss';
import Profile from './Profile/Profile'
import HomeHeader from '../HomeHeader/HomeHeader'
import JakeCimperman1 from '../../img/jake-cimperman-1.jpg'
import JakeCimperman2 from '../../img/jake-cimperman-2.jpg'
import JeanieBuss1 from '../../img/jeanie-buss-1.jpg'
import JeanieBuss2 from '../../img/jeanie-buss-2.jpg'
import MaxMcCormick1 from '../../img/max-mccormick-1.jpg'
import ChrisDriedger1 from '../../img/chris-driedger-1.jpg'

function AboutText() {
  return `
  Pro Beach Hockey is a feature-length documentary celebrating the 1990s golden era of roller hockey in Southern California. Lead by an unforgettable cast of characters, the sport exploded from beach parking lots to packed arenas. 
  
  This film explores the rise and fall of the sport and it’s incredible impact on hockey’s accessibility for kids in non-traditional markets. 

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
  Max and Chris are current NHL players for the Seattle Kraken. But they’re more than a couple of exceptionally athletic dudes. 

  They are natural entrepreneurs with a gift for problem solving and getting things done. Their connections throughout sports, media, and business have been an incredibly valuable asset to this production.
  `
}

function About() {
  return (
    <div className="about">
      <HomeHeader />
      <div className="profiles">
        {AboutText()}
        <Profile image1={JakeCimperman1} image2={JakeCimperman2} name='Jake Cimperman' role='Director' text={JakeCimpermanText()}/>
        <Profile image1={JeanieBuss1} image2={JeanieBuss2} name='Jeanie Buss' role='Executive Producer' text={JeanieBussText()}/>
        <Profile image1={MaxMcCormick1} image2={ChrisDriedger1} name='Max McCormick & Chris Driedger' role='Producers' text={MaxAndChrisText()}/>
      </div>
    </div>
  );
}

export default About;
