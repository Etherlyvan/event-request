'use client';

import Image from 'next/image';
import styles from '@/app/components/css/EventDetail.module.css';
import { EventDetail as EventDetailType,TimelineItem, VenueInfo,Prize, EventRequirements} from '@/app/EventDetail/[id]/data';
import PrizesSection from '@/app/section/prize/Prize';
import JoinSection from '@/app/section/join/Join';
import { MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline';

interface EventDetailProps {
  data: EventDetailType;
  timeline?: TimelineItem[];
  prizes?: Prize[]; 
  eventId: string; 
  requirements: EventRequirements;
  venue?: VenueInfo; // Tambahkan prop venue
}

export default function EventDetail({ 
    data, 
    timeline, 
    prizes, 
    eventId,
    requirements,
    venue 
  }: EventDetailProps) {
    const isValidVenue = (venue?: VenueInfo): boolean => {
        return Boolean(
          venue &&
          venue.name &&
          venue.address &&
          venue.city &&
          venue.province &&
          venue.postalCode
        );
      };
  
  return (
    <>
      <div className={styles.eventWrapper}>
        <div 
          className={styles.backgroundLayer}
          style={{ 
            backgroundImage: `url(${data.background})`,
            opacity: 0.8
          }}
        />
        <div className={styles.waveOverlay} />
        
        <div className={styles.contentContainer}>
          <div className={styles.headerContent}>
            <div className={styles.logoContainer}>
              <Image 
                src={data.logo.src}
                alt={data.logo.alt}
                width={120}
                height={120}
                className={styles.logo}
              />
            </div>
          </div>

          <div className={styles.quoteSection}>
            <p className={styles.subtitle}>&ldquo;{data.subtitle}&rdquo;</p>
          </div>
          
          <div className={styles.aboutSection}>
            <h2 className={styles.about}>{data.about.title}</h2>
            <p className={styles.description}>{data.about.description}</p>
          </div>
        </div>
      </div>

      {/* Timeline section ditambahkan di bawah konten yang sudah ada */}

      {timeline && timeline.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto px-4">
            {/* Judul section selalu "Timeline" jika tidak ada venue */}
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              {isValidVenue(venue) ? 'Timeline and Place' : 'Timeline'}
            </h2>
            
            {/* Venue information hanya muncul jika data valid */}
            {isValidVenue(venue) && (
              <div className="mb-12 flex justify-center">
                <div className="bg-gray-800/50 rounded-xl p-6 max-w-2xl w-full backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <MapPinIcon className="w-6 h-6 text-[#40E0D0] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-[#40E0D0] font-semibold text-lg">{venue?.name}</h3>
                      <p className="text-gray-300">
                        {venue?.address}, {venue?.city}, {venue?.province} {venue?.postalCode}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

        {/* Timeline dengan desain yang diperbarui */}
        <div className="relative">
  <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-600"></div>
  
  <div className="space-y-8">
    {timeline.map((item, index) => (
      <div 
        key={index} 
        className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
      >
        <div className={`w-1/2 ${index % 2 === 0 ? 'pl-4 md:pl-8' : 'pr-4 md:pr-8'}`}>
          <div className={`p-4 md:p-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
            item.color === 'coral' ? 'bg-[#FF7F6A]/10' : 'bg-[#40E0D0]/10'
          }`}>
            <div className="flex items-start gap-3">
              <CalendarIcon className={`w-5 h-5 flex-shrink-0 mt-1 ${
                item.color === 'coral' ? 'text-[#FF7F6A]' : 'text-[#40E0D0]'
              }`} />
              <div className="min-w-0 flex-1"> {/* Tambahkan min-w-0 dan flex-1 */}
                <h3 className={`font-bold text-lg break-words whitespace-normal ${
                  item.color === 'coral' ? 'text-[#FF7F6A]' : 'text-[#40E0D0]'
                }`}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 mt-1 break-words whitespace-normal">
                  {item.date}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`w-4 h-4 rounded-full absolute left-1/2 transform -translate-x-1/2 ${
          item.color === 'coral' ? 'bg-[#FF7F6A]' : 'bg-[#40E0D0]'
        }`}></div>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  )}
            {prizes && prizes.length > 0 && (
                <PrizesSection prizes={prizes} />
            )}
        <JoinSection eventId={eventId} requirements={requirements} />
    </>
  );
}
