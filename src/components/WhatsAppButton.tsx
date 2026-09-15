import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    window.open('https://wa.me/917703948857?text=Hi%20Tisha%20LED%20Walls%2C%20I%20want%20to%20book%20an%20LED%20wall.', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 font-bold text-white rounded-full transition-all duration-400"
      style={{
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        boxShadow: hovered
          ? '0 0 40px rgba(37,211,102,0.6), 0 0 80px rgba(37,211,102,0.2)'
          : '0 4px 24px rgba(37,211,102,0.4)',
        padding: hovered ? '14px 24px' : '14px',
        maxWidth: hovered ? '200px' : '56px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      {/* Dual ping rings */}
      <span
        className="absolute inset-0 rounded-full"
        style={{
          background: 'rgba(37,211,102,0.4)',
          animation: 'ping2 2s cubic-bezier(0,0,0.2,1) infinite',
        }}
      />
      <span
        className="absolute inset-0 rounded-full"
        style={{
          background: 'rgba(37,211,102,0.25)',
          animation: 'ping2 2s cubic-bezier(0,0,0.2,1) infinite',
          animationDelay: '0.75s',
        }}
      />

      {/* Online dot */}
      <span
        className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full z-20"
        style={{ boxShadow: '0 0 8px rgba(239,68,68,0.8)', border: '2px solid #050508' }}
      >
        <span className="absolute inset-0 rounded-full bg-red-400 animate-ping" />
      </span>

      <MessageCircle className="w-7 h-7 relative z-10 flex-shrink-0" />

      {/* Expandable label */}
      <span
        className="relative z-10 text-sm"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(-8px)',
          transition: 'all 0.25s ease 0.1s',
          maxWidth: hovered ? '150px' : '0px',
        }}
      >
        Chat Now
      </span>
    </button>
  );
}
