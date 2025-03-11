
import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedArticle from '../components/FeaturedArticle';
import ArticleCard from '../components/ArticleCard';

const Index = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-architect-light overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1545438992-b38e4c8949e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            alt="Modern architecture in Hyderabad" 
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10 max-w-5xl text-center">
          <span className="inline-block text-architect-accent font-medium mb-4 animate-slide-in">The Leading Architecture Blog</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-architect-dark">
            Exploring Architectural Excellence in Hyderabad
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 md:max-w-3xl mx-auto">
            Discover innovative designs, industry trends, and the expertise of Hyderabad's finest architects through our curated articles and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/blog" 
              className="px-8 py-3 bg-architect-dark text-white rounded-md hover:bg-opacity-90 transition-all duration-300"
            >
              Explore Articles
            </Link>
            <a 
              href="https://wallsasia.com/contact-us/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-architect-dark border border-architect-dark rounded-md hover:bg-architect-hover transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-24 bg-architect-muted">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-architect-dark">Featured Article</h2>
            <div className="w-20 h-1 bg-architect-accent mx-auto"></div>
          </div>
          
          <FeaturedArticle 
            title="Modern Home Designs: Transforming Residential Spaces in Hyderabad"
            excerpt="Explore how innovative design philosophies are reshaping residential architecture in Hyderabad, blending traditional elements with contemporary aesthetics for unique living experiences."
            date="May 15, 2023"
            imageSrc="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            slug="modern-home-designs"
            readTime="8 min read"
          />
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-architect-dark">Latest Articles</h2>
            <div className="w-20 h-1 bg-architect-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/blog"
              className="inline-flex items-center justify-center px-8 py-3 bg-architect-dark text-white rounded-md hover:bg-opacity-90 transition-all duration-300"
            >
              View All Articles
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-architect-muted">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-architect-dark">Our Architectural Services</h2>
            <div className="w-20 h-1 bg-architect-accent mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Comprehensive architectural solutions tailored to your needs, delivered by experienced professionals in Hyderabad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 bg-architect-accent/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-architect-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-architect-dark">Residential Architecture</h3>
              <p className="text-gray-600 mb-4">
                Custom home designs, renovations, and expansions that reflect your lifestyle and preferences.
              </p>
              <a 
                href="https://wallsasia.com/markets/residential-architect/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-architect-accent font-medium hover:underline inline-flex items-center"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 bg-architect-accent/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-architect-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-architect-dark">Commercial Architecture</h3>
              <p className="text-gray-600 mb-4">
                Functional and aesthetically pleasing designs for offices, retail spaces, and corporate buildings.
              </p>
              <a 
                href="https://wallsasia.com/markets/commercial-architect/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-architect-accent font-medium hover:underline inline-flex items-center"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 bg-architect-accent/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-architect-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-architect-dark">Interior Design</h3>
              <p className="text-gray-600 mb-4">
                Transforming interior spaces with creative solutions that enhance functionality and aesthetic appeal.
              </p>
              <a 
                href="https://wallsasia.com/services/interior-designers-in-hyderabad/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-architect-accent font-medium hover:underline inline-flex items-center"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-architect-dark text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Connect with Hyderabad's top architects to bring your vision to life. From concept to completion, we're with you every step of the way.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wallsasia.com/contact-us/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-architect-dark rounded-md hover:bg-opacity-90 transition-all duration-300 text-center"
            >
              Contact Us
            </a>
            <a 
              href="https://wallsasia.com/projects-portfolio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent text-white border border-white rounded-md hover:bg-white/10 transition-all duration-300 text-center"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
