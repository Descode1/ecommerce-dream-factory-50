
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Categories from '@/components/home/Categories';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <Categories />
        
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-medium mb-4">
                    Craftsmanship & Quality
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Every product we offer is thoughtfully designed and crafted with meticulous attention 
                    to detail. We partner with skilled artisans who share our commitment to quality and 
                    sustainable practices.
                  </p>
                  <p className="text-gray-600">
                    From the materials we source to the finishing touches, we ensure that each item meets 
                    our exacting standards, resulting in products that are not only beautiful but built to last.
                  </p>
                </div>
                <div className="md:order-first h-64 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                    alt="Craftsmanship"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
