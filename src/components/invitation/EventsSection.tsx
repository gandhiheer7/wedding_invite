import ScrollReveal from './ScrollReveal';
import OrnamentalDivider from './OrnamentalDivider';
import EventCard from './EventCard';

const events = [
  {
    title: 'Mehendi',
    date: 'Friday, February 14',
    time: '4:00 PM onwards',
    venue: 'The Oberoi Udaivilas, Poolside Lawns',
    description: 'Join us for an afternoon of intricate henna artistry, music, and joyful celebrations as the bride adorns her hands with beautiful mehendi patterns.',
    icon: 'mehendi' as const,
  },
  {
    title: 'Sangeet',
    date: 'Friday, February 14',
    time: '7:30 PM onwards',
    venue: 'The Oberoi Udaivilas, Grand Ballroom',
    description: 'An evening of dance, music, and unforgettable performances as both families come together to celebrate love through rhythm and melody.',
    icon: 'sangeet' as const,
  },
  {
    title: 'Wedding Ceremony',
    date: 'Saturday, February 15',
    time: '7:00 PM onwards',
    venue: 'The Oberoi Udaivilas, Lake View Terrace',
    description: 'Witness the sacred union of two souls under the stars, overlooking the serene waters of Lake Pichola, as we exchange vows in a traditional ceremony.',
    icon: 'wedding' as const,
  },
  {
    title: 'Reception',
    date: 'Sunday, February 16',
    time: '7:00 PM onwards',
    venue: 'The Oberoi Udaivilas, Royal Gardens',
    description: 'A grand celebration to honor the newlyweds with an evening of fine dining, music, and cherished moments with loved ones.',
    icon: 'reception' as const,
  },
];

export const EventsSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-card via-background to-secondary texture-grain">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <p className="font-display text-lg text-primary/70 mb-4 tracking-wide">
            Join us in celebration
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl gold-text mb-6">
            The Celebrations
          </h2>
          <OrnamentalDivider variant="elaborate" className="mt-8" />
        </ScrollReveal>

        {/* Events grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {events.map((event, index) => (
            <EventCard
              key={event.title}
              {...event}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
