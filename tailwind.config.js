/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        amber: {
          glow: '#F59E0B',
          neon: '#FCD34D',
          deep: '#B45309',
        },
        cyan: {
          glow: '#06B6D4',
        },
        surface: {
          DEFAULT: '#0A0A0F',
          secondary: '#111118',
          card: 'rgba(255,255,255,0.03)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'amber-glow-gradient': 'linear-gradient(135deg, #F59E0B, #FCD34D)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
      },
      keyframes: {
        shimmerSweep: {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(300%) skewX(-15deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(1deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        ping2: {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(245,158,11,0.3)' },
          '50%': { borderColor: 'rgba(245,158,11,0.8)' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        orbDrift: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        tiltIn: {
          '0%': { opacity: '0', transform: 'rotateY(-15deg) scale(0.95)' },
          '100%': { opacity: '1', transform: 'rotateY(0) scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        shimmerSweep: 'shimmerSweep 2s infinite',
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 8s ease-in-out infinite',
        glowPulse: 'glowPulse 3s ease-in-out infinite',
        slideUp: 'slideUp 0.6s ease-out forwards',
        slideInRight: 'slideInRight 0.6s ease-out forwards',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        shimmer: 'shimmer 3s linear infinite',
        ping2: 'ping2 1.5s cubic-bezier(0,0,0.2,1) infinite',
        borderGlow: 'borderGlow 2s ease-in-out infinite',
        cursorBlink: 'cursorBlink 1s step-end infinite',
        gradientShift: 'gradientShift 4s ease infinite',
        orbDrift: 'orbDrift 10s ease-in-out infinite',
        marquee: 'marquee 25s linear infinite',
      },
      boxShadow: {
        'amber-glow': '0 0 30px rgba(245,158,11,0.3), 0 0 60px rgba(245,158,11,0.15)',
        'amber-glow-lg': '0 0 60px rgba(245,158,11,0.4), 0 0 120px rgba(245,158,11,0.2)',
        'cyan-glow': '0 0 30px rgba(6,182,212,0.3)',
        'glass': '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
        'glass-hover': '0 16px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15), 0 0 0 1px rgba(245,158,11,0.3)',
        'card-glow': '0 4px 24px rgba(0,0,0,0.4)',
        'green-glow': '0 0 30px rgba(34,197,94,0.4)',
        'green-glow-lg': '0 0 60px rgba(34,197,94,0.5)',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
