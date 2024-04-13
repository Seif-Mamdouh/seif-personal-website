"use Client";
import React from 'react'
import Image from "next/image";

import '../styles/styles.css';

const Hero = () => {
    return (
        <main className="main">
            <Image src={'/profile.png'} alt={'Seif Image'} width={200} height={200} />
            <div className="mainDiv">
            <h1 className="bigTitle">
            <span className="welcomeTexjt">I'm Seif Mamdouh</span>
          </h1>
          <div className="research">Software Engineer</div>
          {/* <div className="line" /> */}
        </div>
      </main>
      // <div className="main">
      //     <h1>Hi! I'm Seif</h1>
      //     <p> Software Engineer </p>
      // </div>
    );
}

export default Hero
