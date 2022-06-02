import React from 'react';
import './HomeBody.scss'

import Vintage1 from '../../img/vintage-1.jpg'
import Vintage2 from '../../img/vintage-2.jpg'
import Vintage3 from '../../img/vintage-3.jpg'
import Vintage4 from '../../img/vintage-4.png'
import Vintage5 from '../../img/vintage-5.jpg'
import Vintage6 from '../../img/vintage-6.jpg'
import Vintage7 from '../../img/vintage-7.jpg'
import Vintage8 from '../../img/vintage-8.jpg'

const HomeBody = () => (
  <div className="home-body">
    {/* Show left column images */}
    <div className="left-images">
      <img src={Vintage1} className="left-image" alt=''/>
      <img src={Vintage2} className="left-image" alt=''/>
      <img src={Vintage3} className="left-image" alt=''/>
      <img src={Vintage4} className="left-image" alt=''/>
    </div>

    {/* Show video */}
    <div className="video-container">
      <iframe className="video" title="vimeo-player" src="https://player.vimeo.com/video/707609150?h=5178318fd7" frameBorder="0" allowFullScreen></iframe>
    </div>

    {/* Show right column images */}
    <div className="right-images">
      <img src={Vintage5} className="right-image" alt=''/>
      <img src={Vintage6} className="right-image" alt=''/>
      <img src={Vintage7} className="right-image" alt=''/>
      <img src={Vintage8} className="right-image" alt=''/>
    </div>
  </div>
)

export default HomeBody
