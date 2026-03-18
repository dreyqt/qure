import { Link, useLocation } from 'react-router';

export function Navigation() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-2">
        <div className="flex items-center">
          <span className="text-[#FF6B35] text-2xl font-bold">QURE</span>
          <span className="text-[#1E3A5F] text-2xl font-bold">IT</span>
        </div>
        <span className="text-xs text-gray-600">PEST CONTROL LLC</span>
      </Link>
      
      <div className="flex gap-8">
        <Link 
          to="/about" 
          className={`text-sm transition-colors ${
            isActive('/about') ? 'text-[#FF6B35] font-semibold' : 'text-gray-700 hover:text-[#FF6B35]'
          }`}
        >
          ABOUT US
        </Link>
        <Link 
          to="/services" 
          className={`text-sm transition-colors ${
            isActive('/services') ? 'text-[#FF6B35] font-semibold' : 'text-gray-700 hover:text-[#FF6B35]'
          }`}
        >
          SERVICES
        </Link>
        <Link 
          to="/portfolio" 
          className={`text-sm transition-colors ${
            isActive('/portfolio') ? 'text-[#FF6B35] font-semibold' : 'text-gray-700 hover:text-[#FF6B35]'
          }`}
        >
          PORTFOLIO
        </Link>
        <Link 
          to="/contact" 
          className={`text-sm transition-colors ${
            isActive('/contact') ? 'text-[#FF6B35] font-semibold' : 'text-gray-700 hover:text-[#FF6B35]'
          }`}
        >
          CONTACT US
        </Link>
      </div>
    </nav>
  );
}