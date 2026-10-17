import { useState, useEffect, useCallback } from 'react';
import {
  X,
  Image as ImageIcon,
  Play,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  MapPin,
  Sparkles,
  Maximize2
} from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  image_url: string;
  video_url: string | null;
  category: 'all' | 'wedding' | 'corporate' | 'concert';
  tag: string;
  location: string;
  aspect?: 'wide' | 'tall' | 'square';
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Royal Wedding LED Stage Backdrop',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763360996/IMG_4793_gxxuqc.jpg',
    video_url: 'https://res.cloudinary.com/dcfouzaii/video/upload/v1763361191/IMG_4743_jvqzkb.mov?auto=compress',
    category: 'wedding',
    tag: 'Wedding & Sangeet',
    location: 'Farmhouse, Gurgaon',
    aspect: 'wide'
  },
  {
    id: '2',
    title: 'High-Resolution Corporate Stage Backdrop',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763361199/IMG_4794_ipv4ds.jpg',
    video_url: 'https://res.cloudinary.com/dcfouzaii/video/upload/v1763361392/IMG_4723_mxhdkk.mov?auto=compress',
    category: 'corporate',
    tag: 'Corporate Summit',
    location: 'Cyber City, Gurugram',
    aspect: 'tall'
  },
  {
    id: '3',
    title: 'Live Sports Screening on Outdoor LED Screen',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763362093/IMG_4797_mplnfh.jpg',
    video_url: 'https://res.cloudinary.com/dcfouzaii/video/upload/v1763362272/IMG_2539_eoabed.mov?auto=compress',
    category: 'concert',
    tag: 'Live Sports & Screening',
    location: 'Golf Course Road, Gurgaon',
    aspect: 'wide'
  },
  {
    id: '4',
    title: 'Corporate Conference & Keynote LED Display',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763474549/IMG_4815_ypgfxe.jpg',
    video_url: null,
    category: 'corporate',
    tag: 'Annual Conference',
    location: 'Sector 29, Gurgaon',
    aspect: 'square'
  },
  {
    id: '5',
    title: 'Annual Institutional & School Gathering Stage',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763474551/IMG_4813_gcbsmm.png',
    video_url: null,
    category: 'corporate',
    tag: 'Auditorium Setup',
    location: 'Delhi NCR',
    aspect: 'square'
  },
  {
    id: '6',
    title: 'Mega Live Concert & Band Stage Setup',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763472679/IMG_4812_umt7jh.jpg',
    video_url: 'https://res.cloudinary.com/dcfouzaii/video/upload/v1763472685/IMG_9809_a43tgs.mov?auto=compress',
    category: 'concert',
    tag: 'Live Music & Concert',
    location: 'Delhi NCR',
    aspect: 'tall'
  },
  {
    id: '7',
    title: 'Ring Ceremony & Engagement LED Visuals',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763472330/IMG_4809_rc8kcm.jpg',
    video_url: 'https://res.cloudinary.com/dcfouzaii/video/upload/v1763472344/IMG_9698_pzikhy.mov?auto=compress',
    category: 'wedding',
    tag: 'Engagement & Reception',
    location: 'Sohna Road, Gurugram',
    aspect: 'wide'
  },
  {
    id: '8',
    title: 'Corporate Awards Night & AV System Setup',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763473380/IMG_5370_eyb8qp.jpg',
    video_url: null,
    category: 'corporate',
    tag: 'Awards Night & AV',
    location: 'Aerocity, Delhi NCR',
    aspect: 'square'
  },
  {
    id: '9',
    title: 'Executive Summit Multi-Screen AV Production',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763473380/IMG_4648_ic3pjf.jpg',
    video_url: null,
    category: 'corporate',
    tag: 'Multi-Screen AV',
    location: 'Udyog Vihar, Gurgaon',
    aspect: 'wide'
  }
];

