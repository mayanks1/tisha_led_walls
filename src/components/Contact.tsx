import { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/7703948857?text=Hi%20Tisha%20LED%20Walls%2C%20I%20want%20to%20book%20an%20LED%20wall.', '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMessage = `New Enquiry from Website:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AEvent Type: ${formData.eventType}%0AEvent Date: ${formData.eventDate}%0AMessage: ${formData.message}`;

    window.open(`https://wa.me/7703948857?text=${whatsappMessage}`, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: ''
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-yellow-500 rounded-full filter blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-4">
            <span className="text-yellow-400 text-sm font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Make Your Event
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text"> Extraordinary</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to elevate your event? Get in touch with us today for a personalized quote
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12" style={{ 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
          <div className="space-y-8 w-full lg:w-4/5 mx-auto">
            <div className="p-8 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6" style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10%",
                alignItems: "self-start",
                justifyContent: "space-between"
              }}>
                <div className="flex items-start gap-4" style={{ marginTop: '40px', minWidth: '45%' }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <a href="tel:+917703948857" className="text-gray-300 hover:text-yellow-400 transition-colors">
                      +91 77039 48857
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4" style={{ marginTop: '40px', minWidth: '45%' }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
                    <button
                      onClick={handleWhatsAppClick}
                      className="text-gray-300 hover:text-yellow-400 transition-colors text-left"
                      style={{ color: "#ca8a04" }}
                    >
                      Click to chat with us
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4" style={{ minWidth: '45%', marginTop: "40px" }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a href="mailto:tishaledwalls@gmail.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                      tishaledwalls@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4" style={{ minWidth: '45%', marginTop: "40px" }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Service Areas</h4>
                    <p className="text-gray-300">
                      Gurgaon, Delhi, Noida<br />
                      & across Delhi NCR.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4" style={{ minWidth: '45%', marginTop: '30px' }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Working Hours</h4>
                    <p className="text-gray-300">
                      24/7 Support Available<br />
                      Response within 2 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <button
              onClick={handleWhatsAppClick}
              className="w-full flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-xl rounded-2xl hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-7 h-7" />
              Quick Chat on WhatsApp
            </button>
            </div>
          </div>

          {/* <div className="p-8 bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us an Enquiry</h3>
          </div> */}
        </div>
      </div>
    </section>
  );
}
