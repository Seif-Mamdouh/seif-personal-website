"use Client";
import React from 'react'
import Image from "next/image";

import '../styles/styles.css';
import Nav from './Nav';

const Hero = () => {
    return (
        <main className="main">
            <Image src={'/profile.png'} alt={'Seif Image'} width={200} height={200} />
            <div className="mainDiv">
            <h1 className="bigTitle">
            <span>I'm Seif Mamdouh</span>
            </h1>
          <div className="title">Software Engineer</div>
          <div className="RU">Rutgers University Class of 2024</div>
          <Nav />
        </div>
      </main>
    );
}

export default Hero
