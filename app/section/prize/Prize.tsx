import React from 'react';
import styles from './Prize.module.css';
import { Prize } from '@/app/EventDetail/[id]/data';
import { Trophy, Award, Medal } from 'lucide-react'; // Pastikan menginstall lucide-react

interface PrizesSectionProps {
    prizes: Prize[];
}

const PrizesSection: React.FC<PrizesSectionProps> = ({ prizes }) => {
    const getOrdinalSuffix = (n: number): string => {
        if (n === 1) return 'st';
        if (n === 2) return 'nd';
        if (n === 3) return 'rd';
        return 'th';
    };
    
    const getPrizeIcon = (index: number) => {
        switch(index) {
            case 0: return <Trophy className={styles.trophyIcon} />;
            case 1: return <Award className={styles.trophyIcon} />;
            case 2: return <Medal className={styles.trophyIcon} />;
            default: return null;
        }
    };

    return (
        <div className={styles.prizesSection}>
            <h2 className={styles.sectionTitle}>Competition Prizes</h2>
            <button className={styles.grabPrizeButton}>
                <span className={styles.buttonText}>Grab Your Prize!</span>
                <span className={styles.buttonGlow}></span>
            </button>
            
            <div className={styles.prizesContainer}>
                {prizes.map((prize, index) => (
                    <div key={index} className={`${styles.prizeCard} ${styles[`place${index + 1}`]}`}>
                        <div className={styles.prizeContent}>
                            {getPrizeIcon(index)}
                            <div className={styles.placeNumber}>
                                {index + 1}{getOrdinalSuffix(index + 1)}
                            </div>
                            <h3 className={styles.placeTitle}>{prize.place}</h3>
                            <div className={styles.prizeAmount}>
                                <span className={styles.currency}>IDR</span>
                                {new Intl.NumberFormat('id-ID').format(Number(prize.amount))}
                            </div>
                            <div className={styles.prizeDetails}>
                                <span>🏆 Trophy and Plaque</span>
                                <span>📜 Certificate</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.andMore}>...and more exciting prizes to be won!</div>
        </div>
    );
};

export default PrizesSection;
