import { Link } from 'react-router-dom'

const categories = [
  { name: 'All', value: 'all' },
  { name: 'T-Shirts', value: 'tshirts' },
  { name: 'Hoodies', value: 'hoodies' },
  { name: 'Uniforms', value: 'uniforms' },
  { name: 'Sportswear', value: 'sportswear' },
  { name: 'Casual Wear', value: 'casual' },
]

const products = [
  {
    name: 'Classic Cotton T-Shirt',
    category: 'tshirts',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
    desc: 'Premium quality round-neck tee for everyday wear.',
    fabric: '100% Combed Cotton, 180 GSM',
  },
  {
    name: 'Performance Polo',
    category: 'tshirts',
    image: 'https://images.unsplash.com/photo-1625910513413-5fc5e0ec347d?w=400&h=500&fit=crop',
    desc: 'Breathable polo shirt perfect for corporate branding.',
    fabric: 'Cotton-Polyester Blend, 220 GSM',
  },
  {
    name: 'V-Neck Premium Tee',
    category: 'tshirts',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop',
    desc: 'Soft-touch v-neck tee with reinforced stitching.',
    fabric: 'Ring-Spun Cotton, 160 GSM',
  },
  {
    name: 'Pullover Hoodie',
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop',
    desc: 'Warm pullover with kangaroo pocket and drawstring hood.',
    fabric: 'French Terry, 320 GSM',
  },
  {
    name: 'Zip-Up Jacket',
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
    desc: 'Full-zip jacket with fleece lining for colder days.',
    fabric: 'Fleece Cotton Blend, 380 GSM',
  },
  {
    name: 'Corporate Uniform Shirt',
    category: 'uniforms',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
    desc: 'Professional-grade uniform shirt with embroidery-ready panels.',
    fabric: 'Poly-Cotton Poplin, 130 GSM',
  },
  {
    name: 'Industrial Workwear',
    category: 'uniforms',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=500&fit=crop',
    desc: 'Durable workwear designed for heavy-duty environments.',
    fabric: 'Canvas Cotton, 280 GSM',
  },
  {
    name: 'Dri-Fit Sports Tee',
    category: 'sportswear',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=500&fit=crop',
    desc: 'Moisture-wicking sports tee for active performance.',
    fabric: 'Polyester Mesh, 140 GSM',
  },
  {
    name: 'Track Pants',
    category: 'sportswear',
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=500&fit=crop',
    desc: 'Comfortable track pants with elastic waist and zip pockets.',
    fabric: 'Polyester Tricot, 200 GSM',
  },
  {
    name: 'Casual Chino Shorts',
    category: 'casual',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop',
    desc: 'Relaxed-fit chino shorts for casual and leisurewear.',
    fabric: 'Cotton Twill, 240 GSM',
  },
  {
    name: 'Linen Shirt',
    category: 'casual',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop',
    desc: 'Lightweight linen shirt ideal for warm weather.',
    fabric: 'Pure Linen, 150 GSM',
  },
  {
    name: 'Henley Long Sleeve',
    category: 'casual',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=500&fit=crop',
    desc: 'Classic henley with button placket and soft texture.',
    fabric: 'Slub Cotton Jersey, 180 GSM',
  },
]

import { useState } from 'react'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Page Header */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1600&h=400&fit=crop" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our Products</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Browse our range of garments manufactured with precision and care.
          </p>
        </div>
      </section>

      {/* Category Filter + Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.value
                    ? 'bg-accent-600 text-white shadow-lg shadow-accent-600/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.name} className="card group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{product.desc}</p>
                  <div className="flex items-center gap-2 text-xs text-accent-600 bg-accent-50 px-3 py-1.5 rounded-full w-fit">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                    {product.fabric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Need Something Custom?</h2>
          <p className="section-subtitle mx-auto mb-8">
            We offer full private label and OEM services. Tell us your requirements 
            and we'll bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/custom-manufacturing" className="btn-primary">
              Explore Custom Manufacturing
            </Link>
            <Link to="/contact" className="btn-outline">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
