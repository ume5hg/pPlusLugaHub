import { Link } from 'react-router-dom'

const processSteps = [
  {
    step: '01',
    title: 'Design & Consultation',
    desc: 'Share your designs, tech packs, or ideas. Our team will review and provide feedback within 24 hours.',
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
  },
  {
    step: '02',
    title: 'Sampling',
    desc: 'We create detailed samples for your approval. Revisions are included until you are 100% satisfied.',
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
  },
  {
    step: '03',
    title: 'Bulk Production',
    desc: 'Once the sample is approved, we begin full-scale production with strict quality checks at every stage.',
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
  },
  {
    step: '04',
    title: 'Delivery & Shipping',
    desc: 'Orders are carefully packed and shipped via your preferred method — air or sea freight globally.',
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>,
  },
]

const services = [
  {
    title: 'Private Label Manufacturing',
    desc: 'Full white-label production with your brand name, labels, tags, and packaging. We handle everything from sourcing to shipping.',
  },
  {
    title: 'OEM Manufacturing',
    desc: 'Original equipment manufacturing based on your exact specifications, patterns, and tech packs.',
  },
  {
    title: 'Custom Design Development',
    desc: 'Don\'t have a design yet? Our in-house team can create custom designs based on your brief and trends.',
  },
  {
    title: 'Small Batch Production',
    desc: 'Perfect for startups and emerging brands. We accept orders from as low as 100 pieces per style.',
  },
]

export default function CustomManufacturing() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1600&h=400&fit=crop" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Custom Manufacturing</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your designs, our expertise. Full-service OEM and private label garment manufacturing.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Manufacturing Services</h2>
            <p className="section-subtitle mx-auto">
              End-to-end garment production tailored to your brand's needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-accent-200 hover:shadow-lg transition-all duration-300">
                <h3 className="font-heading font-semibold text-gray-900 mb-2 text-lg">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle mx-auto">
              A simple, transparent process from concept to delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-accent-200" />
                )}
                <div className="relative bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group text-center">
                  <div className="w-14 h-14 bg-accent-50 rounded-xl flex items-center justify-center text-accent-600 mx-auto mb-4 group-hover:bg-accent-600 group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="text-xs font-bold text-accent-600 mb-2">STEP {step.step}</div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-accent-50 rounded-xl p-8 text-center border border-accent-100">
              <div className="text-4xl font-heading font-bold text-accent-600 mb-2">100 pcs</div>
              <div className="text-gray-900 font-semibold mb-1">Minimum Order Quantity</div>
              <p className="text-sm text-gray-500">Per style / per color</p>
            </div>
            <div className="bg-accent-50 rounded-xl p-8 text-center border border-accent-100">
              <div className="text-4xl font-heading font-bold text-accent-600 mb-2">2–4 Weeks</div>
              <div className="text-gray-900 font-semibold mb-1">Production Lead Time</div>
              <p className="text-sm text-gray-500">After sample approval</p>
            </div>
            <div className="bg-accent-50 rounded-xl p-8 text-center border border-accent-100">
              <div className="text-4xl font-heading font-bold text-accent-600 mb-2">5–7 Days</div>
              <div className="text-gray-900 font-semibold mb-1">Sample Time</div>
              <p className="text-sm text-gray-500">Including revisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-accent-600 to-accent-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Start Your Custom Order?
          </h2>
          <p className="text-lg text-accent-100 mb-8 max-w-xl mx-auto">
            Send us your requirements and get a detailed quote within 24 hours.
          </p>
          <Link to="/contact" className="btn-primary !bg-white !text-accent-700 hover:!bg-gray-100 text-base px-8 py-4">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  )
}
