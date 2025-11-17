import { Star, Quote } from 'lucide-react';

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

  return (
    <section id="testimonials" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-yellow-500 rounded-full filter blur-[150px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-4">
            <span className="text-yellow-400 text-sm font-semibold">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text"> Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-yellow-500/20 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-yellow-500/30" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-8 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="w-px h-16 bg-yellow-500/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">4.9/5</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div className="w-px h-16 bg-yellow-500/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-gray-300">Repeat Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
