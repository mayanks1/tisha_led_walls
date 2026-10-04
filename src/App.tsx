import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import GoogleReviews from './components/GoogleReviews';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const { pathname, hash, key } = useLocation();
  const isContactPage = pathname === '/contact';

  useEffect(() => {
    const title = isContactPage
      ? 'Contact Tisha LED Walls in Gurugram | LED Rentals'
      : 'LED Screen Rental in Gurugram | Tisha LED Walls';
    const description = isContactPage
      ? 'Contact Tisha LED Walls for LED screen and event equipment rentals in Gurugram, Gurgaon, Delhi and Noida. Call, email or WhatsApp for a quote.'
      : 'Rent LED screens and event AV in Gurugram. Tisha LED Walls provides professional setup for weddings, parties, corporate events and live shows.';

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('link[rel="canonical"]')?.setAttribute(
      'href',
      `https://tishaledwalls.pages.dev${isContactPage ? '/contact' : '/'}`
    );
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:url"]')?.setAttribute(
      'content',
      `https://tishaledwalls.pages.dev${isContactPage ? '/contact' : '/'}`
    );
  }, [isContactPage]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [hash, key, pathname]);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main id="home">
              <Hero />
              <About />
              <Services />
              <Gallery />
              <GoogleReviews />
              <Testimonials />
              <Contact />
            </main>
          }
        />
        <Route
          path="/contact"
          element={
            <main>
              <section className="relative isolate overflow-hidden bg-[#080b0a] px-4 pb-12 pt-32 text-center text-white sm:px-6">
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.13),transparent_60%)]" />
                <div className="mx-auto max-w-4xl">
                  <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/[0.07] px-4 py-2 text-sm font-medium text-yellow-300">
                    Gurugram · Delhi NCR
                  </span>
                  <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    Let’s plan your next
                    <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                      unforgettable event
                    </span>
                  </h1>
                  <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
                    Tell us what you’re organising. Our event team will help you find the right LED, sound and stage setup.
                  </p>
                </div>
              </section>
              <Contact showHeading={false} />
            </main>
          }
        />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
