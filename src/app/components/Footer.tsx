import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                <span className="text-[#FF6B35] text-2xl font-bold">QURE</span>
                <span className="text-white text-2xl font-bold">IT</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              We are a highly-accredited, reliable, socially-relevant, and environmentally
              conscious provider of pest control services that has been protecting
              our clients from pests for 15 years.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-4 py-2 rounded-md text-sm transition-colors"
            >
              Contact Sales Team
            </Link>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-[#FF6B35]">SERVICES</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/chemical-proofness" className="text-gray-400 hover:text-white transition-colors">Chemical Treatment</Link></li>
              <li><Link to="/services/integrated-pest-management" className="text-gray-400 hover:text-white transition-colors">Integrated Pest Management</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Disinfection Services</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Termite Control</Link></li>
              <li><Link to="/services/ipm-consultancy" className="text-gray-400 hover:text-white transition-colors">IPM Training and Consultancy</Link></li>
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h3 className="font-bold mb-4 text-[#FF6B35]">PORTFOLIO</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Hospitality</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Corporate Interiors</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Dining Interiors</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold mb-4 text-[#FF6B35]">FOLLOW US</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© 2026 QUREIT PEST CONTROL LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}