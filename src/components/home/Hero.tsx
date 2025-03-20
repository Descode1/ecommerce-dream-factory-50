
import React from 'react';
import { Link } from 'react-router-dom';
import { CustomButton } from '@/components/ui/custom-button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#f8f8f8]">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/10 backdrop-blur-xs"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1619119069939-8f6ada5d15f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1623&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
      </div>

      <div className="container relative z-10 h-full mx-auto px-4 md:px-6">
        <div className="flex flex-col justify-center h-full max-w-2xl">
          <div className="space-y-6 animate-fade-up" style={{ '--index': '0' } as React.CSSProperties}>
            <div className="inline-block px-3 py-1 bg-black/5 backdrop-blur-sm rounded-full text-xs font-medium tracking-wider">
              NEW COLLECTION
            </div>
            
            <h1 className="text-4xl md:text-6xl font-medium leading-tight tracking-tight">
              Objects of desire, crafted with care
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              Discover thoughtfully designed products for everyday life, made by skilled artisans with sustainable materials.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <CustomButton asChild size="lg" className="group">
                <Link to="/products">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CustomButton>
              
              <CustomButton asChild variant="outline" size="lg">
                <Link to="/about">Our Story</Link>
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce w-6 h-6 flex items-center justify-center">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
