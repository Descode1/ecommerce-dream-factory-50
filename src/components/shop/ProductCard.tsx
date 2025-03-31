
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { CustomButton } from '@/components/ui/custom-button';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };
  
  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block bg-white rounded-lg overflow-hidden hover-lift"
    >
      <div className="zoom-image-container h-64 sm:h-72 relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover zoom-image"
        />
        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <CustomButton 
            size="icon" 
            variant="glass" 
            className="rounded-full shadow-md"
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-4 w-4" />
          </CustomButton>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-gray-700">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
