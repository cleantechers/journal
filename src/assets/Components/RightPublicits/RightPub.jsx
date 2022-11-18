import React from 'react';


import "../RightPublicits/RightPub.css"

import leftPublicity from "../../img/LeftPublicity.png"
import slow from "../../img/Slow.png" 

const RightPub = () => {
    return ( <>
        <div className="rightPub1">
            <div className="img2Pub">
                <img src={leftPublicity} alt="" />
            </div>
            <div className="mostRead">
                    <h2>MAIS LIDAS</h2>
                <div className="card">
                    <div className="title">
                        <span>10:54  25/07/2022</span>
                    </div>
                    <div className="content">
                       <num>1</num> Mulher anunicia faxina  em troca  de refeicao em BH  e se surpreende com respostas
                    </div>
                </div>
                <div className="card">
                    <div className="content"> Mulher anunicia faxina  em troca  de refeicao em BH  e se surpreende com respostas
                    </div>
                </div>
                <div className="card">
                    <div className="title">
                        <span>10:54  25/07/2022</span>
                    </div>
                    <div className="content">
                       <num>1</num> Mulher anunicia faxina  em troca  de refeicao em BH  e se surpreende com respostas
                    </div>
                </div>
                <div className="card">
                    <div className="title">
                        <span>10:54  25/07/2022</span>
                    </div>
                    <div className="content">
                       <num>1</num> Mulher anunicia faxina  em troca  de refeicao em BH  e se surpreende com respostas
                    </div>
                </div>
            </div>
            <div className="Public">
                <p>Publicidade</p>
                <div className="img3">
                    <img src={slow} alt="" />
                </div>
            </div>
        </div>
    </> );
}
 
export default RightPub;