import React from 'react';

import "../Banner/Banner.css"
import banner from "../../img/Banner.png"
const Banner = () => {
    return ( 
    <>
        <div className="banner">
            <img src={banner} alt="" />
        </div>
    </> 
    );
}
 
export default Banner;