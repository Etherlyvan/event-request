import { 
    getEventById, 
    getTimelineByEventId, 
    eventPrizes,
    eventRequirements
} from '@/app/EventDetail/[id]/data';
import EventDetail from '@/app/components/EventDetail';
import { notFound } from 'next/navigation';

interface EventDetailPageProps {
    params: {
        id: string;
    };
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
    const { id } = params;
    const event = await getEventById(id);
    const timeline = getTimelineByEventId(id);
    const prizes = eventPrizes[id];
    const requirements = eventRequirements[id];
    // Venue menjadi opsional, tidak perlu dipass jika tidak ada datanya

    if (!event) {
        notFound();
    }

    return (
        <EventDetail 
            data={event} 
            timeline={timeline?.items} 
            prizes={prizes}
            eventId={id}
            requirements={requirements} 
            venue={timeline?.venue} 
        />
    );
}
