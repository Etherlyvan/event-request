'use client';
import { useEffect, useState } from 'react';
import styles from '@/app/components/css/Navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Tambahkan ini

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Untuk mendeteksi current path
  const isHomePage = pathname === '/';
  const handleInternalLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        setIsMenuOpen(false);
        document.body.style.overflow = '';  // Kembalikan scroll
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.querySelector(`.${styles.navbar}`) as HTMLElement | null;

    const handleScroll = () => {
      if (navbar) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
          navbar.style.top = '-80px';
        } else {
          navbar.style.top = '0';
        }

        if (scrollTop === 0) {
          navbar.classList.add(styles.transparent);
        } else {
          navbar.classList.remove(styles.transparent);
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Hanya mengatur overflow ketika menu terbuka
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  return (
    <nav className={`${styles.navbar} ${styles.transparent}`}>
      <div className={styles.logo}>
        <img src="https://res.cloudinary.com/dbftqxgwn/image/upload/v1737273155/CEIC/LogoNavBar_kbtiba.svg" alt="Logo" />
      </div>

      <div 
        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <li><Link href="/" onClick={() => {
          toggleMenu();
          document.body.style.overflow = '';  // Kembalikan scroll
        }}>Home</Link></li>
        {isHomePage && (
          <>
            <li><a href="#about" onClick={handleInternalLink}>About</a></li>
            <li><a href="#mission" onClick={handleInternalLink}>Mission</a></li>
            <li><a href="#event" onClick={handleInternalLink}>Events</a></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
