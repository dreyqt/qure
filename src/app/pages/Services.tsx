import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { services } from '../data/services';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1747659629851-a92bd71149f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXN0JTIwY29udHJvbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzM3NTUxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1E3A5F]/80"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Comprehensive Pest Management Solutions for Every Need</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Eco-<span className="text-green-600">Friendly</span> Pest Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer the most effective pest management solutions available while staying true to our commitment to
              being environmentally conscious. Each service is customized to meet your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-green-600 mt-1">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-6 py-3 rounded-md transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Services?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="font-bold text-lg mb-3">Eco-Friendly Approach</h3>
              <p className="text-gray-600 text-sm">
                All our treatments use environmentally safe products that protect your family and the planet.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-lg mb-3">Targeted Solutions</h3>
              <p className="text-gray-600 text-sm">
                We identify the root cause and apply precise treatments for maximum effectiveness.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-bold text-lg mb-3">Long-Term Protection</h3>
              <p className="text-gray-600 text-sm">
                Our services provide lasting results with warranties and ongoing maintenance options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1E3A5F]">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-lg mb-8">
            Schedule a free consultation and our experts will recommend the best solution for your situation.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-8 py-4 rounded-md text-lg transition-colors"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
