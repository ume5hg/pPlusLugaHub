import { Link } from 'react-router-dom'

const values = [
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: 'Integrity',
    desc: 'Honest pricing, transparent processes, and reliable partnerships.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: 'Innovation',
    desc: 'Modern techniques and continuous improvement in manufacturing.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    title: 'Sustainability',
    desc: 'Eco-friendly practices and ethical working conditions.',
  },
]

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=400&fit=crop" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">About Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A decade of quality garment manufacturing from the heart of Nepal.
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-accent-50 text-accent-600 text-sm font-semibold rounded-full mb-4">
                Our Story
              </div>
              <h2 className="section-title">Crafting Quality Garments Since 2014</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pspluslugahub was established in 2014 in Kathmandu, Nepal, with a clear vision: 
                to become a trusted garment manufacturing partner for brands around the world. 
                What started as a small workshop has grown into a full-scale manufacturing facility 
                capable of producing 500,000+ units per year.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Today, we work with over 50 international clients across 15+ countries, providing 
                end-to-end garment solutions from design and sampling to bulk production and 
                global shipping. Our commitment to quality, fair pricing, and timely delivery 
                has earned us the trust of brands worldwide.
              </p>
              <Link to="/contact" className="btn-primary">
                Get In Touch
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=500&fit=crop"
                alt="Our factory"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent-600 text-white rounded-xl p-5 shadow-lg hidden md:block">
                <div className="text-3xl font-heading font-bold">10+</div>
                <div className="text-sm text-accent-100">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center text-accent-600 mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted garment manufacturing partner from South Asia, known for 
                consistent quality, ethical practices, and innovative solutions that empower global 
                fashion brands.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center text-accent-600 mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver superior quality garments through skilled craftsmanship, modern technology, 
                and sustainable practices — while building long-lasting relationships with our 
                clients based on trust and transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=300&h=300&fit=crop" alt="Factory floor" className="rounded-xl shadow-md w-full aspect-square object-cover" />
              <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=300&h=300&fit=crop" alt="Quality check" className="rounded-xl shadow-md w-full aspect-square object-cover mt-8" />
              <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=300&h=300&fit=crop" alt="Sewing machines" className="rounded-xl shadow-md w-full aspect-square object-cover -mt-4" />
              <img src="https://images.unsplash.com/photo-1604600695883-afed61ddaa72?w=300&h=300&fit=crop" alt="Packaging" className="rounded-xl shadow-md w-full aspect-square object-cover mt-4" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-3 py-1 bg-accent-50 text-accent-600 text-sm font-semibold rounded-full mb-4">
                Our Facility
              </div>
              <h2 className="section-title">Modern Factory, Skilled Workforce</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our state-of-the-art production facility in Kathmandu spans over 15,000 sq.ft. 
                and is equipped with industrial-grade sewing, cutting, and finishing machinery. 
                We employ 100+ skilled workers dedicated to precision and quality.
              </p>
              <ul className="space-y-3">
                {[
                  'Industrial sewing and cutting machines',
                  'Dedicated quality control floor',
                  'In-house design and pattern-making team',
                  'Eco-friendly dyeing and finishing',
                  'Climate-controlled storage facility',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-accent-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Trust Us</h2>
            <p className="section-subtitle mx-auto">Our core values define everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-gray-100 text-center hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-accent-50 rounded-xl flex items-center justify-center text-accent-600 mx-auto mb-4 group-hover:bg-accent-600 group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-accent-600 to-accent-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Want to Work With Us?
          </h2>
          <p className="text-lg text-accent-100 mb-8">
            We'd love to hear about your project. Reach out and let's discuss how we can help.
          </p>
          <Link to="/contact" className="btn-primary !bg-white !text-accent-700 hover:!bg-gray-100">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}
