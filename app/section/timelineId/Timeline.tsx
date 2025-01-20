'use client';
import styles from './Timeline.module.css';
import { TimelineItem } from '@/app/EventDetail/[id]/data';

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <section className={styles.timelineSection}>
      <h2>Timeline</h2>
      <div className={styles.timeline}>
        {items.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={`${styles.dot} ${styles[item.color || 'coral']}`}></div>
            <div className={styles.content}>
              <p className={styles.date}>{item.date}</p>
              <p className={styles.title}>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
