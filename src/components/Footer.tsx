import { Monitor, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-yellow-500/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* <div className="p-2 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg">
                <Monitor className="w-6 h-6 text-black" />
              </div> */}
              <div>
                <img src="https://res.cloudinary.com/dcfouzaii/image/upload/v1763444919/logo_a6xmsh.png" alt="Tisha LED Walls" style={{height:"100px"}} />
              </div>
              <div>
                <div className="text-xl font-bold text-white">Tisha LED Walls</div>
                <div className="text-xs text-yellow-400">Bigger Screens, Brighter Movements.</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
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

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">LED Screen on Rent</li>
              <li className="text-gray-400">Sound System on Rent</li>
              <li className="text-gray-400">Audio Visual System on Rent</li>
              <li className="text-gray-400">PA System on LED</li>
              <li className="text-gray-400">LED TV on Rent</li>
              <li className="text-gray-400">Projector on Rent</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+917703948857" className="text-gray-400 hover:text-yellow-400 transition-colors">
                    +91 77039 48857
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <a href="mailto:tishaledwalls@gmail.com" className="text-gray-400 hover:text-yellow-400 transition-colors">
                    tishaledwalls@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">
                     Opp. Plot No 183, near Parshuram Bhavan,
                    Jharsa, Sector 39, Gurugram, Haryana 122003
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-yellow-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
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
