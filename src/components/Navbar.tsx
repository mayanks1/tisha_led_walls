import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917703948857?text=Hi%20Tisha%20LED%20Walls%2C%20I%20want%20to%20book%20an%20LED%20wall.', '_blank');
  };

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-0'
            : 'py-0'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isScrolled
              ? 'bg-black/70 backdrop-blur-2xl border-b border-white/[0.06]'
              : 'bg-transparent'
          }`}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dcfouzaii/image/upload/f_auto,q_auto,w_160/v1763444919/logo_a6xmsh.png"
                  alt="Tisha LED Walls"
                  className="h-14 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(245,158,11,0.7)]"
                />
              </div>
              <div>
                <div
                  className="font-bold text-white text-[18px] leading-tight tracking-tight transition-colors group-hover:text-amber-400"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Tisha LED Walls
                </div>
                <div className="text-[10px] font-medium tracking-[0.15em] text-amber-400/70 uppercase">
                  Bigger Screens · Brighter Moments
                </div>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group
                    ${activeSection === item.label.toLowerCase()
                      ? 'text-amber-400'
                      : 'text-gray-400 hover:text-white'
                    }`}
                  onClick={() => setActiveSection(item.label.toLowerCase())}
                >
                  {item.label}
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300 w-0 group-hover:w-4/5"
                  />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={handleWhatsAppClick}
                id="navbar-whatsapp-cta"
                className="relative flex items-center gap-2 px-5 py-2.5 font-bold text-sm text-black rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #F59E0B, #FCD34D)' }}
              >
                {/* Shimmer sweep */}
                <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/20 transition-colors" />
                <div
                  className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity"
                  style={{
                    boxShadow: '0 0 30px rgba(245,158,11,0.6), 0 0 60px rgba(245,158,11,0.3)',
                  }}
                />
                <MessageCircle className="w-4 h-4 relative z-10" />
                <span className="relative z-10">WhatsApp</span>
                {/* Ping dot */}
                <span className="relative z-10 w-2 h-2 rounded-full bg-green-400">
                  <span className="absolute inset-0 rounded-full bg-green-400 animate-ping" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-10 p-2 text-gray-300 hover:text-amber-400 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <div className={`transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-100'}`}>
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Blur backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-full transition-transform duration-500 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            background: 'linear-gradient(135deg, rgba(10,10,15,0.98), rgba(20,15,5,0.98))',
            borderLeft: '1px solid rgba(245,158,11,0.15)',
          }}
        >
          {/* Drawer ambient glow */}
          <div
            className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          <div className="relative flex flex-col h-full px-6 pt-20 pb-8">
            {/* Mobile Logo */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #F59E0B, #FCD34D)' }}>
                <Zap className="w-5 h-5 text-black" />
              </div>
              <div>
                <div className="font-bold text-white text-base" style={{ fontFamily: 'Outfit, sans-serif' }}>Tisha LED Walls</div>
                <div className="text-[10px] text-amber-400/70 tracking-wider uppercase">Premium LED Rentals</div>
              </div>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-2 flex-1">
              {menuItems.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center justify-between px-4 py-3.5 rounded-xl text-gray-300 hover:text-white font-medium transition-all duration-300 hover:bg-white/[0.05]"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <span>{item.label}</span>
                  <span className="text-amber-500/0 group-hover:text-amber-500/100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                    →
                  </span>
                </a>
              ))}
            </nav>

            {/* Mobile CTA */}
            <button
              onClick={() => { handleWhatsAppClick(); setIsMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 font-bold text-black rounded-2xl mt-6 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
                boxShadow: '0 0 30px rgba(245,158,11,0.4)',
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
