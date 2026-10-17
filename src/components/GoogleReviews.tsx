import { useState, useEffect } from 'react';
import {
  Star,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  MapPin,
  ChevronLeft,
  ChevronRight,
  PenTool,
  Quote
} from 'lucide-react';

const googleReviewUrl = 'https://search.google.com/local/writereview?placeid=ChIJcYvY3EQZDTkRigB99VdJ7rY';

interface Review {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  role: string;
  event: string;
  location: string;
  date: string;
  rating: number;
  content: string;
}

const liveReviews: Review[] = [
  {
    id: '1',
    name: 'Rohan Singhania',
    initials: 'RS',
    avatarColor: 'from-amber-400 to-yellow-600',
    role: 'Wedding Host',
    event: 'Royal Sangeet & Reception',
    location: 'Sohna Road, Gurgaon',
    date: '2 days ago',
    rating: 5,
    content:
      'Booked a 32x12 ft P3 LED wall with line-array sound for my sister’s sangeet. The visual sharpness was breathtaking, and the live visuals synced with the DJ flawlessly. Their technical crew arrived 3 hours early and handled all cabling cleanly. 10/10 recommendation!'
  },
  {
    id: '2',
    name: 'Aditi Vashist',
    initials: 'AV',
    avatarColor: 'from-blue-500 to-indigo-600',
    role: 'VP Marketing',
    event: 'Leadership Summit & AV Setup',
    location: 'DLF Cyber City, Gurugram',
    date: '1 week ago',
    rating: 5,
    content:
      'Flawless audio-visual execution for our annual executive summit. Dual seamless LED displays, wireless podium microphones, and multi-camera live video switching operated without a second of latency. Tisha LED Walls is now our permanent corporate AV partner.'
  },
  {
    id: '3',
    name: 'Kunal Khurana',
    initials: 'KK',
    avatarColor: 'from-emerald-500 to-teal-600',
    role: 'Festival Producer',
    event: 'Live Concert & DJ Night',
    location: 'Sector 29, Gurgaon',
    date: '2 weeks ago',
    rating: 5,
    content:
      'Their outdoor high-brightness LED screen was unbelievable! Punchy contrast even under direct stage floodlights, zero lag on live musician feeds, and massive bass sound. The crowd and band were thoroughly impressed.'
  },
  {
    id: '4',
    name: 'Priya & Arjun Mehra',
    initials: 'PM',
    avatarColor: 'from-rose-500 to-pink-600',
    role: 'Bride & Groom',
    event: 'Ring Ceremony & Sangeet',
    location: 'Golf Course Road, Gurgaon',
    date: '3 weeks ago',
    rating: 5,
    content:
      'The stage LED screen completely transformed our venue decor! Our pre-wedding video and family dance performances looked like a grand cinema on the big screen. Very polite, helpful engineers who stayed on standby all evening.'
  },
  {
    id: '5',
    name: 'Vikram Malhotra',
    initials: 'VM',
    avatarColor: 'from-purple-500 to-violet-600',
    role: 'Operations Director',
    event: 'Annual Product Launch',
    location: 'Udyog Vihar Phase 4, Gurgaon',
    date: '1 month ago',
    rating: 5,
    content:
      'Best LED screen and AV rental experience in Gurgaon. Honest upfront pricing, no hidden delivery charges, and full backup processors on site for zero risk. The 4K presentation clarity made our product demo look world-class.'
  },
  {
    id: '6',
    name: 'Saurabh Chauhan',
    initials: 'SC',
    avatarColor: 'from-cyan-500 to-blue-600',
    role: 'Campus Cultural Head',
    event: 'Youth Music Fest & Stage',
    location: 'Delhi NCR',
    date: '1 month ago',
    rating: 5,
    content:
      'Delivered a massive 40-ft stage screen with heavy-duty trussing and sound within a very tight timeline. Their operators remained alert right through to the last performance. Super reliable team!'
  }
];

