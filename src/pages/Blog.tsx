
import React from 'react';
import ArticleCard from '../components/ArticleCard';

const Blog = () => {
  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="py-24 bg-architect-muted">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-architect-dark">
            Architecture Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our collection of articles on architecture, design, and construction in Hyderabad. Gain insights from industry experts and stay updated on the latest trends.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ArticleCard 
              title="Modern Home Designs: Transforming Residential Spaces in Hyderabad"
              excerpt="Explore how innovative design philosophies are reshaping residential architecture in Hyderabad, blending traditional elements with contemporary aesthetics for unique living experiences."
              date="May 15, 2023"
              imageSrc="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              slug="modern-home-designs"
              readTime="8 min read"
            />
            
            <ArticleCard 
              title="Commercial Architecture Trends Reshaping Hyderabad's Skyline"
              excerpt="Discover how innovative commercial designs are transforming Hyderabad's urban landscape with sustainable practices and cutting-edge technologies."
              date="April 28, 2023"
              imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              slug="commercial-architecture-trends"
              readTime="6 min read"
            />
            
            <ArticleCard 
              title="Sustainable Architecture: Building a Greener Hyderabad"
              excerpt="Learn how Hyderabad's architects are integrating eco-friendly design principles and sustainable materials to create environmentally conscious buildings."
              date="April 15, 2023"
              imageSrc="https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2399&q=80"
              slug="sustainable-architecture"
              readTime="7 min read"
            />
            
            <ArticleCard 
              title="Modern Office Interiors: Redesigning Workspaces in Hyderabad"
              excerpt="Explore how contemporary office interior design is enhancing productivity and employee well-being in Hyderabad's corporate environments."
              date="March 30, 2023"
              imageSrc="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2301&q=80"
              slug="office-interior-design"
              readTime="5 min read"
            />
            
            <ArticleCard 
              title="Innovative Construction Materials Transforming Hyderabad's Architecture"
              excerpt="An in-depth look at how advanced construction materials are influencing architectural possibilities and structural integrity in Hyderabad's buildings."
              date="March 12, 2023"
              imageSrc="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80"
              slug="construction-materials"
              readTime="6 min read"
            />
            
            <ArticleCard 
              title="Preserving Hyderabad's Architectural Heritage: Modern Approaches"
              excerpt="How Hyderabad's architects are balancing preservation of historical architectural elements with contemporary needs and functionality."
              date="February 28, 2023"
              imageSrc="https://images.unsplash.com/photo-1542321993-8fc36217e26d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
              slug="hyderabad-architectural-heritage"
              readTime="7 min read"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-architect-muted">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-architect-dark">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Stay updated with our latest articles, architectural trends, and industry insights delivered directly to your inbox.
              </p>
            </div>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-architect-accent focus:border-transparent"
                  required
                />
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-architect-dark text-white rounded-md hover:bg-opacity-90 transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from us.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
