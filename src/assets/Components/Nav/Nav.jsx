import React from 'react';

import "../Nav/Nav.css"
const Navigation = () => {
    return ( 
        <>
            <div className="nav">
                <ul >
                    <li className='active'>Geral</li>
                    <li>Negocio</li>
                    <li>Esportes</li>
                    <li>Cultura</li>
                    <li>Viagem</li>
                    <li>Mundo</li>
                </ul>
            </div>
        </>
     );
}
 
export default Navigation;