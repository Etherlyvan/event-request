import React from 'react';
import styles from './About.module.css';
import Image from 'next/image';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h1>Get to Know</h1>
          <div className={styles.ceicText}>
            <Image 
              src="https://res.cloudinary.com/dbftqxgwn/image/upload/v1737281990/CEIC/aboutlogo_l9prfb.svg"
              alt="CEIC 2025"
              width={400}
              height={150}
              className={styles.ceicLogo}
            />
          </div>
        </div>
        <div className={styles.rightContent}>
          <p>
            <span className={styles.highlight}>Civil Engineering Innovation Contest</span> or CEIC is an annual 
            civil engineering competition held by UNDIP Civil Engineering undergraduate students under the auspices 
            of HMS UNDIP 2025. CEIC is also a place for undergraduate students to improve their innovation, 
            creativity, and insight through competitions and seminars. With this event, it is hoped that it can improve 
            the quality of prospective Civil Engineering graduates
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
