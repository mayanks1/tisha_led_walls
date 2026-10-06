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
import SeoLandingPage from './components/SeoLandingPage';
import { useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { getHighQualityImageUrl, homeSeo, seoPages } from './data/seoPages';

const contactSeo = {
  title: 'Contact Tisha LED Walls in Gurugram | Enquire Today',
  description:
    'Contact Tisha LED Walls to enquire about LED wall, screen and event equipment rentals in Gurugram. Call, email or send an event enquiry on WhatsApp.',
  h1: 'Contact Tisha LED Walls in Gurugram',
};

const notFoundSeo = {
  title: 'Page Not Found | Tisha LED Walls',
  description: 'The page you requested could not be found.',
};

function App() {
  const { pathname, hash, key } = useLocation();
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  const isContactPage = normalizedPath === '/contact';
  const isHomePage = normalizedPath === '/';
  const currentSeoPage = seoPages.find((page) => normalizedPath === `/${page.slug}`);

  useEffect(() => {
    const page = isHomePage ? homeSeo : isContactPage ? contactSeo : currentSeoPage ?? notFoundSeo;
    const pageUrl = `https://tishaledwalls.pages.dev${normalizedPath === '/' ? '/' : normalizedPath}`;
    const imageUrl =
      getHighQualityImageUrl(
        currentSeoPage?.imageUrl ??
          'https://res.cloudinary.com/dcfouzaii/image/upload/v1763445163/1_rydru9.jpg',
        1200
      );
    const imageAlt = currentSeoPage?.imageAlt ?? 'LED wall lighting up an event stage';
    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', pageUrl);
    document.querySelector('meta[name="robots"]')?.setAttribute(
      'content',
      currentSeoPage || isHomePage || isContactPage ? 'index, follow' : 'noindex, follow'
    );
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', page.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', page.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', pageUrl);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', page.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', page.description);
    document.querySelector('meta[name="twitter:url"]')?.setAttribute('content', pageUrl);
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', imageUrl);
    document.querySelector('meta[property="og:image:alt"]')?.setAttribute('content', imageAlt);
    document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', imageUrl);
    document.querySelector('meta[name="twitter:image:alt"]')?.setAttribute('content', imageAlt);

    const structuredData = currentSeoPage
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: currentSeoPage.serviceType,
            description: currentSeoPage.description,
            image: getHighQualityImageUrl(currentSeoPage.imageUrl, 1200),
            url: pageUrl,
            provider: { '@id': 'https://tishaledwalls.pages.dev/#business' },
            areaServed: ['Gurugram', 'Delhi', 'Noida', 'Delhi NCR'],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tishaledwalls.pages.dev/' },
              { '@type': 'ListItem', position: 2, name: currentSeoPage.h1, item: pageUrl },
            ],
          },
        ]
      : isHomePage || isContactPage
        ? [
            {
              '@context': 'https://schema.org',
              '@type': isContactPage ? 'ContactPage' : 'WebPage',
              name: page.title,
              description: page.description,
              url: pageUrl,
              isPartOf: { '@id': 'https://tishaledwalls.pages.dev/#website' },
            },
            ...(isContactPage
              ? [{
                  '@context': 'https://schema.org',
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tishaledwalls.pages.dev/' },
                    { '@type': 'ListItem', position: 2, name: 'Contact', item: pageUrl },
                  ],
                }]
              : []),
          ]
        : [];

    let schemaScript = document.querySelector<HTMLScriptElement>('#page-structured-data');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'page-structured-data';
      schemaScript.type = 'application/ld+json';
      document.head.append(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(structuredData);
  }, [currentSeoPage, isContactPage, isHomePage, normalizedPath]);

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
                    Contact Tisha LED Walls in Gurugram
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
        {seoPages.map((page) => (
          <Route
            key={page.slug}
            path={`/${page.slug}`}
            element={<SeoLandingPage page={page} />}
          />
        ))}
        <Route
          path="*"
          element={
            <main className="min-h-screen bg-black px-4 pb-20 pt-40 text-center text-white">
              <h1 className="text-4xl font-bold">Page not found</h1>
              <p className="mt-4 text-gray-300">The page you requested could not be found.</p>
              <Link to="/" className="mt-6 inline-block text-yellow-300 underline underline-offset-4">
                Return to the homepage
              </Link>
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
