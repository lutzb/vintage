import React from 'react';
import './Teams.scss';
import Team from './Team/Team'
import Banner from '../Banner/Banner'
import NavMenu from '../NavMenu/NavMenu'
import HeavyMetal from '../../img/team-heavymetal.jpg'
import HeavyMetalLogo from '../../img/team-heavymetal-logo.jpg'
import WebWarriors from '../../img/team-webwarriors.jpg'
import WebWarriorsLogo from '../../img/team-webwarriors-logo.jpg'
import Gargoyles from '../../img/team-gargoyles.jpg'
import GargoylesLogo from '../../img/team-gargoyles-logo.jpg'
import Salsa from '../../img/team-salsa.jpg'
import SalsaLogo from '../../img/team-salsa-logo.jpg'
import DawgPac from '../../img/team-dawgpac.jpg'
import DawgPacLogo from '../../img/team-dawgpac-logo.jpg'
import Express from '../../img/team-express.jpg'
import ExpressLogo from '../../img/team-express-logo.jpg'

function HeavyMetalText() {
  return `
  Team Heavy Metal is led by Rick Plester, The Rock 'N' Roll Goalie. Plester is PBH's all-time leader in wins and guitar solos. 

  Despite losing in the 1999 finals, the Heavy Metal proudly wear the title of Hardest Partying Team.
  `
}

function WebWarriorsText() {
  return `
  The Web Warriors are the closest thing PBH has to a dynasty, winning the championship in both 1998 and 2000.

  Don’t let their name fool you, these computer wizards mean business on the court. 
  `
}

function GargoylesText() {
  return `
  While the Gargoyles lacked on-court success (zero finals appearances), they featured a memorable roster of goons, actors, and even a pair of twins. Their dedicated fans painted their faces and wore leather, which seems like extremely uncomfortable beach attire.
  `
}

function SalsaText() {
  return `
  Featuring one of the most iconic logos in professional sports history, the Salsa always drew big crowds. Steve Chelios, brother of NHL Hall-of-Famer Chris Chelios, led the team in penalty minutes. 
  `
}

function DawgPacText() {
  return `
  After a NCAA Championship at Wisconsin, Chris Nelson took his skills to the beach and captained the Dawg Pac for three seasons. 

  They have a rabid fan base, which includes movie star Cuba Gooding Jr. 
  `
}

function ExpressText() {
  return `
  Despite being one of the more forgettable team names, The Express won the 1999 Championship in thrilling fashion. 

  University of Alaska Anchorage legend Steve Bogeyevac led them to glory with an outstanding 19 points in 10 games. 
  `
}

function Teams() {
  return (
    <div className="teams">
    <Banner />
    <NavMenu />
    <div className="teams-list">
      <Team name='WEB WARRIORS' image={WebWarriors} logo={WebWarriorsLogo} text={WebWarriorsText()}/>
      <Team name='GARGOYLES' image={Gargoyles} logo={GargoylesLogo} text={GargoylesText()}/>
      <Team name='SALSA' image={Salsa} logo={SalsaLogo} text={SalsaText()}/>
      <Team name='DAWG PAC' image={DawgPac} logo={DawgPacLogo} text={DawgPacText()}/>
      <Team name='HEAVY METAL' image={HeavyMetal} logo={HeavyMetalLogo} text={HeavyMetalText()}/>
      <Team name='THE EXPRESS' image={Express} logo={ExpressLogo} text={ExpressText()}/>
    </div>
  </div>
  );
}

export default Teams;
