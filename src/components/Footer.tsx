import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  ArrowUp,
  Sparkles,
  ShieldCheck,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi Tisha LED Walls, I want to plan an event with you.');
    window.open(`https://wa.me/917703948857?text=${message}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: 'LED Screen on Rent', href: '/led-screen-rental-gurgaon' },
    { name: 'LED Wall Rental in Gurgaon', href: '/led-wall-rental-gurgaon' },
    { name: 'Audio Visual Equipment Rental', href: '/audio-visual-equipment-rental-gurgaon' },
    { name: 'Outdoor LED Screen on Rent', href: '/outdoor-led-screen-on-rent-gurgaon' },
    { name: 'LED Wall for Weddings', href: '/led-wall-for-wedding-gurgaon' },
    { name: 'Stage Setup in Gurgaon', href: '/stage-setup-gurgaon' },
    { name: 'Sound System on Rent', href: '/#service-sound-system-on-rent' },
    { name: 'PA System on Rent', href: '/#service-pa-system-on-rent' },
    { name: 'AV System on Rent', href: '/#service-av-system-on-rent' },
    { name: 'DJ Services in Gurgaon', href: '/dj-services-gurgaon' },
    { name: 'Live Band for Events', href: '/live-band-gurgaon' },
    { name: 'Event Decoration', href: '/event-decoration-gurgaon' },
    { name: 'Event Services', href: '/event-services-gurgaon' },
    { name: 'Projector on Rent', href: '/#service-projector-on-rent' },
    { name: 'LED TV & Standee on Rent', href: '/led-tv-standee-rental-gurgaon' },
    { name: 'LED Wall Size Guide', href: '/led-wall-size-and-pixel-pitch-guide' },
    { name: 'Stage on Rent', href: '/#service-stage-on-rent' },
    { name: 'Stage Lighting & Trussing', href: '/#services' }
  ];

  const quickLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About Us', href: '/#about' },
    { name: 'Our Services', href: '/#services' },
    { name: 'Event Gallery', href: '/#gallery' },
    { name: 'Google Reviews', href: '/#reviews' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'WhatsApp Quote', href: 'https://wa.me/917703948857?text=Hi%20Tisha%20LED%20Walls%2C%20I%20want%20to%20plan%20an%20event.' }
  ];

  return (
    <footer className="bg-gradient-to-b from-black via-[#090c0a] to-[#060807] border-t border-yellow-500/20 relative overflow-hidden">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-500/[0.06] blur-[150px]" />
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-amber-500/[0.04] blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative z-10">
        {/* Top CTA Banner */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 md:pb-10 mb-10 border-b border-white/10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/[0.07] px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wider text-yellow-300">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              Ready when you are
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Make your next event impossible to ignore.
            </h2>
          </div>
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center justify-center gap-2 self-start md:self-center px-6 py-3.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-full shadow-[0_0_25px_rgba(250,204,21,0.3)] hover:shadow-[0_0_35px_rgba(250,204,21,0.5)] hover:scale-105 transition-all text-sm sm:text-base"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Start Planning on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8 mb-10 md:mb-12">
          {/* Brand & Social Column (4 cols) */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://res.cloudinary.com/dcfouzaii/image/upload/f_auto,q_auto,w_160/v1763444919/logo_a6xmsh.png"
                alt="Tisha LED Walls"
                className="h-12 sm:h-14 w-auto"
                loading="lazy"
                decoding="async"
              />
              <div>
                <div className="text-lg sm:text-xl font-bold text-white">Tisha LED Walls</div>
                <div className="text-xs font-medium text-yellow-400">Bigger Screens, Brighter Moments.</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 mb-5 leading-relaxed max-w-sm">
              Premier high-definition LED screens, modular stage backdrops, and complete audio visual rentals across Gurugram, Delhi, and Delhi NCR.
            </p>

            {/* Micro Trust Chips */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-400/20 bg-yellow-400/[0.05] px-2.5 py-1 text-[11px] font-semibold text-yellow-300">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                4.9/5 Rating
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-gray-300">
                <ShieldCheck className="h-3 w-3 text-emerald-400" />
                Zero Downtime Backup
              </span>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/tisha_led_walls/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-300 transition hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-400"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61560989414481#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-300 transition hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917703948857"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-300 transition hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column - Balanced 2-Column Grid on Mobile, Clean Column on Desktop */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h3 className="text-white font-bold text-sm sm:text-base mb-4 tracking-wide flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2 sm:grid-cols-1 sm:space-y-2 sm:gap-y-0">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  {item.href.startsWith('http') ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-gray-400 hover:text-yellow-300 transition-colors inline-flex items-center gap-1"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="h-3 w-3 text-yellow-400/70" />
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-xs sm:text-sm text-gray-400 hover:text-yellow-300 transition-colors inline-block"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services - Perfectly Balanced 2x9 Grid on Mobile & Desktop */}
          <div className="sm:col-span-2 lg:col-span-4">
            <h3 className="text-white font-bold text-sm sm:text-base mb-4 tracking-wide flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
              Our Services
            </h3>
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-5 gap-y-2 sm:gap-y-2.5">
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="text-xs sm:text-sm text-gray-400 hover:text-yellow-300 hover:translate-x-0.5 transition-all truncate"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Us Column - Rich Interactive Micro Cards */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h3 className="text-white font-bold text-sm sm:text-base mb-4 tracking-wide flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
              Contact Us
            </h3>
            <div className="space-y-2.5">
              <a
                href="tel:+917703948857"
                className="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] p-2.5 transition hover:border-yellow-400/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 group-hover:bg-yellow-400 group-hover:text-black transition">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Call Directly</div>
                  <div className="text-xs font-semibold text-gray-200 group-hover:text-yellow-300 truncate">
                    +91 77039 48857
                  </div>
                </div>
              </a>

              <a
                href="mailto:tishaledwalls@gmail.com"
                className="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] p-2.5 transition hover:border-yellow-400/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 group-hover:bg-yellow-400 group-hover:text-black transition">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Email Us</div>
                  <div className="text-xs font-semibold text-gray-200 group-hover:text-yellow-300 truncate">
                    tishaledwalls@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=28.4595,77.0266"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] p-2.5 transition hover:border-yellow-400/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mt-0.5 group-hover:bg-yellow-400 group-hover:text-black transition">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Warehouse &amp; Office</div>
                  <div className="text-xs text-gray-300 group-hover:text-yellow-300 leading-snug">
                    Sector 39, Jharsa Village, Gurugram
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top Bar */}
        <div className="pt-6 md:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Tisha LED Walls. All rights reserved. Serving Gurugram &amp; Delhi NCR.
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold text-gray-300 transition hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:text-yellow-300"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

