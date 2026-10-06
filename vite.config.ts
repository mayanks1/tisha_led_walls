import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import type { Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { getHighQualityImageUrl, homeSeo, seoPages } from './src/data/seoPages';

function contactPage(): Plugin {
  let outputDirectory: string;

  return {
    name: 'seo-static-pages',
    apply: 'build',
    configResolved(config) {
      outputDirectory = config.build.outDir;
    },
    closeBundle() {
      const indexPath = resolve(outputDirectory, 'index.html');
      let source: string;
      try {
        source = readFileSync(indexPath, 'utf8');
      } catch (error) {
        throw new Error(`Unable to generate the contact page: could not read ${indexPath}.`, { cause: error });
      }

      const contactPage = {
        slug: 'contact',
        title: 'Contact Tisha LED Walls in Gurugram | Enquire Today',
        description:
          'Contact Tisha LED Walls to enquire about LED wall, screen and event equipment rentals in Gurugram. Call, email or send an event enquiry on WhatsApp.',
        h1: 'Contact Tisha LED Walls in Gurugram',
        intro:
          'Tell us about your event date, venue and equipment requirements. Contact Tisha LED Walls to discuss LED wall, LED screen, stage and other event rental enquiries.',
        sections: [
          {
            heading: 'Get in touch about your event',
            paragraphs: [
              'Call +91 7703948857, email tishaledwalls@gmail.com or use the event enquiry form to share your date, location and requirements.',
              'Tisha LED Walls serves Gurugram, Delhi, Noida and across Delhi NCR. Contact the team to confirm availability for your venue and event date.',
            ],
          },
        ],
      };

      type StaticPage = {
        slug: string;
        title: string;
        description: string;
        h1: string;
        intro: string;
        sections: { heading: string; paragraphs: string[] }[];
        faqs?: { question: string; answer: string }[];
        serviceType?: string;
        imageUrl?: string;
        imageAlt?: string;
        imagePosition?: string;
        structuredData?: object[];
      };
      const pages: StaticPage[] = [
        {
          slug: '',
          title: homeSeo.title,
          description: homeSeo.description,
          h1: homeSeo.h1,
          intro: homeSeo.description,
          sections: [],
          structuredData: [
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: homeSeo.title,
              description: homeSeo.description,
              url: 'https://tishaledwalls.pages.dev/',
              isPartOf: { '@id': 'https://tishaledwalls.pages.dev/#website' },
            },
          ],
        },
        contactPage,
        ...seoPages,
      ];

      const escapeHtml = (value: string) =>
        value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
      const serializeJsonLd = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c');

      const createPageSchema = (page: (typeof pages)[number]) => {
        const pageUrl = `https://tishaledwalls.pages.dev/${page.slug}`;
        if ('structuredData' in page) {
          return page.structuredData;
        }

        const pageSchema = page.slug === 'contact'
          ? {
              '@context': 'https://schema.org',
              '@type': 'ContactPage',
              name: page.title,
              description: page.description,
              url: pageUrl,
              isPartOf: { '@id': 'https://tishaledwalls.pages.dev/#website' },
            }
          : {
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: page.serviceType ?? page.h1,
              description: page.description,
              ...('imageUrl' in page && page.imageUrl
                ? { image: getHighQualityImageUrl(page.imageUrl, 1200) }
                : {}),
              url: pageUrl,
              provider: { '@id': 'https://tishaledwalls.pages.dev/#business' },
              areaServed: ['Gurugram', 'Delhi', 'Noida', 'Delhi NCR'],
            };
        const breadcrumbSchema = {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tishaledwalls.pages.dev/' },
            { '@type': 'ListItem', position: 2, name: page.h1, item: pageUrl },
          ],
        };
        return [pageSchema, breadcrumbSchema];
      };

      const createFallback = (page: (typeof pages)[number]) => {
        const sections = page.sections.map((section) =>
          `<section class="seo-card"><h2>${escapeHtml(section.heading)}</h2>${section.paragraphs
            .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
            .join('')}</section>`
        ).join('');
        const faqSection = 'faqs' in page && page.faqs
          ? `<section class="seo-card"><h2>Frequently Asked Questions</h2>${page.faqs
              .map((faq) => `<p><strong>${escapeHtml(faq.question)}</strong><br>${escapeHtml(faq.answer)}</p>`)
              .join('')}</section>`
          : '';
        const image = 'imageUrl' in page && page.imageUrl && page.imageAlt
          ? `<img src="${escapeHtml(getHighQualityImageUrl(page.imageUrl))}" alt="${escapeHtml(page.imageAlt)}" loading="eager" decoding="async" style="display:block;width:100%;height:auto;max-height:560px;object-fit:cover;object-position:${escapeHtml(page.imagePosition ?? 'center')};margin:24px 0;border-radius:16px" />`
          : '';
        const links = seoPages
          .map((servicePage) =>
            `<li><a href="/${servicePage.slug}">${escapeHtml(servicePage.h1)}</a></li>`
          )
          .join('');
        return `<main id="seo-fallback"><div class="seo-shell"><header class="seo-header"><div class="seo-brand">Tisha LED Walls<span>Bigger Screens, Brighter Moments.</span></div><a class="seo-call" href="tel:+917703948857">Call +91 7703948857</a></header><nav aria-label="Breadcrumb"><a href="/">Home</a> / ${escapeHtml(page.h1)}</nav><section class="seo-hero"><span class="seo-eyebrow">Gurgaon</span><h1>${escapeHtml(page.h1)}</h1><p class="seo-intro">${escapeHtml(page.intro)}</p>${image}</section><article class="seo-content">${sections}${faqSection}<section class="seo-card"><h2>Explore LED wall rental and event services</h2><ul>${links}</ul><p><a href="/contact">Contact Tisha LED Walls</a></p></section></article></div></main>`;
      };

      const renderPage = (page: (typeof pages)[number]) => {
        const pageUrl = `https://tishaledwalls.pages.dev/${page.slug}`;
        const title = escapeHtml(page.title);
        const description = escapeHtml(page.description);
        const imageUrl = 'imageUrl' in page && page.imageUrl
          ? getHighQualityImageUrl(page.imageUrl, 1200)
          : getHighQualityImageUrl(
              'https://res.cloudinary.com/dcfouzaii/image/upload/v1763445163/1_rydru9.jpg',
              1200
            );
        const imageAlt = 'imageAlt' in page && page.imageAlt
          ? escapeHtml(page.imageAlt)
          : 'LED wall lighting up an event stage';
        const canonical = page.slug ? pageUrl : 'https://tishaledwalls.pages.dev/';
        const metadataPatterns = [
          /<title>[\s\S]*?<\/title>/,
          /<meta name="description"\s+content="[^"]*"\s*\/>/,
          /<link rel="canonical" href="[^"]*"\s*\/>/,
          /<meta property="og:title" content="[^"]*"\s*\/>/,
          /<meta property="og:description"\s+content="[^"]*"\s*\/>/,
          /<meta property="og:url" content="[^"]*"\s*\/>/,
          /<meta name="twitter:title" content="[^"]*"\s*\/>/,
          /<meta name="twitter:description"\s+content="[^"]*"\s*\/>/,
          /<meta name="twitter:url" content="[^"]*"\s*\/>/,
          /<meta property="og:image"\s+content="[^"]*"\s*\/>/,
          /<meta property="og:image:alt"\s+content="[^"]*"\s*\/>/,
          /<meta name="twitter:image"\s+content="[^"]*"\s*\/>/,
          /<meta name="twitter:image:alt"\s+content="[^"]*"\s*\/>/,
          /<script id="page-structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/,
        ];
        if (metadataPatterns.some((pattern) => !pattern.test(source))) {
          throw new Error(`Unable to generate /${page.slug || ''}: required metadata tags are missing.`);
        }
        const routeHtml = source
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
          .replace(
            /<meta name="description"\s+content="[^"]*"\s*\/>/,
            `<meta name="description" content="${description}" />`
          )
          .replace(
            /<link rel="canonical" href="[^"]*"\s*\/>/,
            `<link rel="canonical" href="${canonical}" />`
          )
          .replace(
            /<meta property="og:title" content="[^"]*"\s*\/>/,
            `<meta property="og:title" content="${title}" />`
          )
          .replace(
            /<meta property="og:description"\s+content="[^"]*"\s*\/>/,
            `<meta property="og:description" content="${description}" />`
          )
          .replace(
            /<meta property="og:url" content="[^"]*"\s*\/>/,
            `<meta property="og:url" content="${canonical}" />`
          )
          .replace(
            /<meta name="twitter:title" content="[^"]*"\s*\/>/,
            `<meta name="twitter:title" content="${title}" />`
          )
          .replace(
            /<meta name="twitter:description"\s+content="[^"]*"\s*\/>/,
            `<meta name="twitter:description" content="${description}" />`
          )
          .replace(
            /<meta name="twitter:url" content="[^"]*"\s*\/>/,
            `<meta name="twitter:url" content="${canonical}" />`
          )
          .replace(
            /<meta property="og:image"\s+content="[^"]*"\s*\/>/,
            `<meta property="og:image" content="${escapeHtml(imageUrl)}" />`
          )
          .replace(
            /<meta property="og:image:alt"\s+content="[^"]*"\s*\/>/,
            `<meta property="og:image:alt" content="${imageAlt}" />`
          )
          .replace(
            /<meta name="twitter:image"\s+content="[^"]*"\s*\/>/,
            `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`
          )
          .replace(
            /<meta name="twitter:image:alt"\s+content="[^"]*"\s*\/>/,
            `<meta name="twitter:image:alt" content="${imageAlt}" />`
          )
          .replace(
            /<script id="page-structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/,
            `<script id="page-structured-data" type="application/ld+json">${serializeJsonLd(createPageSchema(page))}</script>`
          );
        const htmlWithRouteContent = page.slug
          ? routeHtml.replace(/<main id="seo-fallback">[\s\S]*?<\/main>/, createFallback(page))
          : routeHtml;
        if (htmlWithRouteContent === source) {
          throw new Error(`Unable to generate /${page.slug || ''}: expected HTML tags were not found.`);
        }
        return htmlWithRouteContent;
      };

      for (const page of pages.slice(1)) {
        const routeDirectory = resolve(outputDirectory, page.slug);
        try {
          mkdirSync(routeDirectory, { recursive: true });
          writeFileSync(resolve(routeDirectory, 'index.html'), renderPage(page));
        } catch (error) {
          throw new Error(`Unable to generate the static page at /${page.slug}.`, { cause: error });
        }
      }

      try {
        writeFileSync(indexPath, renderPage(pages[0]));
      } catch (error) {
        throw new Error(`Unable to write the homepage to ${indexPath}.`, { cause: error });
      }

      const notFoundHtml = source
        .replace(/<title>[\s\S]*?<\/title>/, '<title>Page Not Found | Tisha LED Walls</title>')
        .replace(
          /<meta name="description"\s+content="[^"]*"\s*\/>/,
          '<meta name="description" content="The page you requested could not be found." />'
        )
        .replace(/<meta name="robots" content="[^"]*"\s*\/>/, '<meta name="robots" content="noindex, follow" />')
        .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, '')
        .replace(
          /<meta property="og:title" content="[^"]*"\s*\/>/,
          '<meta property="og:title" content="Page Not Found | Tisha LED Walls" />'
        )
        .replace(
          /<meta property="og:description"\s+content="[^"]*"\s*\/>/,
          '<meta property="og:description" content="The page you requested could not be found." />'
        )
        .replace(
          /<meta property="og:url" content="[^"]*"\s*\/>/,
          '<meta property="og:url" content="https://tishaledwalls.pages.dev/404.html" />'
        )
        .replace(
          /<meta name="twitter:title" content="[^"]*"\s*\/>/,
          '<meta name="twitter:title" content="Page Not Found | Tisha LED Walls" />'
        )
        .replace(
          /<meta name="twitter:description"\s+content="[^"]*"\s*\/>/,
          '<meta name="twitter:description" content="The page you requested could not be found." />'
        )
        .replace(
          /<meta name="twitter:url" content="[^"]*"\s*\/>/,
          '<meta name="twitter:url" content="https://tishaledwalls.pages.dev/404.html" />'
        )
        .replace(
          /<meta property="og:image"\s+content="[^"]*"\s*\/>/,
          '<meta property="og:image" content="https://res.cloudinary.com/dcfouzaii/image/upload/f_auto,q_auto,w_1200/v1763445163/1_rydru9.jpg" />'
        )
        .replace(
          /<meta property="og:image:alt"\s+content="[^"]*"\s*\/>/,
          '<meta property="og:image:alt" content="LED wall lighting up an event stage" />'
        )
        .replace(
          /<meta name="twitter:image"\s+content="[^"]*"\s*\/>/,
          '<meta name="twitter:image" content="https://res.cloudinary.com/dcfouzaii/image/upload/f_auto,q_auto,w_1200/v1763445163/1_rydru9.jpg" />'
        )
        .replace(
          /<meta name="twitter:image:alt"\s+content="[^"]*"\s*\/>/,
          '<meta name="twitter:image:alt" content="LED wall lighting up an event stage" />'
        )
        .replace(
          /<script id="page-structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/,
          '<script id="page-structured-data" type="application/ld+json"></script>'
        )
        .replace(
          /<main id="seo-fallback">[\s\S]*?<\/main>/,
          '<main id="seo-fallback"><div class="seo-shell"><header class="seo-header"><div class="seo-brand">Tisha LED Walls<span>Bigger Screens, Brighter Moments.</span></div></header><section class="seo-hero"><h1>Page not found</h1><p class="seo-intro">The page you requested could not be found.</p><a class="seo-call" href="/">Return to the homepage</a></section></div></main>'
        );
      try {
        writeFileSync(resolve(outputDirectory, '404.html'), notFoundHtml);
      } catch (error) {
        throw new Error('Unable to write the custom 404 page.', { cause: error });
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), contactPage()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
