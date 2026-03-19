import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { blogPosts } from '../data/blog';

export function BlogPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest from Our Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with expert tips, industry insights, and the latest news in pest management.
          </p>
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
                <Link 
                  to={`/blog/${post.slug}`}
                  className="flex items-center gap-2 text-[#FF6B35] hover:text-[#e55a2a] text-sm font-semibold transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/blog"
            className="inline-block bg-[#1E3A5F] hover:bg-[#152d47] text-white px-6 py-3 rounded-md transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}