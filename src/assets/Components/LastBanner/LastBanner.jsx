import React from 'react';

import "../LastBanner/LastBanner.css"

import Oscar from "../../img/Oscar.png"
import Eternos from "../../img/Eternos.png"
import Man from "../../img/Man.png"

const LastBanner = () => {
    return ( 
        <>
            <div className="container">
                <h2>LEIA MAIS</h2>
                <div className="Cards">
                    <div className="card">
                        <img src={Oscar} alt="" />
                        <div className="title">
                            <span>08:57 - 15/11/2022</span>
                            <p>Mulher anuncia faxina em troca  de refeição em BH e se surpreendecom respostas</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Eternos} alt="" />
                        <div className="title">
                            <span>08:57 - 15/11/2022</span>
                            <p>Mulher anuncia faxina em troca  de refeição em BH e se surpreendecom respostas</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Man} alt="" />
                        <div className="title">
                            <span>08:57 - 15/11/2022</span>
                            <p>Mulher anuncia faxina em troca  de refeição em BH e se surpreendecom respostas</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default LastBanner;