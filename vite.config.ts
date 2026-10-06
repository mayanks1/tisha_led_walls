import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import type { Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function contactPage(): Plugin {
  let outputDirectory: string;

  return {
    name: 'contact-page',
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

      const titleTag = /<title>[\s\S]*?<\/title>/;
      const descriptionTag = /<meta name="description"\s+content="[^"]*"\s*\/>/;
      const canonicalTag = /<link rel="canonical" href="[^"]*"\s*\/>/;
      if (!titleTag.test(source) || !descriptionTag.test(source) || !canonicalTag.test(source)) {
        throw new Error('Unable to generate the contact page: expected SEO tags were not found.');
      }

      const contactHtml = source
        .replace(titleTag, '<title>Contact Tisha LED Walls in Gurugram | LED Rentals</title>')
        .replace(
          descriptionTag,
          '<meta name="description" content="Contact Tisha LED Walls for LED screens &amp; AV rentals in Gurugram. Call or WhatsApp for a quote." />'
        )
        .replace(canonicalTag, '<link rel="canonical" href="https://tishaledwalls.pages.dev/contact" />');

      const contactDirectory = resolve(outputDirectory, 'contact');
      try {
        mkdirSync(contactDirectory, { recursive: true });
        writeFileSync(resolve(contactDirectory, 'index.html'), contactHtml);
      } catch (error) {
        throw new Error(`Unable to write the contact page to ${contactDirectory}.`, { cause: error });
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
