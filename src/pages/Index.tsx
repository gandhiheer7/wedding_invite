import { useEffect } from 'react';
import FloatingMotifs from '@/components/invitation/FloatingMotifs';
import HeroSection from '@/components/invitation/HeroSection';
import EventsSection from '@/components/invitation/EventsSection';
import VenueSection from '@/components/invitation/VenueSection';
import ClosingSection from '@/components/invitation/ClosingSection';

const Index = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = "Priya & Arjun | Wedding Invitation";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join us for the wedding celebration of Priya and Arjun in Udaipur, Rajasthan. February 14-16, 2025.');
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden scrollbar-hide">
      {/* Floating decorative motifs */}
      <FloatingMotifs />
      
      {/* Hero / Opening */}
      <HeroSection />
      
      {/* Events section */}
      <EventsSection />
      
      {/* Venue section */}
      <VenueSection />
      
      {/* Closing section */}
      <ClosingSection />
      
      {/* Footer */}
      <footer className="relative py-8 text-center bg-card">
        <p className="font-body text-sm text-muted-foreground">
          Made with love for Priya & Arjun
        </p>
      </footer>
    </main>
  );
};

export default Index;
