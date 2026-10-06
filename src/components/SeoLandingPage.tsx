import { Link } from 'react-router-dom';
import { getHighQualityImageUrl } from '../data/seoPages';
import type { SeoPage } from '../data/seoPages';

const siteName = 'Tisha LED Walls';
const pageBySlug = (slug: string) => `/` + slug;

function relatedLinks(slug: string) {
  if (slug === 'event-services-gurgaon') {
    return [
      'led-wall-rental-gurgaon',
      'led-screen-rental-gurgaon',
      'led-tv-standee-rental-gurgaon',
      'stage-setup-gurgaon',
      'dj-services-gurgaon',
      'live-band-gurgaon',
      'event-decoration-gurgaon',
    ];
  }

  if (slug === 'led-wall-rental-gurgaon') {
    return [
      'led-screen-rental-gurgaon',
      'stage-setup-gurgaon',
      'event-services-gurgaon',
      '#events-we-serve',
    ];
  }

  if (slug === 'led-tv-standee-rental-gurgaon') {
    return [
      'led-screen-rental-gurgaon',
      'led-wall-rental-gurgaon',
      'event-services-gurgaon',
    ];
  }

  return ['led-wall-rental-gurgaon', 'event-services-gurgaon'];
}

const linkLabels: Record<string, string> = {
  'led-wall-rental-gurgaon': 'LED wall rental in Gurgaon',
  'led-screen-rental-gurgaon': 'LED screen on rent in Gurgaon',
  'led-tv-standee-rental-gurgaon': 'LED TV & Standee on rent in Gurgaon',
  'stage-setup-gurgaon': 'Stage setup in Gurgaon',
  'dj-services-gurgaon': 'DJ services in Gurgaon',
  'live-band-gurgaon': 'Live band for events in Gurgaon',
  'event-decoration-gurgaon': 'Event decoration in Gurgaon',
  'event-services-gurgaon': 'Explore event services',
  '#events-we-serve': 'Wedding, corporate and concert LED wall use cases',
};

type SeoLandingPageProps = {
  page: SeoPage;
};

export default function SeoLandingPage({ page }: SeoLandingPageProps) {
  const related = relatedLinks(page.slug);
  const isHub = page.slug === 'event-services-gurgaon';

  return (
    <main className="min-h-screen bg-black pt-28 text-white">
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#111411] via-[#080b0a] to-black px-4 pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.14),transparent_60%)]" />
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link className="hover:text-yellow-300" to="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-gray-300">{page.h1}</li>
            </ol>
          </nav>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-yellow-400">
            Gurgaon · Delhi NCR
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {page.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">{page.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/917703948857?text=Hi%20Tisha%20LED%20Walls%2C%20I%20would%20like%20to%20enquire%20about%20an%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-yellow-500 px-6 py-3 font-bold text-black transition hover:bg-yellow-400"
            >
              Enquire on WhatsApp
            </a>
            <a
              href="tel:+917703948857"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-300"
            >
              Call +91 77039 48857
            </a>
          </div>
          <img
            src={getHighQualityImageUrl(page.imageUrl)}
            alt={page.imageAlt}
            className="mt-10 aspect-[16/7] w-full rounded-2xl border border-white/10 object-cover"
            style={{ objectPosition: page.imagePosition ?? 'center 65%' }}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        {isHub && (
          <section aria-labelledby="primary-service" className="mb-10 rounded-3xl border border-yellow-400/30 bg-yellow-400/[0.06] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-300">Primary service</p>
            <h2 id="primary-service" className="mt-2 text-2xl font-bold sm:text-3xl">
              LED wall rental for your event
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-gray-300">
              Start with the display, venue and event brief. We can then discuss stage and other supporting requirements.
            </p>
            <Link
              to={pageBySlug('led-wall-rental-gurgaon')}
              className="mt-5 inline-flex font-semibold text-yellow-300 underline decoration-yellow-400/50 underline-offset-4 hover:text-yellow-200"
            >
              Explore LED wall rental in Gurgaon
            </Link>
          </section>
        )}

        <article className="space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </article>

        {page.faqs && (
          <section aria-labelledby="faq-heading" className="mt-14 border-t border-white/10 pt-10">
            <h2 id="faq-heading" className="text-2xl font-bold sm:text-3xl">Frequently asked questions</h2>
            <div className="mt-6 divide-y divide-white/10">
              {page.faqs.map((faq) => (
                <article key={faq.question} className="py-5">
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <p className="mt-2 leading-7 text-gray-300">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <nav aria-label="Related services" className="mt-14 rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <h2 className="text-2xl font-bold">Explore related services</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {related.map((slug) => (
              <li key={slug}>
                <Link
                  to={slug.startsWith('#') ? `/${slug}` : pageBySlug(slug)}
                  className="block rounded-xl border border-white/10 px-4 py-3 font-medium text-yellow-200 transition hover:border-yellow-400/40 hover:bg-yellow-400/[0.06]"
                >
                  {linkLabels[slug]}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="block rounded-xl border border-white/10 px-4 py-3 font-medium text-yellow-200 transition hover:border-yellow-400/40 hover:bg-yellow-400/[0.06]"
              >
                Contact Tisha LED Walls
              </Link>
            </li>
          </ul>
        </nav>

        <p className="mt-8 text-sm text-gray-500">
          {siteName} serves Gurugram, Delhi, Noida and across Delhi NCR. Contact the team to confirm availability for your venue and event date.
        </p>
      </div>
    </main>
  );
}
