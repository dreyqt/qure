import { Navigation } from '../components/Navigation';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Footer } from '../components/Footer';
import { Building2, Utensils, Hotel, Hospital, Home, Warehouse } from 'lucide-react';

const industries = [
  {
    icon: Hotel,
    title: 'Hospitality',
    description: 'Luxury hotels and resorts',
    clients: ['Montebello Villa Hotel', 'Grand Plaza Resort', 'Skyview Suites'],
    image: 'https://images.unsplash.com/photo-1720540244592-b4124532b318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc3Mzc3NTQzNXww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Utensils,
    title: 'Food Service',
    description: 'Restaurants and cafes',
    clients: ['Dean & Deluca', 'The Grill House', 'Fusion Bistro'],
    image: 'https://images.unsplash.com/photo-1767785990437-dfe1fe516fe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMGNvbW1lcmNpYWx8ZW58MXx8fHwxNzczNzI5MzAwfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Hospital,
    title: 'Healthcare',
    description: 'Hospitals and clinics',
    clients: ['Medical Center Manila', 'Health Plus Clinic', 'Care First Hospital'],
    image: 'https://images.unsplash.com/photo-1710074213379-2a9c2653046a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGhlYWx0aGNhcmUlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NzM3NTgxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Building2,
    title: 'Corporate',
    description: 'Office buildings',
    clients: ['Philippine Airlines', 'Tech Tower', 'Business Hub Center'],
    image: 'https://images.unsplash.com/photo-1694702722584-05adc8802e28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3Mzc4MTE1NHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Home,
    title: 'Residential',
    description: 'Homes and condominiums',
    clients: ['Luxury Estates', 'Condo Living', 'Private Residences'],
    image: 'https://images.unsplash.com/photo-1773558048595-0eb9c121f119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGhvbWUlMjBleHRlcmlvcnxlbnwxfHx8fDE3NzM4MDA5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Warehouse,
    title: 'Industrial',
    description: 'Warehouses and factories',
    clients: ['Manufacturing Plus', 'Storage Solutions', 'Industrial Park'],
    image: 'https://images.unsplash.com/photo-1731847999830-6f71b78d720e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBpbmR1c3RyaWFsJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzczODA0Mzc3fDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

const testimonials = [
  {
    name: 'Carlos Mendoza',
    position: 'General Manager, Montebello Villa Hotel',
    text: 'QUREIT has been our trusted partner for pest control for over 5 years. Their professionalism and attention to detail have helped us maintain the highest standards for our guests.',
    rating: 5
  },
  {
    name: 'Maria Santos',
    position: 'Operations Manager, Dean & Deluca',
    text: 'Food safety is paramount in our business. QUREIT\'s IPM approach has helped us maintain a pest-free environment while meeting all health department requirements.',
    rating: 5
  },
  {
    name: 'Dr. Roberto Cruz',
    position: 'Director, Medical Center Manila',
    text: 'In a healthcare setting, we need pest control solutions that are both effective and safe. QUREIT delivers on both counts with their eco-friendly treatments.',
    rating: 5
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Breadcrumbs crumbs={[{ href: '/', label: 'Home' }, { label: 'Pestfolio' }]} />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#1E3A5F] to-[#2d5a8f]">
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold mb-4">Pestfolio</h1>
          <p className="text-xl">1000+ Satisfied Clients Across Multiple Industries</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#FF6B35] mb-2">1000+</div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF6B35] mb-2">15</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF6B35] mb-2">50+</div>
              <div className="text-gray-600">Corporate Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF6B35] mb-2">99%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From hospitals to homes, restaurants to businesses, we provide quality and personalized pest management services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{industry.title}</h3>
                        <p className="text-sm text-gray-600">{industry.description}</p>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <p className="text-sm text-gray-500 mb-2">Featured Clients:</p>
                      <ul className="space-y-1">
                        {industry.clients.map((client, idx) => (
                          <li key={idx} className="text-sm text-gray-700">• {client}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Trusted By</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800 mb-1">Montebello</div>
                <div className="text-xs text-gray-500">Villa Hotel</div>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">Philippine</div>
                <div className="text-xs text-gray-500">Airlines</div>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-xl font-bold text-gray-800">DEAN & DELUCA</div>
                <div className="text-xs text-gray-500">Gourmet Food</div>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
              <div className="w-20 h-20 rounded-full border-4 border-red-600 flex items-center justify-center mx-auto">
                <div className="text-center">
                  <div className="text-xs font-bold">City of</div>
                  <div className="text-sm font-bold">Manila</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">Real feedback from satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1E3A5F]">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Family of Satisfied Clients</h2>
          <p className="text-lg mb-8">
            Experience the quality and professionalism that has made us the trusted choice for over 1,000 clients.
          </p>
          <button className="bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-8 py-4 rounded-md text-lg transition-colors">
            Schedule Your Free Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
