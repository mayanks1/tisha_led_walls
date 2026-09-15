import { useState, useEffect, useRef } from 'react';
import { X, Image as ImageIcon, Play, Camera } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  image_url: string;
  video_url: string | null;
  event_type: string;
  filter: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Wedding LED Display Setup',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763360996/IMG_4793_gxxuqc.jpg',
    video_url: 'https://res.cloudinary.com/dcfouzaii/video/upload/v1763361191/IMG_4743_jvqzkb.mov?auto=compress',
    event_type: 'Wedding',
    filter: 'wedding',
  },
  {
    id: '2',
    title: 'Corporate Event Backdrop',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763361199/IMG_4794_ipv4ds.jpg',
    video_url: 'https://res.cloudinary.com/dcfouzaii/video/upload/v1763361392/IMG_4723_mxhdkk.mov?auto=compress',
    event_type: 'Corporate',
    filter: 'corporate',
  },
  {
    id: '3',
    title: 'Live Sports Broadcast on LED Screen',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763362093/IMG_4797_mplnfh.jpg',
    video_url: 'https://res.cloudinary.com/dcfouzaii/video/upload/v1763362272/IMG_2539_eoabed.mov?auto=compress',
    event_type: 'Live Event',
    filter: 'event',
  },
  {
    id: '4',
    title: 'Corporate Event LED Wall',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763474549/IMG_4815_ypgfxe.jpg',
    video_url: null,
    event_type: 'Corporate',
    filter: 'corporate',
  },
  {
    id: '5',
    title: 'School Event Setup',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763474551/IMG_4813_gcbsmm.png',
    video_url: null,
    event_type: 'Conference',
    filter: 'event',
  },
  {
    id: '6',
    title: 'Live Concert Setup',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763472679/IMG_4812_umt7jh.jpg',
    video_url: 'https://res.cloudinary.com/dcfouzaii/video/upload/v1763472685/IMG_9809_a43tgs.mov?auto=compress',
    event_type: 'Concert',
    filter: 'event',
  },
  {
    id: '7',
    title: 'Engagement Setup',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763472330/IMG_4809_rc8kcm.jpg',
    video_url: 'https://res.cloudinary.com/dcfouzaii/video/upload/v1763472344/IMG_9698_pzikhy.mov?auto=compress',
    event_type: 'Wedding',
    filter: 'wedding',
  },
  {
    id: '8',
    title: 'Corporate Event Display',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763473380/IMG_5370_eyb8qp.jpg',
    video_url: null,
    event_type: 'Corporate',
    filter: 'corporate',
  },
  {
    id: '9',
    title: 'Corporate Meeting LED Display',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763473380/IMG_4648_ic3pjf.jpg',
    video_url: null,
    event_type: 'Corporate',
    filter: 'corporate',
  },
];

