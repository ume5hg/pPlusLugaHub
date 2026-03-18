import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'What is the Minimum Order Quantity (MOQ)?',
    a: 'Our minimum order quantity is 100 pieces per style, per color. For custom prints or embroidery, the MOQ may vary. We are flexible for first-time orders and can discuss lower quantities on a case-by-case basis.',
  },
  {
    q: 'Can I get a sample before placing a bulk order?',
    a: 'Absolutely! We offer sample development services. You can receive a pre-production sample for approval before we begin bulk manufacturing. Sample costs vary depending on the complexity of the design.',
  },
  {
    q: 'What are your payment terms?',
    a: 'For new clients, we typically require 50% advance payment and 50% before shipment. For returning clients, we offer flexible terms including LC (Letter of Credit) and TT (Telegraphic Transfer) options.',
  },
  {
    q: 'How long does production take?',
    a: 'Standard production lead time is 2–4 weeks after sample approval, depending on the order size and complexity. Rush orders can be accommodated on a case-by-case basis with a slight surcharge.',
  },
  {
    q: 'Do you offer custom / private label services?',
    a: 'Yes! We specialize in private label and OEM manufacturing. We can add your brand labels, hang tags, custom packaging, and any other branding elements. Visit our Custom Manufacturing page for more details.',
  },
  {
    q: 'What types of garments do you manufacture?',
    a: 'We manufacture a wide range of garments including t-shirts, polo shirts, hoodies, jackets, uniforms, workwear, sportswear, casual wear, and more. We work with both knitted and woven fabrics.',
  },
  {
    q: 'Do you handle international shipping?',
    a: 'Yes, we handle full export documentation and ship worldwide via both air freight and sea freight. We offer FOB and CIF terms. We have experience shipping to the US, UK, Europe, Australia, Japan, and more.',
  },
  {
    q: 'What quality standards do you follow?',
    a: 'We follow strict AQL 2.5 inspection standards with a 5-point quality control process — from raw material inspection to pre-shipment audit. Every garment is checked for stitching, measurements, color, and finish.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <>
      {/* Page Header */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=400&fit=crop" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our garment manufacturing services.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-xl border transition-all duration-300 ${
                  openIndex === i
                    ? 'border-accent-200 bg-accent-50/50 shadow-sm'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className={`font-semibold pr-4 transition-colors duration-200 ${
                    openIndex === i ? 'text-accent-600' : 'text-gray-900'
                  }`}>
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === i
                      ? 'bg-accent-600 text-white rotate-180'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Still Have Questions?</h2>
          <p className="section-subtitle mx-auto mb-8">
            We're happy to help. Reach out to us and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
            <a
              href="https://wa.me/9779801234567"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !border-green-500 !text-green-600 hover:!bg-green-500 hover:!text-white"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
