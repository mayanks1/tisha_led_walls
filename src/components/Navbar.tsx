import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917703948857?text=Hi%20Tisha%20LED%20Walls%2C%20I%20want%20to%20book%20an%20LED%20wall.', '_blank');
  };

  const menuItems = [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'Reviews', href: '/#reviews' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div
        className="hidden lg:flex items-center justify-between bg-black text-gray-400 text-xs px-4 sm:px-6 lg:px-8 py-2 border-b border-yellow-500/20 transition-all duration-300"
        style={{ display: isScrolled ? 'none' : undefined }}
      >
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-yellow-400" /> 928, Jharsa Village, Sector 39, Gurugram, Haryana 122003
          </span>
        </div>
        <div>Serving: Gurgaon, Delhi, Noida and Across NCR</div>
      </div>
      <nav
        className={`transition-all duration-300 ${isScrolled
          ? 'bg-black/90 backdrop-blur-lg shadow-lg border-b border-yellow-500/20'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/#home">
              <div className="flex items-center gap-3 group cursor-pointer">
                {/* <div className="p-2 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg group-hover:scale-110 transition-transform">
              <Monitor className="w-6 h-6 text-black" />
            </div> */}
                <div>
                  <img src="https://res.cloudinary.com/dcfouzaii/image/upload/f_auto,q_auto,w_160/v1763444919/logo_a6xmsh.png" alt="Tisha LED Walls" className="h-16 w-auto" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Tisha LED Walls</div>
                  <div className="text-xs text-yellow-400">Bigger Screens, Brighter Moments.</div>
                </div>
              </div>
            </Link>
            <div className="hidden xl:flex items-center gap-8">
              {menuItems.map((item) => {
                const className = 'text-gray-300 hover:text-yellow-400 font-medium transition-colors relative group';
                const underline = (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                );

                return (
                  <Link key={item.label} to={item.href} className={className}>
                    {item.label}
                    {underline}
                  </Link>
                );
              })}
            </div>

            <div className="hidden xl:flex items-center gap-4">
              <a
                href="tel:+917703948857"
                className="hidden xl:flex items-center gap-2 text-white hover:text-yellow-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 77039 48857
              </a>
              {/* <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </button> */}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-gray-300 hover:text-yellow-400 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="xl:hidden bg-black/95 backdrop-blur-lg border-t border-yellow-500/20">
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => {
                const className = 'block text-gray-300 hover:text-yellow-400 font-medium py-2 transition-colors';
                const closeMenu = () => setIsMobileMenuOpen(false);

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={closeMenu}
                    className={className}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="tel:+917703948857"
                className="flex items-center justify-center gap-2 py-2 text-yellow-400"
              >
                <Phone className="w-4 h-4" />
                Call +91 77039 48857
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
