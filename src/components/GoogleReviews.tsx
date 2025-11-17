import { Star, ExternalLink } from 'lucide-react';

const googleReviewUrl = 'https://share.google/nrqCa0VtP92OsKW56';

export default function GoogleReviews() {

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500 rounded-full filter blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-4">
            <span className="text-yellow-400 text-sm font-semibold">Customer Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Thousands on
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text"> Google</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Read verified reviews from our satisfied clients and see why we're the top-rated LED wall rental service
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center" style={{background: 'white'}}>
                <svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#4285F4" d="M23.52 12.27c0-.78-.07-1.53-.19-2.27H12v4.3h6.48c-.28 1.43-1.12 2.64-2.39 3.44v2.85h3.87c2.27-2.09 3.56-5.18 3.56-8.32z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.87-2.85c-1.07.72-2.45 1.14-4.08 1.14-3.14 0-5.8-2.12-6.75-4.98H1.26v3.06C3.22 21.3 7.29 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.25 14.4c-.24-.72-.38-1.49-.38-2.28s.14-1.56.38-2.28V6.78H1.26C.45 8.38 0 10.14 0 12s.45 3.62 1.26 5.22l3.99-2.82z"/>
                  <path fill="#EA4335" d="M12 4.7c1.76 0 3.34.6 4.58 1.78l3.42-3.42C17.95 1.21 15.23 0 12 0 7.29 0 3.22 2.7 1.26 6.78l3.99 2.83C6.2 6.82 8.86 4.7 12 4.7z"/>
                </svg>

              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Google Reviews</h3>
                <p className="text-blue-400 text-sm">See what customers say</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm">4.9 out of 5 stars from 500+ verified reviews</p>
            </div>

            <p className="text-gray-200 mb-6 leading-relaxed">
              Join hundreds of satisfied clients who have experienced the exceptional service and stunning LED wall displays from Tisha LED Walls.
              Our commitment to quality and customer satisfaction is reflected in our top ratings and glowing reviews.
            </p>

            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              View All Reviews on Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-white font-bold">Verified Customer</h4>
                  <div className="flex gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">
                "Absolutely stunning service! The LED walls transformed our wedding reception. Professional team and exceptional quality."
              </p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-white font-bold">Verified Customer</h4>
                  <div className="flex gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">
                "Best investment for our corporate event. Tisha LED Walls delivered beyond expectations with 24/7 support."
              </p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-white font-bold">Verified Customer</h4>
                  <div className="flex gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">
                "Reliable, professional, and creative. They made our product launch unforgettable with crystal-clear 4K displays."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
