import React from 'react';

import "../Header/Header.css"

import profile from "../../img/Profile.png"
const header = () => {
    return ( 
        <>
            <div className="TopHeader">
                <div className="nav1">
                    <div className="left">
                        <span>Inglês</span>
                    </div>
                    <div className="right">
                        <span>Procurar</span>
                        <p>felixsdomingos93@gmail.com</p> 
                        <div className="img">
                            <img src={profile} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default header;