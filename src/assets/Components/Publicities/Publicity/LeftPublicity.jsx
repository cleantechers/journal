import React from 'react';


import "../Publicity/LeftPublicity.css"
import publicity from "../../../img/Publicity.png"
import leftPublicity from "../../../img/LeftPublicity.png"
import googleImg from "../../../img/Google.png"

const Publicity = () => {
    return ( <>
        <div className="LeftPublicity">
            <div className="leftPub">
                <img src={publicity} alt="" />
            </div>
            <div className="rightPub">
                <img src={leftPublicity} alt="" />
            </div>
        </div>
        <div className="textDown">
            <div className="name">
                <span>ORLANDO JONES</span>
            </div>
            <div className="links">
                <span>Compartilhe</span>
                <div className="socialMedia">

                </div>
                <span>SIGA NO</span>
                <div className="img2">
                    <img src={googleImg} alt="GOOGLE" />
                </div>
            </div>
        </div>
    </> );
}
 
export default Publicity;