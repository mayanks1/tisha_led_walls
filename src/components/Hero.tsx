import { MessageCircle, Sparkles } from 'lucide-react';

export default function Hero() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917703948857?text=Hi%20Tisha%20LED%20Walls%2C%20I%20want%20to%20book%20an%20LED%20wall.', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      <div className="absolute inset-0 " style={{
        backgroundImage: 'url(https://res.cloudinary.com/dcfouzaii/image/upload/v1763445163/1_rydru9.jpg)', marginTop: '-120px'}}>
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-500 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-600 rounded-full filter blur-[150px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-yellow-400 text-sm font-medium">Premium LED Solutions</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-white">Transform Your</span>
          <br />
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text animate-shimmer">
            Events with LED Screen
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Create unforgettable experiences with our state-of-the-art LED wall rentals.
          Perfect for weddings, corporate events, concerts, and celebrations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleWhatsAppClick}
            className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-lg rounded-full hover:shadow-[0_0_40px_rgba(234,179,8,0.6)] transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            <MessageCircle className="w-6 h-6" />
            Book Now on WhatsApp
            <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
          </button>

          <a
            href="#gallery"
            className="px-8 py-4 border-2 border-yellow-500/50 text-yellow-400 font-bold text-lg rounded-full hover:bg-yellow-500/10 hover:border-yellow-500 transition-all duration-300"
          >
            View Our Work
          </a>
        </div>

        <div className="mt-12 md:mt-20 grid grid-cols-3 gap-2 md:gap-8 max-w-4xl mx-auto">
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