const FILTERS = ['All', 'Wedding', 'Corporate', 'Event'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedMedia, setSelectedMedia] = useState<{
    type: 'photo' | 'video';
    photoUrl: string;
    videoUrl?: string;
    title: string;
  } | null>(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = galleryItems.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.filter === activeFilter.toLowerCase();
  });

  return (
    <section
      id="gallery"
      className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050508 0%, #080810 50%, #050508 100%)' }}
    >
      {/* Ambient orb */}
      <div
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)', filter: 'blur(100px)' }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div
          className="text-center mb-12"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease-out' }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold uppercase tracking-widest text-amber-400"
            style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)' }}
          >
            <Camera className="w-3.5 h-3.5" />
            Gallery
          </div>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Our Work in{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #F59E0B, #FCD34D)' }}>
              Action
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore stunning visuals from our past events — see how we bring experiences to life.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className="flex items-center justify-center gap-2 mb-10 flex-wrap"
          style={{ opacity: visible ? 1 : 0, transition: 'all 0.7s ease-out 0.2s' }}
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              style={
                activeFilter === filter
                  ? {
                    background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
                    color: '#000',
                    boxShadow: '0 0 20px rgba(245,158,11,0.4)',
                  }
                  : {
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#9CA3AF',
                  }
              }
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
              style={{
                background: '#111118',
                border: '1px solid rgba(255,255,255,0.06)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'scale(1)' : 'scale(0.95)',
                transition: `all 0.5s ease-out ${index * 0.05}s`,
              }}
              onClick={() =>
                setSelectedMedia({
                  type: item.video_url ? 'video' : 'photo',
                  photoUrl: item.image_url,
                  videoUrl: item.video_url || undefined,
                  title: item.title,
                })
              }
            >
              <img
                src={item.image_url.replace('/upload/', '/upload/f_auto,q_auto,w_700/')}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-400"
                style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.95) 0%, rgba(5,5,8,0.5) 50%, transparent 100%)' }}
              />

              {/* Event type badge */}
              <div
                className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold text-black opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0"
                style={{ background: 'linear-gradient(135deg, #F59E0B, #FCD34D)' }}
              >
                {item.event_type}
              </div>

              {/* Play / image indicator */}
              {item.video_url ? (
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div
                    className="relative w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #F59E0B, #FCD34D)', boxShadow: '0 0 20px rgba(245,158,11,0.6)' }}
                  >
                    <Play className="w-4 h-4 text-black fill-black" />
                    <span className="absolute inset-0 rounded-full animate-ping2" style={{ background: 'rgba(245,158,11,0.4)' }} />
                  </div>
                </div>
              ) : (
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}
                  >
                    <ImageIcon className="w-4 h-4 text-white" />
                  </div>
                </div>
              )}

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-white font-semibold text-sm mb-1 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {item.title}
                </h3>
                <div className="flex items-center gap-1.5 text-amber-400 text-xs">
                  {item.video_url ? (
                    <><Play className="w-3.5 h-3.5" /><span>Play Video</span></>
                  ) : (
                    <><ImageIcon className="w-3.5 h-3.5" /><span>View Image</span></>
                  )}
                </div>
              </div>

              {/* Border glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1.5px rgba(245,158,11,0.5)' }}
              />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div
          className="text-center mt-12"
          style={{ opacity: visible ? 1 : 0, transition: 'all 0.7s ease-out 0.4s' }}
        >
          <p className="text-gray-500 text-sm mb-5">
            Want to see more? Follow us on Instagram for daily updates and behind-the-scenes content.
          </p>
          <a
            href="https://www.instagram.com/tisha_led_walls/"
            target="_blank"
            rel="noopener noreferrer"
            id="gallery-instagram-link"
            className="group inline-flex items-center gap-3 px-8 py-4 font-bold text-white rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #E1306C, #833AB4, #F77737)',
              boxShadow: '0 0 0 rgba(225,48,108,0)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 40px rgba(225,48,108,0.5), 0 0 80px rgba(131,58,180,0.2)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 0 rgba(225,48,108,0)';
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow @tisha_led_walls
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(5,5,8,0.97)', backdropFilter: 'blur(20px)' }}
          onClick={() => setSelectedMedia(null)}
        >
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'slideUp 0.3s ease-out forwards' }}
          >
            <p className="text-center text-gray-400 text-sm mb-4 font-medium">{selectedMedia.title}</p>

            {selectedMedia.type === 'video' && selectedMedia.videoUrl ? (
              <div className="relative rounded-3xl overflow-hidden" style={{ border: '1px solid rgba(245,158,11,0.2)' }}>
                <video
                  src={selectedMedia.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-auto"
                  controlsList="nodownload"
                  poster={selectedMedia.photoUrl}
                />
              </div>
            ) : (
              <div className="relative rounded-3xl overflow-hidden" style={{ border: '1px solid rgba(245,158,11,0.2)' }}>
                <img
                  src={selectedMedia.photoUrl}
                  alt={selectedMedia.title}
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
