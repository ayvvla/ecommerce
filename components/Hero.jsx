import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div>
        <Image 
          src={'/herop.jpeg'}
          width={0}
          height={0}
          sizes={'100vw'}
          style={{width: '100%', height : '100vh', objectFit: 'fill'}}
          alt="Hero"
        />
      </div>
      <div>
        <h2>Everyday Fashion Essentials</h2> 
        <i>stay cozy, stay soft, stay comfortable</i> 
      </div>
    </section>
  );
};

export default Hero;
