import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { services } from '../data/services';
import { useParams, Link } from 'react-router';
import { Check, ArrowLeft } from 'lucide-react';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="text-[#FF6B35] hover:text-[#e55a2a]">
            ← Back to Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1E3A5F]/80"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl max-w-3xl">{service.description}</p>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">About This Service</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {service.fullDescription}
              </p>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Benefits</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#FF6B35] rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold mb-6">Get Started Today</h3>
                <p className="text-gray-600 mb-6">
                  Schedule a free consultation with our experts to learn more about this service.
                </p>
                <Link 
                  to="/contact"
                  className="block w-full bg-[#FF6B35] hover:bg-[#e55a2a] text-white text-center px-6 py-3 rounded-md mb-4 transition-colors"
                >
                  Request Free Survey
                </Link>
                <a 
                  href="tel:+639123456789"
                  className="block w-full border-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white text-center px-6 py-3 rounded-md transition-colors"
                >
                  Call Us Now
                </a>

                <div className="mt-8 pt-8 border-t border-gray-300">
                  <h4 className="font-bold mb-4">Other Services</h4>
                  <ul className="space-y-2">
                    {services.filter(s => s.id !== service.id).map((otherService) => (
                      <li key={otherService.id}>
                        <Link 
                          to={`/services/${otherService.slug}`}
                          className="text-gray-600 hover:text-[#FF6B35] transition-colors text-sm"
                        >
                          {otherService.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm">
                Reach out via phone, email, or our website to schedule an inspection.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold mb-2">Inspection</h3>
              <p className="text-gray-600 text-sm">
                Our certified technicians conduct a thorough assessment of your property.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold mb-2">Treatment</h3>
              <p className="text-gray-600 text-sm">
                We implement a customized treatment plan using safe, effective methods.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold mb-2">Follow-Up</h3>
              <p className="text-gray-600 text-sm">
                We monitor results and provide ongoing support to ensure lasting protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
