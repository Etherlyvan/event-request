// app/section/hero/Hero.js
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <img src="/ceic_herotext.svg" alt="CEIC The 13th Season" className={styles.titleImage} />
        <div className={styles.buttons}>
          <button className={styles.participate}>Participate NOW</button>
          <button className={styles.more}>See more...</button>
        </div>
      </div>
      <div className={styles.image}>
        <img src="https://res.cloudinary.com/dbftqxgwn/image/upload/v1737279568/CEIC/PhoneModel_irkurd.svg" alt="Mobile Phone" />
      </div>
    </section>
  );
};

export default Hero;
