import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonialCount = 6;

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya & Rahul Sharma',
      role: 'Wedding Clients',
      image: '👰',
      rating: 5,
      text: 'Tisha LED Walls transformed our wedding into a magical experience! The LED display was stunning, and the team was professional and attentive to every detail. Highly recommended!'
    },
    {
      name: 'Amit Patel',
      role: 'Corporate Event Manager',
      image: '👨‍💼',
      rating: 5,
      text: 'Outstanding service for our product launch! The 4K quality was impressive, and the technical support throughout the event was exceptional. Will definitely book again.'
    },
    {
      name: 'Sneha Desai',
      role: 'Birthday Party Host',
      image: '🎉',
      rating: 5,
      text: 'Made my daughter\'s birthday party unforgettable! The LED wall added such a wow factor. Easy to work with and very professional. Thank you, Tisha LED Walls!'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Conference Organizer',
      image: '📊',
      rating: 5,
      text: 'Perfect setup for our annual conference. Crystal clear visuals, seamless installation, and excellent customer service. The backup equipment policy gave us peace of mind.'
    },
    {
      name: 'Meera & Vikram',
      role: 'Wedding Clients',
      image: '💑',
      rating: 5,
      text: 'The LED wall created the perfect backdrop for our wedding reception. Guests were amazed by the visual quality. Team Tisha made everything so smooth and stress-free!'
    },
    {
      name: 'Sanjay Mehta',
      role: 'Event Planner',
      image: '🎭',
      rating: 5,
      text: 'As an event planner, I\'ve worked with many LED rental companies. Tisha LED Walls stands out for their reliability, quality equipment, and exceptional service. My go-to choice!'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % testimonialCount);
    }, 6000);
    return () => window.clearInterval(rotation);
  }, []);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-yellow-500 rounded-full filter blur-[150px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-4">
            <span className="text-yellow-400 text-sm font-semibold">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            What Our
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text"> Clients Say</span>
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          aria-live="polite"
        >
          <div className="p-6 md:p-10 bg-gradient-to-br from-white/5 via-white/10 to-yellow-500/5 backdrop-blur-sm border border-yellow-500/30 rounded-3xl shadow-[0_0_45px_rgba(234,179,8,0.08)]">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-2xl md:text-3xl">
                  {activeTestimonial.image}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg md:text-xl">{activeTestimonial.name}</h4>
                  <p className="text-gray-400 text-sm md:text-base">{activeTestimonial.role}</p>
                </div>
              </div>
              <Quote className="w-9 h-9 md:w-12 md:h-12 text-yellow-500/30 flex-shrink-0" />
            </div>

            <div className="flex gap-1 mb-5">
              {[...Array(activeTestimonial.rating)].map((_, index) => (
                <Star key={index} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              ))}
            </div>

            <p className="text-gray-200 text-lg md:text-2xl leading-relaxed min-h-28 md:min-h-32">
              &quot;{activeTestimonial.text}&quot;
            </p>

            <div className="flex items-center justify-between mt-8">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Show previous testimonial"
                className="w-11 h-11 rounded-full border border-yellow-500/40 text-yellow-400 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2" aria-label="Testimonial slides">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    aria-current={index === activeIndex ? 'true' : undefined}
                    className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-yellow-400' : 'w-2 bg-yellow-500/30 hover:bg-yellow-500/60'}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={showNext}
                aria-label="Show next testimonial"
                className="w-11 h-11 rounded-full border border-yellow-500/40 text-yellow-400 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-16 text-center">
          <div className="inline-flex max-w-full items-center gap-3 md:gap-6 p-4 md:p-6 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-2xl">
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-yellow-400 mb-1 md:mb-2">500+</div>
              <div className="text-xs md:text-base text-gray-300">Happy Clients</div>
            </div>
            <div className="w-px h-12 md:h-16 bg-yellow-500/30"></div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-yellow-400 mb-1 md:mb-2">4.9/5</div>
              <div className="text-xs md:text-base text-gray-300">Average Rating</div>
            </div>
            <div className="w-px h-12 md:h-16 bg-yellow-500/30"></div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-yellow-400 mb-1 md:mb-2">98%</div>
              <div className="text-xs md:text-base text-gray-300">Repeat Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
