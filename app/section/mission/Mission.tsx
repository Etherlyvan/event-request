import React from 'react';
import styles from './Mission.module.css';

const Mission = () => {
  return (
    <section className={styles.mission}>
      <div className={styles.container}>
      <div className={styles.theme}>
          &ldquo;Smart Bridges and Disaster Resilience Using BIM Technology Innovation to Achieve Sustainable Development Goals&rdquo;
        </div>
        
        <h2>Our Mission</h2>
        
        <div className={styles.missionList}>
          <div className={styles.missionItem}>
            To foster and develop a research spirit among undergraduate students throughout Indonesia in line with the vision and mission of Diponegoro University as a Research University in 2025.
          </div>
          
          <div className={styles.missionItem}>
            To introduce Diponegoro University in general and Civil Engineering in particular as an educational institution based on research and innovation.
          </div>
          
          <div className={styles.missionItem}>
            To provide solutions to problems in society through creative ideas and innovations related to sustainable development.
          </div>
          
          <div className={styles.missionItem}>
            To prepare prospective civil engineers to face the era of construction digitalization that will use the latest technology.
          </div>
          
          <div className={styles.missionItem}>
            To design and design civil buildings that are environmentally and socially aware to help provide solutions to problems found by the community.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
