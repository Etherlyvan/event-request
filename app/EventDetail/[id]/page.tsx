import { 
    getEventById, 
    getTimelineByEventId, 
    eventPrizes,
    eventRequirements
} from '@/app/EventDetail/[id]/data';
import EventDetail from '@/app/components/EventDetail';
import { notFound } from 'next/navigation';

// Menggunakan type definition yang benar untuk Next.js page props
interface Props {
    params: {
        id: string;
    };
    searchParams: { [key: string]: string | string[] | undefined };
}

export default async function EventDetailPage({ params }: Props) {
    // ... existing code ...
    const { id } = params;
    const event = await getEventById(id);
    const timeline = getTimelineByEventId(id);
    const prizes = eventPrizes[id];
    const requirements = eventRequirements[id];

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
