
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts = () => {
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h2 className="text-3xl font-medium tracking-tight mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600">
              Explore our carefully curated selection of premium products that 
              exemplify our commitment to quality and timeless design.
            </p>
          </div>
          
          <Link 
            to="/products" 
            className="inline-flex items-center text-sm font-medium hover:underline group"
          >
            View All Products 
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-up" 
              style={{ '--index': index } as React.CSSProperties}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
