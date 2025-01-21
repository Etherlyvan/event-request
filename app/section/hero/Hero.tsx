// app/section/hero/Hero.js

import styles from './Hero.module.css';

const Hero = () => {
  const handleInternalLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        document.body.style.overflow = '';  // Kembalikan scroll
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <img src="https://res.cloudinary.com/dbftqxgwn/image/upload/v1737449864/Tulisann_CEIC_f765g6.svg" alt="CEIC The 13th Season" className={styles.titleImage} />
        <div className={styles.buttons}>
          <a href="#event" onClick={handleInternalLink} className={styles.participate} role="button">Participate NOW</a>
          <a href="#about" onClick={handleInternalLink} className={styles.more} role="button">See more...</a>
        </div>
      </div>
      <div className={styles.image}>
        <img src="https://res.cloudinary.com/dbftqxgwn/image/upload/v1737279568/CEIC/PhoneModel_irkurd.svg" alt="Mobile Phone" />
      </div>
    </section>
  );
};

export default Hero;