const categories = [
  { id: 'all', label: 'All Showcases', mobileLabel: 'All Showcases' },
  { id: 'wedding', label: 'Weddings & Sangeet', mobileLabel: 'Weddings' },
  { id: 'corporate', label: 'Corporate & Summits', mobileLabel: 'Corporate' },
  { id: 'concert', label: 'Concerts & Live Events', mobileLabel: 'Concerts' }
] as const;

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]['id']>('all');
  const [activeMediaIndex, setActiveMediaIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setActiveMediaIndex(index);
  };

  const closeLightbox = () => {
    setActiveMediaIndex(null);
  };

  const showNext = useCallback(() => {
    if (activeMediaIndex === null) return;
    setActiveMediaIndex((prev) => ((prev! + 1) % filteredItems.length));
  }, [activeMediaIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (activeMediaIndex === null) return;
    setActiveMediaIndex((prev) => ((prev! - 1 + filteredItems.length) % filteredItems.length));
  }, [activeMediaIndex, filteredItems.length]);

  // Keyboard navigation for modal
  useEffect(() => {
    if (activeMediaIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeMediaIndex, showNext, showPrev]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeMediaIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeMediaIndex]);

  const currentItem = activeMediaIndex !== null ? filteredItems[activeMediaIndex] : null;

  return (
    <section id="gallery" className="relative overflow-hidden bg-[#060807] pt-12 pb-12 sm:pt-14 sm:pb-16">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-yellow-500/10 via-amber-500/5 to-transparent blur-[160px]" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-yellow-500/[0.06] blur-[140px]" />
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-emerald-500/[0.03] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-yellow-400" />
            Signature Installations
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Our Work in{' '}
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Vivid Action
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            Experience our high-definition LED screens, modular stage backdrops, and complete audio visual setups captured live across weddings, corporate summits, and music events in Gurgaon &amp; Delhi NCR.
          </p>

          {/* Interactive Category Filter - Balanced 2x2 on Mobile, Centered Pills on Desktop */}
          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = cat.id === 'all'
                ? galleryItems.length
                : galleryItems.filter((i) => i.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group relative flex items-center justify-between gap-2 rounded-2xl px-3.5 py-2.5 text-xs font-semibold transition-all duration-300 sm:inline-flex sm:w-auto sm:justify-center sm:rounded-full sm:px-5 sm:py-2.5 sm:text-sm ${
                    isActive
                      ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-[0_0_20px_rgba(250,204,21,0.35)]'
                      : 'border border-white/10 bg-white/[0.04] text-gray-300 hover:border-yellow-400/40 hover:bg-white/[0.08] hover:text-white'
                  }`}
                >
                  <span className="truncate">
                    <span className="sm:hidden">{cat.mobileLabel}</span>
                    <span className="hidden sm:inline">{cat.label}</span>
                  </span>
                  <span
                    className={`inline-flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[11px] font-bold sm:px-2 sm:text-xs ${
                      isActive
                        ? 'bg-black/25 text-black'
                        : 'bg-white/10 text-gray-400 group-hover:text-white'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {filteredItems.map((item, index) => {
            const isVideo = Boolean(item.video_url);

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative isolate flex flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-5 shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1.5 hover:border-yellow-400/50 hover:shadow-[0_25px_50px_rgba(250,204,21,0.15)] cursor-pointer min-h-[340px] sm:min-h-[380px]"
              >
                {/* Background Image with Cloudinary dynamic optimization */}
                <img
                  src={item.image_url.replace('/upload/', '/upload/f_auto,q_auto,w_1000/')}
                  alt={`${item.title} | LED wall and event setup by Tisha LED Walls, Gurgaon`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Layered cinematic gradients */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-60" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-xs font-semibold tracking-wide text-yellow-300 backdrop-blur-md">
                    <Sparkles className="h-3 w-3 text-yellow-400" />
                    {item.tag}
                  </span>

                  {isVideo ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/20 px-3 py-1 text-xs font-bold text-yellow-300 backdrop-blur-md animate-pulse">
                      <Play className="h-3 w-3 fill-yellow-300 text-yellow-300" />
                      Live Reel
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-xs font-medium text-gray-300 backdrop-blur-md">
                      <ImageIcon className="h-3 w-3 text-gray-300" />
                      4K Photo
                    </span>
                  )}
                </div>

                {/* Center Hover Play Button for Videos */}
                {isVideo && (
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-85 transition-transform duration-300 group-hover:scale-110">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-300/40 bg-black/60 shadow-[0_0_30px_rgba(250,204,21,0.3)] backdrop-blur-md transition-all duration-300 group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black">
                      <Play className="h-7 w-7 text-yellow-400 fill-yellow-400 ml-1 transition group-hover:fill-black group-hover:text-black" />
                    </div>
                  </div>
                )}

                {/* Bottom Card Content */}
                <div className="relative z-10 transition-transform duration-300">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-gray-300">
                    <MapPin className="h-3.5 w-3.5 text-yellow-400" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="mt-1.5 text-xl font-bold tracking-tight text-white transition group-hover:text-yellow-200 sm:text-2xl">
                    {item.title}
                  </h3>

                  {/* Micro action bar sliding up on hover */}
                  <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3 text-xs font-semibold text-yellow-400 opacity-90 transition group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1 text-gray-300 group-hover:text-yellow-300">
                      {isVideo ? 'Tap to watch live reel' : 'Tap to inspect 4K setup'}
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-yellow-400/30 bg-yellow-400/10 transition group-hover:bg-yellow-400 group-hover:text-black">
                      <Maximize2 className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Social Proof & Instagram Banner */}
        <div className="mt-12 sm:mt-14 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.04] via-yellow-400/[0.03] to-white/[0.04] p-8 text-center backdrop-blur-md sm:p-10">
          <div className="mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3.5 py-1 text-xs font-bold text-pink-300">
              Daily Live Stories &amp; Rehearsals
            </span>
            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Want to see our latest stage setups in real time?
            </h3>
            <p className="mt-2 text-sm text-gray-400 sm:text-base">
              Follow our official Instagram page for daily video reels of live concerts, grand wedding pheras, and corporate LED setups across Gurgaon.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://www.instagram.com/tisha_led_walls/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 px-7 py-3 text-sm font-bold text-white shadow-[0_0_30px_rgba(244,63,94,0.35)] transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(244,63,94,0.55)]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Follow @tisha_led_walls
              </a>

              <a
                href="https://wa.me/917703948857?text=Hi%20Tisha%20LED%20Walls%2C%20I%20am%20interested%20in%20discussing%20an%20event%20setup."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-300"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                Enquire for Your Date
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Cinema-Grade Lightbox Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 backdrop-blur-2xl sm:p-6"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
        >
          {/* Top Bar with Counter and Close Button */}
          <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between sm:top-6 sm:left-6 sm:right-6">
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-yellow-400/30 bg-black/60 px-3.5 py-1 text-xs font-bold text-yellow-300 backdrop-blur-md">
                {activeMediaIndex! + 1} / {filteredItems.length}
              </span>
              <span className="hidden sm:inline-flex rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-md">
                {currentItem.tag}
              </span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close modal"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Previous / Next Arrow Controls */}
          {filteredItems.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous item"
                className="absolute left-3 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:scale-110 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black sm:left-6 sm:h-14 sm:w-14"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label="Next item"
                className="absolute right-3 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:scale-110 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black sm:right-6 sm:h-14 sm:w-14"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Main Media Container */}
          <div
            className="relative max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#111311] to-black shadow-[0_25px_80px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex max-h-[68vh] items-center justify-center overflow-hidden bg-black">
              {currentItem.video_url ? (
                <video
                  src={currentItem.video_url}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[68vh] w-full object-contain"
                  controlsList="nodownload"
                  poster={currentItem.image_url.replace('/upload/', '/upload/f_auto,q_auto,w_1200/')}
                />
              ) : (
                <img
                  src={currentItem.image_url.replace('/upload/', '/upload/f_auto,q_90,w_1600/')}
                  alt={currentItem.title}
                  className="max-h-[68vh] w-full object-contain"
                />
              )}
            </div>

            {/* Modal Info Footer & Direct WhatsApp Booking */}
            <div className="flex flex-col gap-4 border-t border-white/10 bg-[#0d0f0d] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-yellow-400">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{currentItem.location}</span>
                  <span className="text-gray-500">•</span>
                  <span>{currentItem.tag}</span>
                </div>
                <h4 className="mt-1 text-lg font-bold text-white sm:text-xl">
                  {currentItem.title}
                </h4>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/917703948857?text=${encodeURIComponent(
                    `Hi Tisha LED Walls, I saw your "${currentItem.title}" in the gallery and would like to check availability and quote for my event.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-3 text-sm font-bold text-black shadow-[0_0_20px_rgba(250,204,21,0.35)] transition duration-300 hover:scale-105 sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" />
                  Enquire About This Setup
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
