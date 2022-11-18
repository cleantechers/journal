import React from 'react';

import "../SecondPublicity/SecondPub.css"

import DestaqueImg from "../../../img/Destaque.png"
const SecondPub = () => {
    return ( <>
        <div className="secondPub">
            <img src={DestaqueImg} alt="" />
        </div>
        <div className="textDown1">
            <div className="name">
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore</span>
            </div>
        </div>
    </> );
}
 
export default SecondPub;