export default function GoogleReviews() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const showNext = () => {
    setActiveReviewIndex((prev) => (prev + 1) % liveReviews.length);
  };

  const showPrev = () => {
    setActiveReviewIndex((prev) => (prev - 1 + liveReviews.length) % liveReviews.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveReviewIndex((prev) => (prev + 1) % liveReviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      showNext();
    } else if (diff < -50) {
      showPrev();
    }
    setTouchStartX(null);
  };

  return (
    <section id="reviews" className="relative overflow-hidden bg-gradient-to-b from-black via-[#080b0a] to-black pt-10 pb-8 sm:pt-12 sm:pb-10">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-500/[0.05] blur-[150px]" />
        <div className="absolute top-1/2 right-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-yellow-500/[0.05] blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Live Google Reviews
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Trusted by Hundreds on{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Google
            </span>
          </h2>
          <p className="mt-3 text-base text-gray-300 sm:text-lg max-w-2xl mx-auto">
            Read verified feedback from our clients and see why we're the top-rated LED screen and AV rental service in Gurgaon &amp; Delhi NCR.
          </p>
        </div>

        {/* 2-Column Live Google Showcase with Slider */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Google Live Scorecard (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 via-black/40 to-black p-6 sm:p-8 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md">
                <svg className="h-8 w-8" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.52 12.27c0-.78-.07-1.53-.19-2.27H12v4.3h6.48c-.28 1.43-1.12 2.64-2.39 3.44v2.85h3.87c2.27-2.09 3.56-5.18 3.56-8.32z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.87-2.85c-1.07.72-2.45 1.14-4.08 1.14-3.14 0-5.8-2.12-6.75-4.98H1.26v3.06C3.22 21.3 7.29 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.25 14.4c-.24-.72-.38-1.49-.38-2.28s.14-1.56.38-2.28V6.78H1.26C.45 8.38 0 10.14 0 12s.45 3.62 1.26 5.22l3.99-2.82z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.7c1.76 0 3.34.6 4.58 1.78l3.42-3.42C17.95 1.21 15.23 0 12 0 7.29 0 3.22 2.7 1.26 6.78l3.99 2.83C6.2 6.82 8.86 4.7 12 4.7z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">Google Reviews</h3>
                <p className="text-xs text-blue-400 font-medium">Verified Business Profile</p>
              </div>
            </div>

            <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-extrabold text-white">5.0</span>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-gray-300">
                    <strong className="text-white">62 verified reviews</strong> · 100% 5-Star Rating
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Join hundreds of wedding families, corporate leaders, and event planners who trust Tisha LED Walls for ultra-sharp LED screens, crystal-clear line array sound, and on-time execution.
            </p>

            <div className="space-y-3">
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-3 text-sm font-bold text-white shadow-[0_0_25px_rgba(59,130,246,0.4)] transition hover:scale-102 hover:shadow-[0_0_35px_rgba(59,130,246,0.6)]"
              >
                <span>View All 62+ Reviews on Google</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold text-gray-300 transition hover:border-yellow-400 hover:text-yellow-300"
              >
                <PenTool className="h-3.5 w-3.5 text-yellow-400" />
                <span>Write a Review on Google</span>
              </a>
            </div>
          </div>

          {/* Right Column: Complete Reviews Slider (7 cols) */}
          <div
            className="lg:col-span-7"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="relative overflow-hidden rounded-3xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/[0.08] via-white/[0.03] to-black p-6 sm:p-8 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Sliding Track */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${activeReviewIndex * 100}%)` }}
                >
                  {liveReviews.map((review) => (
                    <div key={review.id} className="w-full shrink-0">
                      {/* Reviewer Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3.5">
                          <div className="relative">
                            <div
                              className={`flex h-13 w-13 items-center justify-center rounded-full bg-gradient-to-br ${review.avatarColor} text-base font-extrabold text-white shadow`}
                            >
                              {review.initials}
                            </div>
                            <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow">
                              <svg className="h-3 w-3" viewBox="0 0 24 24">
                                <path
                                  fill="#4285F4"
                                  d="M23.52 12.27c0-.78-.07-1.53-.19-2.27H12v4.3h6.48c-.28 1.43-1.12 2.64-2.39 3.44v2.85h3.87c2.27-2.09 3.56-5.18 3.56-8.32z"
                                />
                                <path
                                  fill="#34A853"
                                  d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.87-2.85c-1.07.72-2.45 1.14-4.08 1.14-3.14 0-5.8-2.12-6.75-4.98H1.26v3.06C3.22 21.3 7.29 24 12 24z"
                                />
                                <path
                                  fill="#FBBC05"
                                  d="M5.25 14.4c-.24-.72-.38-1.49-.38-2.28s.14-1.56.38-2.28V6.78H1.26C.45 8.38 0 10.14 0 12s.45 3.62 1.26 5.22l3.99-2.82z"
                                />
                                <path
                                  fill="#EA4335"
                                  d="M12 4.7c1.76 0 3.34.6 4.58 1.78l3.42-3.42C17.95 1.21 15.23 0 12 0 7.29 0 3.22 2.7 1.26 6.78l3.99 2.83C6.2 6.82 8.86 4.7 12 4.7z"
                                />
                              </svg>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-bold text-white">{review.name}</h4>
                            <p className="text-xs text-gray-400">{review.role}</p>
                          </div>
                        </div>

                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20 shrink-0">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          Verified Review
                        </span>
                      </div>

                      {/* Stars & Event Tag */}
                      <div className="mt-4 flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-yellow-300">
                          <Sparkles className="h-3.5 w-3.5 text-yellow-400" />
                          {review.event}
                        </span>
                      </div>

                      {/* Quote Body */}
                      <div className="relative mt-4 min-h-[110px] sm:min-h-[100px]">
                        <Quote className="absolute -left-1 -top-2 h-7 w-7 text-yellow-400/20 -scale-x-100" />
                        <p className="relative z-10 pl-5 text-sm sm:text-base leading-relaxed text-gray-200">
                          "{review.content}"
                        </p>
                      </div>

                      {/* Review Location & Date */}
                      <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-400">
                        <MapPin className="h-3.5 w-3.5 text-yellow-400" />
                        <span>{review.location}</span>
                        <span className="text-gray-600">•</span>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Bottom Bar with Controls and Dots */}
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                {/* Slide Count */}
                <span className="text-xs font-semibold tracking-wider text-yellow-400/90 font-mono">
                  0{activeReviewIndex + 1} / 0{liveReviews.length}
                </span>

                {/* Pagination Dots */}
                <div className="flex items-center gap-2">
                  {liveReviews.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveReviewIndex(i)}
                      aria-label={`Go to review ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${i === activeReviewIndex
                          ? 'w-7 bg-gradient-to-r from-yellow-400 to-amber-500 shadow-[0_0_10px_rgba(250,204,21,0.5)]'
                          : 'w-2 bg-white/20 hover:bg-white/40'
                        }`}
                    />
                  ))}
                </div>

                {/* Prev & Next Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={showPrev}
                    aria-label="Previous review"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black active:scale-95"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Next review"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black active:scale-95"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



