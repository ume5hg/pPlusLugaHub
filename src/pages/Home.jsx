import { Link } from 'react-router-dom'

const productHighlights = [
  {
    name: 'T-Shirts & Polos',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    desc: 'Cotton & blended tees for every need',
  },
  {
    name: 'Hoodies & Jackets',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    desc: 'Warm, durable, and stylish outerwear',
  },
  {
    name: 'Uniforms & Workwear',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop',
    desc: 'Professional corporate & industrial uniforms',
  },
  {
    name: 'Sportswear',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=400&fit=crop',
    desc: 'Performance activewear & jerseys',
  },
]

const trustPoints = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
    title: 'Quality Assured',
    desc: 'Rigorous multi-point quality control at every stage of production.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'Export Ready',
    desc: 'Serving international clients across 15+ countries worldwide.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'On-Time Delivery',
    desc: 'Reliable production timelines with transparent progress updates.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
    title: 'Experienced Team',
    desc: '10+ years of garment manufacturing expertise and craftsmanship.',
  },
]

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Buyer, FashionHub UK',
    text: 'Pspluslugahub has been an incredible manufacturing partner. Their attention to quality and commitment to delivery timelines is remarkable. Highly recommended!',
    avatar: 'SM',
  },
  {
    name: 'David Chen',
    role: 'CEO, ActiveWear Co.',
    text: 'We have been sourcing from Nepal through Pspluslugahub for over 3 years now. Consistent quality, competitive pricing, and excellent communication.',
    avatar: 'DC',
  },
  {
    name: 'Raj Sharma',
    role: 'Director, UniformPro India',
    text: 'The private label service is outstanding. They handled everything from sampling to bulk production flawlessly. Great team to work with!',
    avatar: 'RS',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&h=900&fit=crop"
            alt="Garment manufacturing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-600/20 border border-accent-500/30 rounded-full text-accent-300 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
              Trusted by 50+ International Brands
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Reliable Garment Manufacturing Partner
              <span className="text-accent-400"> from Nepal</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
              Quality production, competitive pricing, and export-ready garment solutions. 
              From design to delivery — we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Request a Quote
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/products" className="btn-outline !border-white/30 !text-white hover:!bg-white/10 text-base px-8 py-4">
                View Products
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
              {[
                { num: '10+', label: 'Years Experience' },
                { num: '50+', label: 'Clients Worldwide' },
                { num: '500K+', label: 'Units/Year' },
                { num: '15+', label: 'Countries Served' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-white">{stat.num}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Product Range</h2>
            <p className="section-subtitle mx-auto">
              We manufacture a wide range of garments tailored to your specific requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productHighlights.map((product) => (
              <Link to="/products" key={product.name} className="card group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="btn-outline">
              View All Products
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Pspluslugahub?</h2>
            <p className="section-subtitle mx-auto">
              We combine traditional craftsmanship with modern manufacturing standards.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point) => (
              <div key={point.title} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-accent-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-accent-50 rounded-xl flex items-center justify-center text-accent-600 mb-4 group-hover:bg-accent-600 group-hover:text-white transition-all duration-300">
                  {point.icon}
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-2">{point.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=600&fit=crop"
            alt="Global shipping"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent-900/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Serving International Clients Worldwide
          </h2>
          <p className="text-lg text-accent-100 max-w-2xl mx-auto mb-8">
            From Nepal to the world — we export quality garments to the USA, UK, Europe, 
            Australia, Japan, and beyond. Your trusted sourcing partner.
          </p>
          <Link to="/quality" className="btn-primary !bg-white !text-accent-700 hover:!bg-gray-100">
            Learn About Our Export Services
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle mx-auto">
              Trusted by brands and buyers across the globe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-accent-600 to-accent-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Start Your Next Garment Order?
          </h2>
          <p className="text-lg text-accent-100 mb-8 max-w-xl mx-auto">
            Get in touch today and receive a free quote within 24 hours. 
            Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary !bg-white !text-accent-700 hover:!bg-gray-100 text-base px-8 py-4">
              Get a Free Quote
            </Link>
            <Link to="/custom-manufacturing" className="btn-outline !border-white/40 !text-white hover:!bg-white/10 text-base px-8 py-4">
              Explore Private Label
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
