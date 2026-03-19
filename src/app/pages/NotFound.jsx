import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Link } from 'react-router';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-2xl text-center">
          <div className="mb-8">
            <span className="text-9xl font-bold text-[#FF6B35]">404</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          
          <p className="text-gray-600 text-lg mb-8">
            Oops! The page you're looking for seems to have been eliminated... just like the pests we handle!
            Let's get you back on track.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-6 py-3 rounded-md transition-colors"
            >
              <Home className="w-5 h-5" />
              Go to Homepage
            </Link>
            <Link 
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white px-6 py-3 rounded-md transition-colors"
            >
              <Search className="w-5 h-5" />
              Browse Services
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="font-bold mb-4">Quick Links</h2>
            <div className="flex gap-6 justify-center flex-wrap text-sm">
              <Link to="/about" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                About Us
              </Link>
              <Link to="/services" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                Services
              </Link>
              <Link to="/portfolio" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                Pestfolio
              </Link>
              <Link to="/blog" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-[#FF6B35] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
