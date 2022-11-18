import React from 'react';

import "../src/App.css"

import Header from "../src/assets/Components/Header/Header"
import Article from './assets/Components/Artigo/Artigo';
import Banner from './assets/Components/Banner/Banner';
import Navigation from './assets/Components/Nav/Nav';
import Post from './assets/Components/Post/Post';
import Publicity from './assets/Components/Publicities/Publicity/LeftPublicity';
import SecondPub from './assets/Components/Publicities/SecondPublicity/SecondPub';
import RightPub from './assets/Components/RightPublicits/RightPub';

function src() {
  return <>
          <Header/>
          <Navigation/>
          <Banner/>
          <Post/>
          <Publicity/>
          <SecondPub/>
          <RightPub/>
          <Article/>
        </>;
}
export default src;
