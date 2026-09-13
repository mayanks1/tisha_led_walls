import { useState } from 'react';
import { X, Image as ImageIcon, Play } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  image_url: string;
  video_url: string | null;
  event_type: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Wedding LED Display Setup',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763360996/IMG_4793_gxxuqc.jpg',
    video_url: 'https://res.cloudinary.com/dcfouzaii/video/upload/v1763361191/IMG_4743_jvqzkb.mov?auto=compress',
    event_type: 'wedding'
  },
  {
    id: '2',
    title: 'Corporate Event Backdrop',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763361199/IMG_4794_ipv4ds.jpg',
    video_url: 'https://res.cloudinary.com/dcfouzaii/video/upload/v1763361392/IMG_4723_mxhdkk.mov?auto=compress',
    event_type: 'corporate'
  },
  {
    id: '3',
    title: 'Live Sports Broadcast on LED Screen',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763362093/IMG_4797_mplnfh.jpg',
    video_url: 'https://res.cloudinary.com/dcfouzaii/video/upload/v1763362272/IMG_2539_eoabed.mov?auto=compress',
    event_type: 'Live Event'
  },
  {
    id: '4',
    title: 'Corporate Event LED Wall',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763474549/IMG_4815_ypgfxe.jpg',
    video_url: null,
    event_type: 'corporate'
  },
  {
    id: '5',
    title: 'School Event Setup',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763474551/IMG_4813_gcbsmm.png',
    video_url: null,
    event_type: 'conference'
  },
  {
    id: '6',
    title: 'Live Concert Setup',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763472679/IMG_4812_umt7jh.jpg',
    video_url: 'https://res.cloudinary.com/dcfouzaii/video/upload/v1763472685/IMG_9809_a43tgs.mov?auto=compress',
    event_type: 'event'
  },
  {
    id: '7',
    title: 'Engagement Setup',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763472330/IMG_4809_rc8kcm.jpg',
    video_url: 'https://res.cloudinary.com/dcfouzaii/video/upload/v1763472344/IMG_9698_pzikhy.mov?auto=compress',
    event_type: 'event'
  },
  {
    id: '8',
    title: 'Corporate Event Display',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763473380/IMG_5370_eyb8qp.jpg',
    video_url: null,
    event_type: 'corporate'
  },
  {
    id: '9',
    title: 'Corporate Meeting LED Display',
    image_url: 'https://res.cloudinary.com/dcfouzaii/image/upload/v1763473380/IMG_4648_ic3pjf.jpg',
    video_url: null,
    event_type: 'corporate'
  }
];

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'photo' | 'video'; photoUrl: string; videoUrl?: string; title: string } | null>(null);

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full filter blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-4">
            <span className="text-yellow-400 text-sm font-semibold">Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Work in
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text"> Action</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore stunning visuals from our past events and see how we bring experiences to life
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-gray-800 border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300"
              onClick={() => setSelectedMedia({
                type: item.video_url ? 'video' : 'photo',
                photoUrl: item.image_url,
                videoUrl: item.video_url || undefined,
                title: item.title
              })}
            >
              <img
                src={item.image_url.replace('/upload/', '/upload/f_auto,q_auto,w_900/')}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-yellow-400">
                    {item.video_url ? (
                      <>
                        <Play className="w-5 h-5" />
                        <span className="text-sm font-semibold">Play Video</span>
                      </>
                    ) : (
                      <>
                        <ImageIcon className="w-5 h-5" />
                        <span className="text-sm font-semibold">View Image</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {item.video_url && (
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-3 bg-yellow-500 rounded-full shadow-lg animate-pulse">
                    <Play className="w-5 h-5 text-black fill-black" />
                  </div>
                </div>
              )}

              {!item.video_url && (
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 bg-yellow-500 rounded-full">
                    <ImageIcon className="w-5 h-5 text-black" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg mb-6">
            Want to see more? Follow us on Instagram for daily updates and behind-the-scenes content
          </p>
          <a
            href="https://www.instagram.com/tisha_led_walls/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow @tisha_led_walls
          </a>
        </div>
      </div>

      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors z-10"
          >
            <X className="w-6 h-6 text-black" />
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === 'video' && selectedMedia.videoUrl ? (
              <div className="relative bg-black rounded-2xl overflow-hidden">
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
              <img
                src={selectedMedia.photoUrl}
                alt={selectedMedia.title}
                className="w-full h-auto rounded-2xl"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
