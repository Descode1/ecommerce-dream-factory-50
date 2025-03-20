
import React from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Trash, Minus, Plus } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';
import { Link } from 'react-router-dom';

interface CartItemProps {
  item: Product & { quantity: number };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { id, name, price, image, quantity } = item;
  
  const incrementQuantity = () => {
    updateQuantity(id, quantity + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    } else {
      removeFromCart(id);
    }
  };

  return (
    <div className="flex items-start py-6 space-x-4 animate-fade-in">
      <Link to={`/product/${id}`} className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded overflow-hidden hover:opacity-90 transition-opacity">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </Link>
      
      <div className="flex-grow min-w-0">
        <Link to={`/product/${id}`} className="font-medium hover:underline line-clamp-1">
          {name}
        </Link>
        
        <div className="mt-1 text-sm text-gray-500">
          ${price.toFixed(2)} × {quantity} = ${(price * quantity).toFixed(2)}
        </div>
        
        <div className="mt-3 flex items-center space-x-3">
          <div className="flex items-center border border-gray-200 rounded">
            <button
              onClick={decrementQuantity}
              className="p-1.5 hover:bg-gray-50 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3 w-3" />
            </button>
            
            <span className="w-8 text-center text-sm">{quantity}</span>
            
            <button
              onClick={incrementQuantity}
              className="p-1.5 hover:bg-gray-50 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
          
          <button
            onClick={() => removeFromCart(id)}
            className="text-gray-400 hover:text-red-500 transition-colors"
            aria-label="Remove item"
          >
            <Trash className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
