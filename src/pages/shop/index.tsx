
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/shop/ProductCard';
import { products, categories } from '@/data/products';
import { CustomButton } from '@/components/ui/custom-button';
import { X } from 'lucide-react';

const Shop = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOption, setSortOption] = useState('featured');
  
  useEffect(() => {
    // Filter products based on category
    let filtered = products;
    
    if (activeCategory) {
      filtered = products.filter(product => product.category === activeCategory);
    }
    
    // Sort products based on selected option
    switch (sortOption) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        filtered = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setFilteredProducts(filtered);
  }, [activeCategory, sortOption]);
  
  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category);
    
    // Update URL params
    const params = new URLSearchParams(location.search);
    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    
    window.history.replaceState(
      {}, 
      '', 
      `${location.pathname}${params.toString() ? `?${params.toString()}` : ''}`
    );
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-medium mb-4">All Products</h1>
            <p className="text-gray-600">
              Browse our collection of thoughtfully designed products for everyday living.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Filters */}
            <div className="lg:w-1/4 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange(null)}
                    className={`text-sm w-full text-left py-1.5 px-3 rounded transition-colors ${
                      activeCategory === null 
                        ? 'bg-gray-100 font-medium' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    All Products
                  </button>
                  
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.name)}
                      className={`text-sm w-full text-left py-1.5 px-3 rounded transition-colors ${
                        activeCategory === category.name 
                          ? 'bg-gray-100 font-medium' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Products */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  {activeCategory && (
                    <div className="flex items-center bg-gray-100 text-sm rounded-full px-3 py-1">
                      <span className="mr-1">Category: {activeCategory}</span>
                      <button 
                        onClick={() => handleCategoryChange(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center">
                  <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="text-sm border-gray-200 rounded focus:ring-0 focus:border-gray-300"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name-asc">Name: A-Z</option>
                  </select>
                </div>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <div 
                      key={product.id}
                      className="animate-fade-up"
                      style={{ '--index': index % 3 } as React.CSSProperties}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <p className="text-gray-600 mb-4">No products found in this category.</p>
                  <CustomButton onClick={() => handleCategoryChange(null)}>
                    View All Products
                  </CustomButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
