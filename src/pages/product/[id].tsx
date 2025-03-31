
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { CustomButton } from '@/components/ui/custom-button';
import { ArrowRight, Minus, Plus, ShoppingCart } from 'lucide-react';
import ProductCard from '@/components/shop/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  
  const product = products.find(p => p.id === Number(id));
  
  // Related products (same category, excluding current product)
  const relatedProducts = product 
    ? products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
    : [];
  
  useEffect(() => {
    if (!product) {
      navigate('/shop', { replace: true });
    } else {
      // Set default selected color and size if available
      if (product.colors && product.colors.length > 0) {
        setSelectedColor(product.colors[0]);
      }
      
      if (product.sizes && product.sizes.length > 0) {
        setSelectedSize(product.sizes[0]);
      }
    }
  }, [product, navigate]);
  
  if (!product) return null;
  
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  // For demo purposes, we're using the same image for all views
  // In a real app, you might have multiple images per product
  const productImages = [
    product.image,
    product.image,
    product.image,
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-50">
                <img 
                  src={productImages[currentImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover animate-fade-in"
                />
              </div>
              
              <div className="flex space-x-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`relative overflow-hidden aspect-square w-16 rounded-md ${
                      currentImage === index ? 'ring-2 ring-black' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="animate-fade-up">
              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-medium mb-2">{product.name}</h1>
                <p className="text-xl text-gray-800">${product.price.toFixed(2)}</p>
              </div>
              
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              {/* Product Options */}
              <div className="space-y-6 mb-8">
                {/* Colors */}
                {product.colors && product.colors.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium mb-3">Color</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map(color => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`px-3 py-1.5 border rounded text-sm transition-colors ${
                            selectedColor === color 
                              ? 'border-black bg-black text-white' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Sizes */}
                {product.sizes && product.sizes.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium mb-3">Size</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map(size => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-3 py-1.5 border rounded text-sm transition-colors min-w-[40px] ${
                            selectedSize === size 
                              ? 'border-black bg-black text-white' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Quantity */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Quantity</h3>
                  <div className="flex items-center border border-gray-200 rounded w-fit">
                    <button
                      onClick={decrementQuantity}
                      className="px-3 py-2 hover:bg-gray-50 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    
                    <span className="w-10 text-center">{quantity}</span>
                    
                    <button
                      onClick={incrementQuantity}
                      className="px-3 py-2 hover:bg-gray-50 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <CustomButton
                  size="xl"
                  className="flex-1 gap-2"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </CustomButton>
              </div>
              
              <div className="mt-10 border-t border-gray-200 pt-6">
                <h3 className="text-sm font-medium mb-2">Details</h3>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>Free shipping on orders over $100</li>
                  <li>30-day free returns</li>
                  <li>1-year warranty</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-20">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-medium">You might also like</h2>
                <CustomButton asChild variant="ghost" className="group">
                  <a href="/shop">
                    View All
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </CustomButton>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product, index) => (
                  <div 
                    key={product.id}
                    className="animate-fade-up"
                    style={{ '--index': index } as React.CSSProperties}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
