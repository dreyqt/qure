import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { ServiceCarousel } from '../components/ServiceCarousel';
import { Clients } from '../components/Clients';
import { BlogPreview } from '../components/BlogPreview';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ServiceCarousel />
      <Clients />
      <BlogPreview />
      <Footer />
    </div>
  );
}
