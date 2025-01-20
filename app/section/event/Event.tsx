'use client';
import { useState } from 'react';
import styles from './Events.module.css';
import Footer from '@/app/components/Footer';
import { events } from './eventData'; // sesuaikan path import
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  const handleLearnMore = (title: string) => {
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    router.push(`/EventDetail/${slug}`);
  };

  return (
    <div className={styles.eventsWrapper}>
      <section className={styles.eventsSection}>
        <div className={styles.eventsContent}>
          <h1>Meet Our Events</h1>
          <p>Discover our exciting events lineup for 2025</p>
          
          <div className={styles.eventSlider}>
            <button 
              className={styles.sliderButton} 
              onClick={prevSlide} 
              aria-label="Previous slide"
            >
              &lt;
            </button>
            
            <div className={styles.eventCard}>
                <div className={styles.eventInfo}>
                    <div className={styles.eventHeader}>
                    <Image
                        src={events[currentSlide].logo} // Menggunakan logo dari eventData
                        alt={`${events[currentSlide].title} logo`}
                        width={80}
                        height={80}
                        className={styles.eventLogo}
                    />
                    </div>
                    
                    <div className={styles.dateContainer}>
                         <p className={styles.eventDate}>{events[currentSlide].date}</p>
                    </div>
                    <p className={styles.eventTheme}>{events[currentSlide].theme}</p>
                    
                    
                    <button 
                    
                    className={styles.learnMore}
                    onClick={() => handleLearnMore(events[currentSlide].slug)}
                    >
                    Learn more...
                    </button>
                </div>

                <div className={styles.eventImage}>
                    <Image
                    src={events[currentSlide].image}
                    alt={events[currentSlide].title}
                    width={500}
                    height={300}
                    className={styles.image}
                    />
                </div>
            </div>
            
            <button 
              className={styles.sliderButton} 
              onClick={nextSlide}
              aria-label="Next slide"
            >
              &gt;
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Events;
