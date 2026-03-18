import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { blogPosts } from '../data/blog';
import { useParams, Link } from 'react-router';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-[#FF6B35] hover:text-[#e55a2a]">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Article Header */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#FF6B35] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <span className="inline-block text-xs bg-[#FF6B35] text-white px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="text-sm">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{post.date}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-[#FF6B35] transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Share</span>
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {post.content.introduction}
            </p>

            {post.content.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#FF6B35] my-8">
              <p className="text-gray-700 leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-[#1E3A5F] text-white p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-bold mb-4">Need Professional Pest Control?</h3>
            <p className="mb-6">
              Our expert team is ready to help you solve your pest problems with safe, effective solutions.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-6 py-3 rounded-md transition-colors"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              <article key={relatedPost.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link to={`/blog/${relatedPost.slug}`}>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs bg-[#FF6B35] text-white px-3 py-1 rounded-full">
                      {relatedPost.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{relatedPost.date}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${relatedPost.slug}`}>
                    <h3 className="font-bold text-lg mb-3 hover:text-[#FF6B35] transition-colors">
                      {relatedPost.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-4">
                    {relatedPost.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${relatedPost.slug}`}
                    className="text-[#FF6B35] hover:text-[#e55a2a] text-sm font-semibold transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
