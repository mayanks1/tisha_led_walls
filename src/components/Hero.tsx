import { ArrowRight, Building2, Heart, MessageCircle, Sparkles } from 'lucide-react';
import { getHighQualityImageUrl } from '../data/seoPages';

export default function Hero() {
  const handleSelectIntent = (category: string) => {
    window.dispatchEvent(new CustomEvent('select-service', { detail: category }));
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      <div className="absolute inset-0 mt-[-120px]">
        <img
          src={getHighQualityImageUrl(
            'https://res.cloudinary.com/dcfouzaii/image/upload/v1763445163/1_rydru9.jpg',
            1800
          )}
          alt="LED wall lighting up a live event stage"
          className="h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-500 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-600 rounded-full filter blur-[150px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 sm:pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-yellow-400 text-sm font-medium">LED Screens &amp; Audio Visual Rental Service</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">LED Screen &amp; LED Wall Rental</span>
          {' '}
          <span className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text animate-shimmer pb-1">
            in Gurgaon
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
          Rent high-clarity LED screens in Gurgaon for luxury weddings, corporate summits and live concerts, backed by complete audio-visual equipment and on-site engineering support.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/917703948857?text=Hi%20Tisha%20LED%20Walls%2C%20I%20want%20to%20book%20an%20LED%20wall."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-lg rounded-full hover:shadow-[0_0_40px_rgba(234,179,8,0.6)] transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            <MessageCircle className="w-6 h-6" />
            Book Now on WhatsApp
            <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
          </a>

          <a
            href="#gallery"
            className="px-8 py-4 border-2 border-yellow-500/50 text-yellow-400 font-bold text-lg rounded-full hover:bg-yellow-500/10 hover:border-yellow-500 transition-all duration-300"
          >
            View Our Work
          </a>
        </div>

        {/* Clickable Google Verified Trust Pill */}
        <div className="mt-8 flex justify-center">
          <a
            href="#reviews"
            className="group inline-flex items-center gap-2.5 rounded-full border border-yellow-400/30 bg-black/75 px-4 py-2 text-xs sm:text-sm font-semibold text-gray-200 backdrop-blur-md shadow-lg transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-400/10 hover:scale-[1.02] active:scale-95"
          >
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white shadow-sm p-0.5">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.52 12.27c0-.78-.07-1.53-.19-2.27H12v4.3h6.48c-.28 1.43-1.12 2.64-2.39 3.44v2.85h3.87c2.27-2.09 3.56-5.18 3.56-8.32z" />
                <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.87-2.85c-1.07.72-2.45 1.14-4.08 1.14-3.14 0-5.8-2.12-6.75-4.98H1.26v3.06C3.22 21.3 7.29 24 12 24z" />
                <path fill="#FBBC05" d="M5.25 14.4c-.24-.72-.38-1.49-.38-2.28s.14-1.56.38-2.28V6.78H1.26C.45 8.38 0 10.14 0 12s.45 3.62 1.26 5.22l3.99-2.82z" />
                <path fill="#EA4335" d="M12 4.7c1.76 0 3.34.6 4.58 1.78l3.42-3.42C17.95 1.21 15.23 0 12 0 7.29 0 3.22 2.7 1.26 6.78l3.99 2.83C6.2 6.82 8.86 4.7 12 4.7z" />
              </svg>
            </div>
            <div className="flex text-yellow-400 text-xs">
              {'★★★★★'}
            </div>
            <span className="font-bold text-white">5.0 Star Rating</span>
            <span className="text-gray-500">·</span>
            <span className="text-yellow-300">62 Verified Google Reviews</span>
            <span className="hidden sm:inline-flex items-center text-xs text-blue-400 font-normal">
              (Live Feedback →)
            </span>
          </a>
        </div>

        {/* Dual-Pillar Intent Cards: Corporate vs Wedding (50/50 Revenue Focus) */}
        <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left">
          {/* Corporate Summits Card */}
          <div
            onClick={() => handleSelectIntent('corporate')}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/40 via-black/70 to-black p-4 backdrop-blur-md transition-all duration-200 hover:border-blue-400 hover:bg-blue-950/50 hover:-translate-y-0.5 shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-400">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    Corporate Summits &amp; AGMs
                  </h3>
                  <p className="text-[11px] text-blue-400 font-medium">
                    DLF Cyber City · Udyog Vihar · Aerocity
                  </p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
            </div>

            <p className="mt-2.5 text-xs leading-relaxed text-gray-300">
              P3 fine-pitch screens calibrated for crisp spreadsheet text &amp; keynote decks. Seamless 4K switchers &amp; GST compliance.
            </p>

            <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-white/10 text-xs">
              <span className="font-semibold text-blue-300">Explore Corporate AV →</span>
              <a
                href="https://wa.me/917703948857?text=Hi%20Tisha%20LED%20Walls%2C%20I%20need%20a%20corporate%20LED%20screen%20quote%20for%20our%20event%20in%20Gurgaon."
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300"
              >
                <MessageCircle className="h-3 w-3" /> WhatsApp Quote
              </a>
            </div>
          </div>

          {/* Weddings & Sangeet Card */}
          <div
            onClick={() => handleSelectIntent('weddings')}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-rose-500/30 bg-gradient-to-br from-rose-950/40 via-black/70 to-black p-4 backdrop-blur-md transition-all duration-200 hover:border-rose-400 hover:bg-rose-950/50 hover:-translate-y-0.5 shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-500/20 border border-rose-400/30 text-rose-400">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-rose-300 transition-colors">
                    Weddings &amp; Sangeet Nights
                  </h3>
                  <p className="text-[11px] text-rose-400 font-medium">
                    Sohna Road Farmhouses · Chattarpur · NCR
                  </p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-rose-400 group-hover:translate-x-1 transition-transform" />
            </div>

            <p className="mt-2.5 text-xs leading-relaxed text-gray-300">
              3840Hz zero-camera flicker P3 stage walls for royal varmala entries &amp; sangeet reels. Line-array sound &amp; DJ sync.
            </p>

            <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-white/10 text-xs">
              <span className="font-semibold text-rose-300">Explore Wedding Setup →</span>
              <a
                href="https://wa.me/917703948857?text=Hi%20Tisha%20LED%20Walls%2C%20I%20need%20a%20wedding%20sangeet%20LED%20wall%20quote%20in%20Gurgaon."
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300"
              >
                <MessageCircle className="h-3 w-3" /> WhatsApp Quote
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-3 gap-2 md:gap-8 max-w-4xl mx-auto">
          <div className="min-w-0 p-2 md:p-6 bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-lg md:rounded-2xl hover:border-yellow-500/50 transition-all duration-300">
            <div className="text-xl md:text-4xl font-bold text-yellow-400 mb-1 md:mb-2">500+</div>
            <div className="text-[10px] leading-tight md:text-base text-gray-300">Events Completed</div>
          </div>
          <div className="min-w-0 p-2 md:p-6 bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-lg md:rounded-2xl hover:border-yellow-500/50 transition-all duration-300">
            <div className="text-xl md:text-4xl font-bold text-yellow-400 mb-1 md:mb-2">24/7</div>
            <div className="text-[10px] leading-tight md:text-base text-gray-300">Support Available</div>
          </div>
          <div className="min-w-0 p-2 md:p-6 bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-lg md:rounded-2xl hover:border-yellow-500/50 transition-all duration-300">
            <div className="text-xl md:text-4xl font-bold text-yellow-400 mb-1 md:mb-2">4K</div>
            <div className="text-[10px] leading-tight md:text-base text-gray-300">Ultra HD Quality</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-yellow-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
