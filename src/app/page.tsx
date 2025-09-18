import HeroSection from './components/hero-section';
import StatsSection from './components/stats-section';
import EventsSection from './components/events-section';
import ArtistsSection from './components/artists-section';
import AboutSection from './components/about-section';
import ContactSection from './components/contact-section';

export default function Home() {
  return (
    <>
      {/* Main landing sections */}
      <HeroSection />
      <StatsSection />
      <EventsSection />
      <ArtistsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
