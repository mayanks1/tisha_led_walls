import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';

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
    { name: 'Stage on Rent', id: 'service-stage-on-rent' }
  ];

  return (
    <footer className="bg-gradient-to-b from-black via-black to-yellow-950/20 border-t border-yellow-500/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-10 md:pb-14 mb-10 md:mb-12 border-b border-yellow-500/20">
          <div className="max-w-xl">
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">Ready when you are</p>
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              Make your next event impossible to ignore.
            </h2>
          </div>
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center justify-center gap-2 self-start md:self-center px-5 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.35)] transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Start Planning
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4 mb-10 md:mb-12">
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              {/* <div className="p-2 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg">
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
            <p className="text-sm md:text-base text-gray-400 mb-5 md:mb-6 leading-relaxed">
              Transform your events with state-of-the-art LED screen rentals. Creating unforgettable visual experiences across Gurgaon & Delhi NCR.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/tisha_led_walls/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-yellow-500/20 rounded-lg flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500/50 transition-all"
              >
                <Instagram className="w-5 h-5 text-yellow-400" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61560989414481#"
                target='_blank'
                className="w-10 h-10 bg-white/5 border border-yellow-500/20 rounded-lg flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500/50 transition-all"
              >
                <Facebook className="w-5 h-5 text-yellow-400" />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-yellow-500/20 rounded-lg flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500/50 transition-all"
              >
                <Youtube className="w-5 h-5 text-yellow-400" />
              </a> */}
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              {['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm md:text-base text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Our Services</h3>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href={`#${service.id}`}
                    className="text-sm md:text-base text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h3 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Contact Us</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <div className="min-w-0">
                  <a href="tel:+917703948857" className="text-sm md:text-base text-gray-400 hover:text-yellow-400 transition-colors">
                    +91 77039 48857
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <div className="min-w-0">
                  <a href="mailto:tishaledwalls@gmail.com" className="text-sm md:text-base text-gray-400 hover:text-yellow-400 transition-colors break-words">
                    tishaledwalls@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <div className="min-w-0">
                  <p className="text-sm md:text-base text-gray-400 break-words">
                     928, Jharsa Village, Sector 39, Gurugram, Haryana (122003)
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-yellow-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
              © {currentYear} Tisha LED Walls. All rights reserved.
            </p>
            {/* <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
