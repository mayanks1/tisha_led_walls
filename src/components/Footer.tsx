import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle, ArrowUpRight, Zap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi Tisha LED Walls, I want to plan an event with you.');
    window.open(`https://wa.me/917703948857?text=${message}`, '_blank');
  };

  const services = [
    { name: 'LED Screen on Rent', id: 'service-led-screen-on-rent' },
    { name: 'Sound System on Rent', id: 'service-sound-system-on-rent' },
    { name: 'PA System on Rent', id: 'service-pa-system-on-rent' },
    { name: 'AV System on Rent', id: 'service-av-system-on-rent' },
    { name: 'Projector on Rent', id: 'service-projector-on-rent' },
    { name: 'LED TV on Rent', id: 'service-led-tv-on-rent' },
    { name: 'Stage on Rent', id: 'service-stage-on-rent' },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#050508', borderTop: '1px solid rgba(245,158,11,0.1)' }}
    >
      {/* Ambient orb */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)', filter: 'blur(100px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top CTA Banner */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-12 md:py-16"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400/70 mb-3">Ready when you are</p>
            <h2
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Make your next event{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F59E0B, #FCD34D)' }}>
                impossible to ignore.
              </span>
            </h2>
          </div>
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="group relative inline-flex items-center gap-3 self-start md:self-center px-7 py-4 font-bold text-black rounded-full overflow-hidden transition-all duration-300 hover:scale-105 flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
              boxShadow: '0 0 0 rgba(245,158,11,0)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 40px rgba(245,158,11,0.5)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 0 rgba(245,158,11,0)';
            }}
          >
            {/* Shimmer */}
            <span className="absolute inset-0 bg-white/30 -translate-x-full skew-x-[-15deg] group-hover:translate-x-[300%] transition-transform duration-700" />
            <MessageCircle className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Start Planning</span>
            <ArrowUpRight className="w-4 h-4 relative z-10" />
          </button>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4 py-12 md:py-16">

          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #F59E0B, #FCD34D)' }}
              >
                <Zap className="w-5 h-5 text-black" />
              </div>
              <div>
                <div className="font-bold text-white text-base" style={{ fontFamily: 'Outfit, sans-serif' }}>Tisha LED Walls</div>
                <div className="text-[10px] text-amber-400/60 tracking-wider uppercase">Bigger Screens · Brighter Moments</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Transform your events with state-of-the-art LED screen rentals. Creating unforgettable visual experiences across Gurgaon & Delhi NCR.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/tisha_led_walls/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg, #E1306C, #833AB4)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'transparent';
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 20px rgba(225,48,108,0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.04)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                }}
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61560989414481#"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg, #1877F2, #0052CC)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'transparent';
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 20px rgba(24,119,242,0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.04)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                }}
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-bold text-sm mb-5 uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group flex items-center gap-2 text-sm text-gray-500 hover:text-amber-400 transition-all duration-300"
                  >
                    <span className="w-3 h-px bg-gray-700 group-hover:w-4 group-hover:bg-amber-400 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-white font-bold text-sm mb-5 uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href={`#${service.id}`}
                    className="group flex items-center gap-2 text-sm text-gray-500 hover:text-amber-400 transition-all duration-300"
                  >
                    <span className="w-3 h-px bg-gray-700 group-hover:w-4 group-hover:bg-amber-400 transition-all duration-300" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h3 className="text-white font-bold text-sm mb-5 uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+917703948857"
                  className="group flex items-start gap-3 text-sm text-gray-500 hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-500/60 flex-shrink-0 mt-0.5" />
                  +91 77039 48857
                </a>
              </li>
              <li>
                <a
                  href="mailto:tishaledwalls@gmail.com"
                  className="group flex items-start gap-3 text-sm text-gray-500 hover:text-amber-400 transition-colors break-words"
                >
                  <Mail className="w-4 h-4 text-amber-500/60 flex-shrink-0 mt-0.5" />
                  tishaledwalls@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-500">
                <MapPin className="w-4 h-4 text-amber-500/60 flex-shrink-0 mt-0.5" />
                <span>928, Jharsa Village, Sector 39, Gurugram, Haryana (122003)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 py-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-gray-600 text-xs text-center md:text-left">
            © {currentYear} Tisha LED Walls. All rights reserved. · Serving Gurgaon, Delhi & Noida.
          </p>
          <div
            className="flex items-center gap-2 text-xs text-gray-700"
          >
            <span>Made with</span>
            <span className="text-red-500">♥</span>
            <span>for unforgettable events</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
