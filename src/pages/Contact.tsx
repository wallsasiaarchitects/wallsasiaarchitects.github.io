
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="py-24 bg-architect-muted">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-architect-dark">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or need architectural services? Reach out to our team of experts.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-architect-dark">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-architect-accent/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 text-architect-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-architect-dark">Phone</h3>
                    <p className="text-gray-600">+91 799 511 3333</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-architect-accent/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-architect-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-architect-dark">Email</h3>
                    <p className="text-gray-600">info@wallsasia.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-architect-accent/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-architect-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-architect-dark">Head Office</h3>
                    <p className="text-gray-600">
                      H.No.3-6-174/1, IInd Floor, Opp MLA Quarters, Hyderguda,<br />
                      Hyderabad, Telangana, India – 500029
                    </p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-architect-accent hover:underline inline-block mt-2"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-architect-accent/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-architect-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-architect-dark">Branch Office</h3>
                    <p className="text-gray-600">
                      Fantasy Square building, IIIrd floor, opp. Bio Diversity,<br />
                      Gachibowli, Serilingampalle (M), Telangana 500032
                    </p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-architect-accent hover:underline inline-block mt-2"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4 text-architect-dark">Working Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-architect-dark">Send Us a Message</h2>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-architect-accent focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-architect-accent focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-architect-accent focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-architect-accent focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-architect-accent focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-architect-dark text-white rounded-md hover:bg-opacity-90 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-architect-muted">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-architect-dark">Our Locations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Visit us at our offices in Hyderabad to discuss your architectural project in person.
            </p>
          </div>
          
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3358193781!2d78.26795839589844!3d17.41262759386725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1653698798657!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-architect-dark text-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Browse our portfolio to see how we've helped clients bring their architectural visions to life.
          </p>
          <a 
            href="https://wallsasia.com/projects-portfolio/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-architect-dark rounded-md hover:bg-opacity-90 transition-all duration-300"
          >
            View Our Portfolio
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
