import { useEffect } from 'react';
import FloatingMotifs from '@/components/invitation/FloatingMotifs';
import HeroSection from '@/components/invitation/HeroSection';
import EventsSection from '@/components/invitation/EventsSection';
import ClosingSection from '@/components/invitation/ClosingSection';
import MusicPlayer from '@/components/invitation/MusicPlayer';

const Index = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = "Sakshi & Pal | Wedding Invitation";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join us for the wedding celebration of Sakshi and Pal in Mira Road. January 25, 2026.');
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden scrollbar-hide">
      {/* Background music player */}
      <MusicPlayer />
      
      {/* Floating decorative motifs */}
      <FloatingMotifs />
      
      {/* Hero / Opening */}
      <HeroSection />
      
      {/* Events section (Now includes Map Links) */}
      <EventsSection />
      
      {/* Closing section */}
      <ClosingSection />
    </main>
  );
};

export default Index;