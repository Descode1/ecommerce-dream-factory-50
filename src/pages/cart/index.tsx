
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/context/CartContext';
import CartItem from '@/components/cart/CartItem';
import { CustomButton } from '@/components/ui/custom-button';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

const Cart = () => {
  const { cart, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  // Calculate shipping (free over $100)
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <h1 className="text-2xl md:text-3xl font-medium mb-8">Your Cart</h1>
          
          {cart.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="space-y-1 divide-y">
                  {cart.map(item => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
                
                <div className="mt-6 flex justify-between">
                  <CustomButton 
                    variant="ghost" 
                    className="gap-2"
                    onClick={() => navigate('/shop')}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Continue Shopping
                  </CustomButton>
                  
                  <CustomButton 
                    variant="outline" 
                    onClick={clearCart}
                  >
                    Clear Cart
                  </CustomButton>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-lg p-6 animate-scale-in">
                  <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    
                    {shipping > 0 && (
                      <div className="text-xs text-gray-500 pt-1">
                        Free shipping on orders over $100
                      </div>
                    )}
                    
                    <div className="border-t border-gray-200 pt-3 flex justify-between font-medium">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <CustomButton 
                    size="lg" 
                    className="w-full gap-2"
                    onClick={() => navigate('/checkout')}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Proceed to Checkout
                  </CustomButton>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 max-w-lg mx-auto">
              <div className="text-gray-400 mb-6">
                <ShoppingCart className="h-16 w-16 mx-auto" />
              </div>
              <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any products to your cart yet.
              </p>
              <CustomButton asChild size="lg">
                <Link to="/shop">Start Shopping</Link>
              </CustomButton>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
