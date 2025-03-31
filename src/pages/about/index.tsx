
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-medium mb-4">About Us</h1>
            
            <section className="mb-12">
              <h2 className="text-2xl font-medium mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, our company began with a simple mission: to create high-quality, 
                thoughtfully designed products that enhance everyday living. What started as a small 
                operation has grown into a brand trusted by customers worldwide.
              </p>
              <p className="text-gray-600">
                We believe in the power of good design to improve daily life. Each product in our 
                collection is created with intention, balancing form and function to deliver items 
                that are both beautiful and useful.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-medium mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Quality First</h3>
                  <p className="text-gray-600">
                    We never compromise on quality. Every item undergoes rigorous testing to ensure 
                    it meets our exacting standards and will stand the test of time.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Sustainable Practices</h3>
                  <p className="text-gray-600">
                    We're committed to minimizing our environmental impact through responsible 
                    sourcing, eco-friendly materials, and recyclable packaging.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Customer Satisfaction</h3>
                  <p className="text-gray-600">
                    Your happiness is our priority. We stand behind our products and offer 
                    exceptional customer service to ensure a positive experience.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Fair Labor</h3>
                  <p className="text-gray-600">
                    We partner only with manufacturers who provide safe working conditions and 
                    fair wages for their employees.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-medium mb-4">Our Team</h2>
              <p className="text-gray-600 mb-6">
                Behind every product is a dedicated team of designers, craftspeople, and customer 
                service specialists who share a passion for excellence and a commitment to our values.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-3 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80" 
                      alt="Jane Doe"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium">Jane Doe</h3>
                  <p className="text-sm text-gray-600">Founder & CEO</p>
                </div>
                
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-3 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                      alt="John Smith"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium">John Smith</h3>
                  <p className="text-sm text-gray-600">Head of Design</p>
                </div>
                
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-3 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                      alt="Sarah Johnson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium">Sarah Johnson</h3>
                  <p className="text-sm text-gray-600">Customer Experience</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
