
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gray-50 py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">ÉSSENCE</h3>
            <p className="text-sm text-gray-600 max-w-xs">
              Curated products that embody simplicity, functionality, and timeless design.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider">Shop</h4>
            <nav className="flex flex-col space-y-2">
              <FooterLink to="/products">All Products</FooterLink>
              <FooterLink to="/products?category=accessories">Accessories</FooterLink>
              <FooterLink to="/products?category=audio">Audio</FooterLink>
              <FooterLink to="/products?category=home-decor">Home Decor</FooterLink>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider">Company</h4>
            <nav className="flex flex-col space-y-2">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/sustainability">Sustainability</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider">Stay Connected</h4>
            <div className="flex flex-col space-y-2">
              <p className="text-sm text-gray-600">
                Subscribe for updates on new products and exclusive offers.
              </p>
              <div className="flex mt-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-white border border-gray-200 flex-grow text-sm outline-none focus:border-black transition-colors"
                />
                <button className="bg-black text-white px-4 py-2 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-600">
            © {currentYear} ÉSSENCE. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <FooterLink to="/terms">Terms</FooterLink>
            <FooterLink to="/privacy">Privacy</FooterLink>
            <FooterLink to="/shipping">Shipping</FooterLink>
            <FooterLink to="/returns">Returns</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => (
  <Link 
    to={to} 
    className="text-sm text-gray-600 hover:text-black transition-colors"
  >
    {children}
  </Link>
);

export default Footer;
