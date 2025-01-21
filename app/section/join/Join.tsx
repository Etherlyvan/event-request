import React from 'react';
import styles from './Join.module.css';
import { EventRequirements } from "@/app/EventDetail/[id]/data";
import Footer from '@/app/components/Footer';

interface JoinSectionProps {
  eventId: string;
  requirements?: EventRequirements;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const JoinSection: React.FC<JoinSectionProps> = ({ eventId, requirements }) => {
  // Check if requirements exists first
  if (!requirements) return null;

  return (
    <section className={styles.joinSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Join Us</h2>
        
        <div className={styles.requirements}>
        {(requirements.termOfReference || requirements.registrationForm || requirements.proposal) && (
            <>
            <p className={styles.downloadText}>(Download the Requirements First)</p>
            <ul className={styles.requirementsList}>
                {requirements.termOfReference && (
                <li>
                    <a href={requirements.termOfReference} target="_blank" rel="noopener noreferrer">
                    Term of Reference
                    </a>
                </li>
                )}
                {requirements.registrationForm && (
                <li>
                    <a href={requirements.registrationForm} target="_blank" rel="noopener noreferrer">
                    Registration Form
                    </a>  
                </li>
                )}
                {requirements.proposal && (
                <li>
                    <a href={requirements.proposal} target="_blank" rel="noopener noreferrer">
                    Additional file
                    </a>
                </li>
                )}
            </ul>
            </>
        )}
        
        {requirements.registrationLink && (
            <a 
            href={requirements.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.registerButton}
            >
            Register
            </a>
        )}
        </div>

        <div className={styles.contactSection}>
          <h3 className={styles.contactTitle}>Contact Person</h3>
          {requirements.contactPersons.map((contact: { name: string; phone: string }, index: number) => (
            <p key={index} className={styles.contactInfo}>
              {contact.name}: {contact.phone}
            </p>
          ))}
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default JoinSection;
