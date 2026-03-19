import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { blogPosts } from '../data/blog';
import { Link } from 'react-router';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#1E3A5F] to-[#2d5a8f]">
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold mb-4">Blog & Resources</h1>
          <p className="text-xl">Expert Tips, Industry Insights, and Pest Control Education</p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <button className="px-4 py-2 bg-[#FF6B35] text-white rounded-md">All Articles</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-md transition-colors">
                Tips & Advice
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-md transition-colors">
                Prevention
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-md transition-colors">
                Education
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link to={`/blog/${post.slug}`}>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs bg-[#FF6B35] text-white px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="font-bold text-lg mb-3 hover:text-[#FF6B35] transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="flex items-center gap-2 text-[#FF6B35] hover:text-[#e55a2a] text-sm font-semibold transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest pest control tips, industry news, and exclusive offers.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#FF6B35]"
            />
            <button className="bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-6 py-3 rounded-md transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-[#FF6B35] transition-colors">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-bold text-lg mb-2">Pest Library</h3>
              <p className="text-gray-600 text-sm mb-4">
                Learn about different types of pests and how to identify them.
              </p>
              <a href="#" className="text-[#FF6B35] hover:text-[#e55a2a] text-sm font-semibold">
                Explore Library →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-[#FF6B35] transition-colors">
              <div className="text-4xl mb-4">❓</div>
              <h3 className="font-bold text-lg mb-2">FAQ</h3>
              <p className="text-gray-600 text-sm mb-4">
                Find answers to commonly asked questions about our services.
              </p>
              <a href="#" className="text-[#FF6B35] hover:text-[#e55a2a] text-sm font-semibold">
                View FAQs →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-[#FF6B35] transition-colors">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="font-bold text-lg mb-2">Free Guides</h3>
              <p className="text-gray-600 text-sm mb-4">
                Download our comprehensive pest prevention and treatment guides.
              </p>
              <a href="#" className="text-[#FF6B35] hover:text-[#e55a2a] text-sm font-semibold">
                Download Guides →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
