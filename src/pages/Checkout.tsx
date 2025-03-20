
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/context/CartContext';
import { CustomButton } from '@/components/ui/custom-button';
import { ArrowLeft, CreditCard, Check } from 'lucide-react';
import { toast } from 'sonner';

const Checkout = () => {
  const { cart, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvc: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Redirect to products if cart is empty
  React.useEffect(() => {
    if (cart.length === 0) {
      navigate('/products');
    }
  }, [cart, navigate]);
  
  // Calculate shipping (free over $100)
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate order processing
    setTimeout(() => {
      toast.success('Order placed successfully!', {
        description: 'Thank you for your purchase.',
        action: {
          label: 'View orders',
          onClick: () => console.log('View orders'),
        },
      });
      clearCart();
      navigate('/');
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="mb-6">
            <button
              onClick={() => navigate('/cart')} 
              className="flex items-center text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Cart
            </button>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-medium mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Shipping Information */}
                <div className="space-y-6">
                  <h2 className="text-xl font-medium">Shipping Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formState.firstName}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formState.lastName}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formState.address}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formState.city}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="postalCode" className="block text-sm font-medium mb-1">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formState.postalCode}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formState.country}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Payment Information */}
                <div className="space-y-6">
                  <h2 className="text-xl font-medium">Payment Information</h2>
                  
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formState.cardNumber}
                      onChange={handleChange}
                      placeholder="1234 5678 9012 3456"
                      required
                      className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="cardName" className="block text-sm font-medium mb-1">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={formState.cardName}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-sm font-medium mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiry"
                        name="expiry"
                        value={formState.expiry}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        required
                        className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="cvc" className="block text-sm font-medium mb-1">
                        CVC
                      </label>
                      <input
                        type="text"
                        id="cvc"
                        name="cvc"
                        value={formState.cvc}
                        onChange={handleChange}
                        placeholder="123"
                        required
                        className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Submit Button (mobile only) */}
                <div className="lg:hidden">
                  <CustomButton
                    type="submit"
                    size="lg"
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Processing Order...</>
                    ) : (
                      <>
                        <CreditCard className="h-4 w-4" />
                        Complete Order
                      </>
                    )}
                  </CustomButton>
                </div>
              </form>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24 animate-scale-in">
                <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-start gap-3">
                      <div className="w-16 h-16 rounded bg-gray-100 flex-shrink-0 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-medium text-sm line-clamp-1">{item.name}</h4>
                        <div className="text-sm text-gray-500">
                          ${item.price.toFixed(2)} × {item.quantity}
                        </div>
                      </div>
                      <div className="text-sm">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-3 flex justify-between font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                {/* Submit Button (desktop only) */}
                <div className="hidden lg:block">
                  <CustomButton
                    type="submit"
                    form="checkout-form"
                    size="lg"
                    className="w-full gap-2"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-pulse">Processing Order...</span>
                      </>
                    ) : (
                      <>
                        <CreditCard className="h-4 w-4" />
                        Complete Order
                      </>
                    )}
                  </CustomButton>
                </div>
                
                <div className="mt-4 flex items-center text-sm text-gray-600">
                  <Check className="h-4 w-4 mr-2 text-green-500" />
                  <span>All transactions are secure and encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
