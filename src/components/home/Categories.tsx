
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { cn } from '@/lib/utils';

const Categories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-medium tracking-tight mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600">
            Explore our diverse range of categories, each curated with products that 
            combine form, function, and timeless design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <CategoryCard 
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CategoryCardProps {
  category: { id: number; name: string; image: string };
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
  return (
    <Link 
      to={`/products?category=${category.name}`}
      className={cn(
        "group relative overflow-hidden rounded-lg aspect-square hover-lift",
        "animate-fade-up"
      )}
      style={{ '--index': index } as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
      <img 
        src={category.image} 
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <h3 className="text-lg font-medium text-white">{category.name}</h3>
      </div>
    </Link>
  );
};

export default Categories;
