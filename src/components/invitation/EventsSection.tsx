import ScrollReveal from './ScrollReveal';
import OrnamentalDivider from './OrnamentalDivider';
import EventCard from './EventCard';

const events = [
  {
    title: 'Haldi Carnival',
    date: 'Friday, January 23, 2026',
    time: '2 PM onwards',
    venue: 'A-101/102, Dev Aangan, Devchand Nagar, Bhayander (West)',
    description: 'Join us for a vibrant and yellow-filled morning as we celebrate the Haldi ceremony with music, laughter, and floral showers.',
    icon: 'haldi' as const,
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Dev+Aangan+Devchand+Nagar+Bhayander+West'
  },
  {
    title: 'Sangeet',
    date: 'Saturday, January 24, 2026',
    time: '6 PM onwards',
    venue: 'Revanta Suites, Sasunavghar, Mumbai-Ahmedabad Highway, Vasai-Virar',
    description: 'An evening of dance, music, and unforgettable performances as we dance the night away to celebrate love.',
    icon: 'sangeet' as const,
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Revanta+Suites+Sasunavghar'
  },
  {
    title: 'Wedding Ceremony',
    date: 'Sunday, January 25, 2026',
    time: '5 PM onwards',
    venue: 'Centre Park Ground, Behind S.K. Stone, Mira Bhayander Road, Mira Road (East)',
    description: 'Witness the sacred union of two souls as we exchange vows and promises for a lifetime of togetherness.',
    icon: 'wedding' as const,
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Centre+Park+Ground+Mira+Road+East'
  },
];

export const EventsSection = () => {
  return (
    // SEAMLESS FIX: 
    // Uses 'bg-rose-50' as base.
    // The gradient goes 'from-rose-50 to-rose-50' to ensure the bottom edge is identical to the next section.
    <section className="relative py-24 px-6 bg-gradient-to-b from-rose-50 via-pink-50/50 to-rose-50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <ScrollReveal className="text-center mb-20">
          <p className="font-display text-lg text-gray-500 mb-4 tracking-wide">
            The Celebrations
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-pink-600 mb-6">
            Wedding Events
          </h2>
          <OrnamentalDivider variant="elaborate" className="mt-8" />
        </ScrollReveal>

        {/* Events grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
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