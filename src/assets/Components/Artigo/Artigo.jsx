import React from 'react';

import "../Artigo/Artigo.css"
import LastBanner from '../LastBanner/LastBanner';
const Article = () => {
    return ( <>
        <div className="article">
            <div className="audioArticle">
                <div className="title">
                    <div className="icon">

                    </div>
                    <div className="text">
                        Ouça o artigo 
                    </div>
                    <div className="time">
                        11 minutos
                    </div>
                </div>
                <div className="animation">

                </div>
            </div>
            <div className="textArticle">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum autem, beatae dolore id nisi nam minima numquam optio facere ullam adipisci, aperiam exercitationem, asperiores doloremque. Repudiandae impedit neque soluta?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum autem, beatae dolore id nisi nam minima numquam optio facere ullam adipisci, aperiam exercitationem, asperiores doloremque. Repudiandae impedit neque soluta?
                </p>
            </div>
            <LastBanner/>
        </div>
    </> );
}
 
export default Article;