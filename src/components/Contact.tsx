import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Monitor,
  Music2,
  Phone,
  Presentation,
  Sparkles,
  Tv,
} from 'lucide-react';
import { useRef, useState } from 'react';
import type { FormEvent } from 'react';

type ContactProps = {
  showHeading?: boolean;
};

export default function Contact({ showHeading = true }: ContactProps) {
  const [formStep, setFormStep] = useState(1);
  const formRef = useRef<HTMLFormElement>(null);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917703948857?text=Hi%20Tisha%20LED%20Walls%2C%20I%20want%20to%20book%20an%20LED%20wall.', '_blank');
  };

  const handleInquirySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formStep === 1) {
      if (formRef.current?.reportValidity()) {
        setFormStep(2);
      }
      return;
    }

    const formData = new FormData(event.currentTarget);
    const message = [
      'Hi Tisha LED Walls, I would like to enquire about an event rental.',
      `Name: ${formData.get('name')}`,
      `Event date: ${formData.get('eventDate') || 'Not specified'}`,
      `Event location: ${formData.get('location')}`,
      `Equipment: ${formData.get('equipment')}`,
      `Requirements: ${formData.get('requirements') || 'No additional requirements provided.'}`,
    ].join('\n');

    window.open(`https://wa.me/917703948857?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-[#080b0a] py-14 text-white sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_50%,rgba(234,179,8,0.08),transparent_35%),radial-gradient(ellipse_at_80%_80%,rgba(22,163,74,0.07),transparent_35%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/[0.07] px-4 py-2 text-sm font-semibold text-yellow-300">
              <Sparkles className="h-4 w-4" />
              Let’s make it memorable
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Your event deserves a
              <span className="block bg-gradient-to-r from-yellow-200 to-amber-500 bg-clip-text text-transparent">
                brighter kind of wow.
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Tell us what you’re planning and we’ll help you put together the right setup.
            </p>
          </div>
        )}

        <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:gap-6">
          <aside className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#171a17] via-[#111411] to-[#0c0f0d] p-6 shadow-2xl shadow-black/30 sm:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />
            <div className="relative">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">Contact our team</span>
              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Let’s bring your setup together.</h3>
              <p className="mt-3 leading-7 text-gray-400">
                Talk to us about your venue, event date and equipment needs. We’ll help you work out the next steps.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href="tel:+917703948857"
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4 transition hover:border-yellow-400/30 hover:bg-white/[0.06]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-300">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-medium text-gray-500">Call us directly</span>
                    <span className="mt-1 block font-semibold text-gray-100">+91 7703948857</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-gray-500 transition group-hover:text-yellow-300" />
                </a>

                <a
                  href="mailto:tishaledwalls@gmail.com"
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4 transition hover:border-yellow-400/30 hover:bg-white/[0.06]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-300">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-medium text-gray-500">Email our team</span>
                    <span className="mt-1 block break-all font-semibold text-gray-100">tishaledwalls@gmail.com</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-gray-500 transition group-hover:text-yellow-300" />
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-300">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <a href="https://maps.google.com/?q=28.4595,77.0266" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors">
                      <span className="block text-xs font-medium text-gray-500">928, Jharsa Village, Sector 39</span>
                      <span className="mt-1 block font-semibold text-gray-100">Gurugram, Haryana 122003</span>
                    </a>
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.06] p-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-emerald-100">Available around the clock</p>
                  <p className="mt-0.5 text-xs text-emerald-100/60">Typically responds within 2 hours</p>
                </div>
                <Clock className="ml-auto h-4 w-4 text-emerald-200/60" />
              </div>

              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-3.5 font-semibold text-emerald-100 transition hover:border-emerald-300/50 hover:bg-emerald-400/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                <MessageCircle className="h-5 w-5" />
                Chat with us on WhatsApp
              </button>
            </div>
          </aside>

          <form
            ref={formRef}
            onSubmit={handleInquirySubmit}
            className="overflow-hidden rounded-3xl border border-white/10 bg-[#151817] text-white shadow-[0_28px_90px_rgba(0,0,0,0.4)]"
          >
            <div className="border-b border-white/[0.08] px-6 pb-5 pt-6 sm:px-9 sm:pt-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">Event enquiry</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    {formStep === 1 ? 'Let’s start with the basics' : 'What are you planning?'}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {formStep === 1
                      ? 'Share a few details so our team knows who to get back to.'
                      : 'Choose the setup you need and add anything else we should know.'}
                  </p>
                </div>
                <span className="hidden shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-gray-400 sm:inline-flex">
                  {formStep} of 2
                </span>
              </div>
              <div className="mt-6 flex items-center gap-3" aria-label={`Step ${formStep} of 2`}>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-500 ${formStep === 1 ? 'w-1/2' : 'w-full'
                      }`}
                  />
                </div>
                <span className="text-xs font-semibold text-gray-400">
                  {formStep === 1 ? 'Your details' : 'Event & equipment'}
                </span>
              </div>
            </div>

            <div className="px-6 py-6 sm:px-9 sm:py-8">
              <div
                className="grid gap-5 sm:grid-cols-2"
                style={{ display: formStep === 1 ? 'grid' : 'none' }}
              >
                <label className="space-y-2 text-sm font-semibold text-gray-300">
                  Your name <span className="text-yellow-400">*</span>
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="e.g. Aditi Sharma"
                    required={formStep === 1}
                    className="w-full rounded-xl border border-white/15 bg-[#0d100f] px-4 py-3.5 text-white shadow-sm outline-none transition placeholder:text-gray-600 hover:border-white/25 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                  />
                </label>
                <label className="space-y-2 text-sm font-semibold text-gray-300">
                  Event date
                  <input
                    name="eventDate"
                    type="date"
                    className="w-full rounded-xl border border-white/15 bg-[#0d100f] px-4 py-3.5 text-white shadow-sm outline-none transition [color-scheme:dark] hover:border-white/25 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                  />
                  <span className="block text-xs font-normal text-gray-500">Optional if not confirmed yet.</span>
                </label>
                <label className="space-y-2 text-sm font-semibold text-gray-300 sm:col-span-2">
                  Event location <span className="text-yellow-400">*</span>
                  <input
                    name="location"
                    type="text"
                    autoComplete="address-level2"
                    placeholder="City, venue or area"
                    required={formStep === 1}
                    className="w-full rounded-xl border border-white/15 bg-[#0d100f] px-4 py-3.5 text-white shadow-sm outline-none transition placeholder:text-gray-600 hover:border-white/25 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                  />
                </label>
                <div className="rounded-xl border border-yellow-400/15 bg-yellow-400/[0.06] px-4 py-3 text-sm leading-6 text-yellow-100 sm:col-span-2">
                  <MapPin className="mr-2 inline h-4 w-4 text-yellow-300" />
                  Serving Gurugram, Delhi, Noida and across Delhi NCR.
                </div>
              </div>

              <div style={{ display: formStep === 2 ? 'block' : 'none' }}>
                <fieldset>
                  <legend className="text-sm font-semibold text-gray-300">
                    What do you need for your event? <span className="text-yellow-400">*</span>
                  </legend>
                  <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {[
                      { label: 'LED screen / wall', icon: Monitor },
                      { label: 'Sound / PA', icon: Music2 },
                      { label: 'AV / projector', icon: Presentation },
                      { label: 'LED TV', icon: Tv },
                      { label: 'Stage setup', icon: Sparkles },
                      { label: 'Multiple services', icon: Check },
                    ].map(({ label, icon: Icon }, index) => (
                      <label key={label} className="group relative cursor-pointer">
                        <input
                          className="peer absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                          type="radio"
                          name="equipment"
                          value={label}
                          defaultChecked={index === 0}
                          required={formStep === 2}
                        />
                        <span className="flex min-h-24 flex-col items-start justify-between rounded-2xl border border-white/10 bg-[#0d100f] p-4 text-gray-300 shadow-sm transition group-hover:border-white/25 peer-checked:border-yellow-400/70 peer-checked:bg-yellow-400/[0.08] peer-checked:text-white peer-checked:ring-2 peer-checked:ring-yellow-400/15 peer-focus-visible:ring-2 peer-focus-visible:ring-yellow-400">
                          <Icon className="h-5 w-5 text-yellow-400" />
                          <span className="mt-3 text-sm font-semibold">{label}</span>
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="mt-6 block space-y-2 text-sm font-semibold text-gray-300">
                  Anything else we should know? <span className="font-normal text-gray-500">(optional)</span>
                  <textarea
                    name="requirements"
                    rows={4}
                    placeholder="Event type, audience size, screen dimensions or other requirements..."
                    className="w-full resize-y rounded-xl border border-white/15 bg-[#0d100f] px-4 py-3.5 text-white shadow-sm outline-none transition placeholder:text-gray-600 hover:border-white/25 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                  />
                </label>
              </div>

              <div className="mt-7 flex flex-col-reverse gap-3 border-t border-white/[0.08] pt-5 sm:flex-row sm:items-center sm:justify-between">
                {formStep === 2 ? (
                  <button
                    type="button"
                    onClick={() => setFormStep(1)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to details
                  </button>
                ) : (
                  <p className="text-xs text-gray-500">Your information is only used to respond to this enquiry.</p>
                )}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-4 font-bold text-[#17130a] shadow-lg shadow-yellow-500/10 transition hover:-translate-y-0.5 hover:brightness-105 hover:shadow-xl hover:shadow-yellow-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#151817] sm:w-auto"
                >
                  {formStep === 1 ? (
                    <>
                      Continue
                      <ArrowRight className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      <MessageCircle className="h-5 w-5 text-emerald-400" />
                      Review & continue to WhatsApp
                      <ArrowUpRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
              <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-gray-500">
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                WhatsApp opens with your message ready for you to review and send.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
