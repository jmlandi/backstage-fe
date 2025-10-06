import HeroSection from './components/hero-section';
import EventsSection from './components/events-section';
import ArtistsSection from './components/artists-section';
import AboutSection from './components/about-section';
import ContactSection from './components/contact-section';

export default function Home() {
  return (
    <>
      {/* Main landing sections */}
      <HeroSection />
      <EventsSection />
      <ArtistsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
