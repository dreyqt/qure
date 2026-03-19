import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBzdXBwb3J0fGVufDF8fHx8MTc3MzgwNDM3NXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1E3A5F]/80"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We're Here to Help - Get in Touch Today</p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have a pest problem? Need a quote? Our friendly team is ready to assist you. 
                Contact us today for a free consultation and inspection.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-600">+63 912 345 6789</p>
                    <p className="text-gray-600">+63 917 234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600">info@qureitpestcontrol.com</p>
                    <p className="text-gray-600">support@qureitpestcontrol.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      123 Pest Control Avenue<br />
                      Glenns, Metro Manila<br />
                      Philippines 1234
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed<br />
                      <span className="text-[#FF6B35] font-semibold">Emergency Service: 24/7</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-[#FF6B35] hover:text-white rounded-full flex items-center justify-center transition-colors">
                    <span className="font-bold">f</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-[#FF6B35] hover:text-white rounded-full flex items-center justify-center transition-colors">
                    <span className="font-bold">in</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-[#FF6B35] hover:text-white rounded-full flex items-center justify-center transition-colors">
                    <span className="font-bold">ig</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Request Free Survey</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#FF6B35]"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#FF6B35]"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#FF6B35]"
                    placeholder="+63 912 345 6789"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#FF6B35]"
                  >
                    <option value="">Select a service</option>
                    <option value="chemical-proofness">Chemical Proofness</option>
                    <option value="integrated-pest-management">Integrated Pest Management</option>
                    <option value="ipm-consultancy">IPM Consultancy</option>
                    <option value="professional-treatment">Professional Treatment</option>
                    <option value="not-sure">Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#FF6B35]"
                    placeholder="Tell us about your pest problem..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-6 py-4 rounded-md text-lg font-semibold transition-colors"
                >
                  Submit Request
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service Banner */}
      <section className="py-12 bg-[#FF6B35] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Have a Pest Emergency?</h2>
          <p className="text-lg mb-6">
            We offer 24/7 emergency pest control services. Call us now for immediate assistance.
          </p>
          <a 
            href="tel:+639123456789"
            className="inline-block bg-white text-[#FF6B35] hover:bg-gray-100 px-8 py-3 rounded-md font-bold transition-colors"
          >
            Call Emergency Line: +63 912 345 6789
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
