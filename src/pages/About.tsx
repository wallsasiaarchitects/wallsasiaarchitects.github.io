
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="relative py-24 bg-architect-muted">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-architect-dark">
            About Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A premier platform featuring insights, trends, and expertise from Hyderabad's leading architects and design professionals.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-architect-dark">
                Your Source for Architectural Excellence in Hyderabad
              </h2>
              <p className="text-gray-600 mb-4">
                Welcome to Hyderabad Architects Blog, a dedicated platform showcasing architectural innovation, design excellence, and construction expertise in Hyderabad. Our blog serves as a knowledge hub for homeowners, businesses, and design enthusiasts seeking inspiration and guidance for their architectural projects.
              </p>
              <p className="text-gray-600 mb-4">
                With contributions from Hyderabad's leading architects and design professionals, we bring you insightful articles, case studies, and expert advice on various aspects of architecture, interior design, and construction in the context of Hyderabad's unique cultural and climatic requirements.
              </p>
              <p className="text-gray-600">
                Whether you're planning a home renovation, a commercial project, or simply interested in architectural trends, our content aims to inform, inspire, and connect you with the right resources for your architectural needs.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80" 
                alt="Modern architecture" 
                className="rounded-lg shadow-md animate-image-fade"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-architect-accent rounded-lg hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 bg-architect-muted">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-architect-dark">Our Mission</h2>
            <div className="w-20 h-1 bg-architect-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 bg-architect-accent/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-architect-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-architect-dark">Educate & Inform</h3>
              <p className="text-gray-600">
                Providing valuable information and insights on architectural design, construction techniques, and interior design to help our readers make informed decisions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 bg-architect-accent/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-architect-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-architect-dark">Inspire Creativity</h3>
              <p className="text-gray-600">
                Showcasing innovative designs and architectural solutions to inspire creativity and push the boundaries of conventional design thinking.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 bg-architect-accent/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-architect-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-architect-dark">Connect Professionals</h3>
              <p className="text-gray-600">
                Creating a platform that connects clients with the right architectural professionals for their specific project needs in Hyderabad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-architect-dark">Our Editorial Team</h2>
            <div className="w-20 h-1 bg-architect-accent mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Our content is curated by experienced architects, designers, and construction professionals with deep expertise in Hyderabad's architectural landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Team Member" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-architect-dark">Sarah Johnson</h3>
                <p className="text-architect-accent mb-3">Chief Editor, Architect</p>
                <p className="text-gray-600 text-sm">
                  With over 15 years of experience in residential and commercial architecture in Hyderabad, Sarah brings valuable insights and expertise to our content.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Team Member" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-architect-dark">Raj Patel</h3>
                <p className="text-architect-accent mb-3">Content Director, Interior Designer</p>
                <p className="text-gray-600 text-sm">
                  Raj specializes in modern interior design solutions for both residential and commercial spaces, with a focus on functionality and aesthetics.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Team Member" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-architect-dark">Priya Reddy</h3>
                <p className="text-architect-accent mb-3">Senior Writer, Civil Engineer</p>
                <p className="text-gray-600 text-sm">
                  Priya's expertise in civil engineering and construction management adds technical depth and practical insights to our architectural content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-architect-dark text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Have questions about architecture, design, or construction in Hyderabad? Looking to collaborate with us? We'd love to hear from you.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-3 bg-white text-architect-dark rounded-md hover:bg-opacity-90 transition-all duration-300 text-center"
            >
              Contact Us
            </Link>
            <a 
              href="https://wallsasia.com/projects-portfolio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent text-white border border-white rounded-md hover:bg-white/10 transition-all duration-300 text-center"
            >
              View Our Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
