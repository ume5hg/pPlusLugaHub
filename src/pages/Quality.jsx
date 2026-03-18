import { Link } from 'react-router-dom'

const qcSteps = [
  { title: 'Raw Material Inspection', desc: 'Every batch of fabric is tested for weight, color fastness, and shrinkage before production begins.' },
  { title: 'Cutting Accuracy Check', desc: 'Pattern alignment and cutting precision verified against tech pack specifications.' },
  { title: 'In-Line Quality Control', desc: 'Continuous monitoring during sewing to catch defects early in the production process.' },
  { title: 'Final Inspection (AQL 2.5)', desc: 'Comprehensive AQL-based inspection before packing — checking stitching, measurements, and finish.' },
  { title: 'Packing & Pre-Shipment Audit', desc: 'Final audit of packed goods to ensure correct labeling, quantities, and packaging standards.' },
]

const exportCountries = [
  'United States', 'United Kingdom', 'Germany', 'France', 'Australia',
  'Japan', 'South Korea', 'Canada', 'Netherlands', 'India',
  'UAE', 'Sweden', 'Norway', 'Denmark', 'Italy',
]

export default function Quality() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=400&fit=crop" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Quality & Export</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Uncompromising quality standards. Export-ready garments for the global market.
          </p>
        </div>
      </section>

      {/* Quality Control */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-block px-3 py-1 bg-accent-50 text-accent-600 text-sm font-semibold rounded-full mb-4">
                Quality Assurance
              </div>
              <h2 className="section-title">Our Quality Control Process</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We follow a strict 5-point quality control system to ensure every garment 
                meets international standards before it leaves our facility.
              </p>
              <div className="space-y-5">
                {qcSteps.map((step, i) => (
                  <div key={step.title} className="flex gap-4 group">
                    <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center text-accent-600 font-bold text-sm flex-shrink-0 group-hover:bg-accent-600 group-hover:text-white transition-all duration-300">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sticky top-24">
              <img
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=700&fit=crop"
                alt="Quality inspection"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Export Countries */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">We Export Worldwide</h2>
            <p className="section-subtitle mx-auto">
              Our garments reach clients across 15+ countries. Here are some of our key markets.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {exportCountries.map((country) => (
              <div key={country} className="px-5 py-2.5 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-accent-300 hover:text-accent-600 transition-all duration-200">
                {country}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging & Shipping */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center text-accent-600 mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Packaging Standards</h3>
              <ul className="space-y-2">
                {[
                  'Individual poly bags for each garment',
                  'Custom branded hang tags and labels',
                  'Reinforced export-grade carton boxes',
                  'Barcode and SKU labeling available',
                  'Custom packaging per client request',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-accent-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center text-accent-600 mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Shipping Options</h3>
              <ul className="space-y-2">
                {[
                  'Air freight for urgent deliveries',
                  'Sea freight for bulk orders',
                  'FOB Kathmandu / CIF available',
                  'Full documentation & customs support',
                  'Real-time shipment tracking',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-accent-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Export Ready Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-600 to-accent-800" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Export Certified
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            We Are Export-Ready
          </h2>
          <p className="text-lg text-accent-100 mb-8 max-w-xl mx-auto">
            With full export documentation, compliance certifications, and global shipping 
            partnerships — we make international sourcing effortless for you.
          </p>
          <Link to="/contact" className="btn-primary !bg-white !text-accent-700 hover:!bg-gray-100 text-base px-8 py-4">
            Partner With Us
          </Link>
        </div>
      </section>
    </>
  )
}
