import { Award, Users, Zap, Shield } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Industry Leaders',
      description: 'Years of expertise in LED screen technology and event solutions'
    },
    {
      icon: Users,
      title: 'Professional Team',
      description: 'Dedicated technicians ensuring flawless setup and support'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Tech',
      description: 'Latest 4K LED displays with stunning visual quality'
    },
    {
      icon: Shield,
      title: 'Reliable Service',
      description: '24/7 support and backup equipment for peace of mind'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full filter blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-4">
            <span className="text-yellow-400 text-sm font-semibold">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Elevating Events with
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text"> Premium LED Technology</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tisha LED Walls specializes in providing state-of-the-art LED screen rentals for all types of events.
            From intimate gatherings to grand celebrations, we transform spaces into immersive visual experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Why Choose Tisha LED Walls?</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              We pride ourselves on delivering exceptional visual experiences that captivate audiences and elevate every event.
              Our commitment to quality, reliability, and customer satisfaction sets us apart in the industry.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you're hosting a wedding, corporate event, concert, or private celebration, our team works closely
              with you to ensure your vision comes to life with stunning clarity and impact.
            </p>
            <div className="pt-4">
              <h4 className="text-xl font-bold text-yellow-400 mb-3">Areas We Serve:</h4>
              <p className="text-gray-300 text-lg">
                Gurgaon, Delhi, Noida and surrounding regions across Delhi NCR
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-3xl border border-yellow-500/30 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🎭</div>
                <h4 className="text-2xl font-bold text-white mb-3">Making Every Event Memorable</h4>
                <p className="text-gray-300">
                  With cutting-edge technology and personalized service, we bring your events to life
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl hover:border-yellow-500/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-black" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
