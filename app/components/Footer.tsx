import styles from './css/Footer.module.css'
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
      <div className={styles.logoSection}>
            <div className={styles.logoContainer}>
                <img src="https://res.cloudinary.com/dbftqxgwn/image/upload/v1737291945/CEIC/WhiteLogo_humbj4.svg" alt="CEIC Logo" className={styles.logo} />
                <div className={styles.logoText}>
                <p>Civil</p>
                <p>Engineering</p>
                <p>Innovation</p>
                <p>Contest</p>
                <p>Season XIII</p>
                </div>
            </div>
        </div>
        
        <div className={styles.aboutSection}>
          <h3>About Us</h3>
          <p>The Civil Engineering Innovation Contest (CEIC) is an annual civil engineering competition organized by undergraduate Civil Engineering students at Diponegoro University (UNDIP) under the auspices of HMS UNDIP 2024.</p>
          <div className={styles.socialLinks}>
            <a href="#"><FaTwitter className={styles.socialIcon} /></a>
            <a href="#"><FaInstagram className={styles.socialIcon} /></a>
            <a href="#"><FaLinkedin className={styles.socialIcon} /></a>
            <a href="#"><FaFacebook className={styles.socialIcon} /></a>
            <a href="#"><FaYoutube className={styles.socialIcon} /></a>
        </div>
        </div>
        
        <div className={styles.contactSection}>
          <h3>Contact Us</h3>
          <p>Gedung Teknik Sipil, Kampus Universitas Diponegoro, Semarang, 1624</p>
          <p>+6289639181278</p>
          <p>ceicseason.xiii@gmail.com</p>
        </div>
        

      </div>
    </footer>
  )
}

export default Footer
