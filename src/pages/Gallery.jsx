const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop', alt: 'Production floor', category: 'Factory' },
  { src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop', alt: 'T-shirt collection', category: 'Products' },
  { src: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=400&fit=crop', alt: 'Quality inspection', category: 'Factory' },
  { src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop', alt: 'Hoodie collection', category: 'Products' },
  { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop', alt: 'Finishing station', category: 'Factory' },
  { src: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=600&fit=crop', alt: 'Casual shirts', category: 'Products' },
  { src: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=400&fit=crop', alt: 'Sewing line', category: 'Factory' },
  { src: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=600&fit=crop', alt: 'Jacket lineup', category: 'Products' },
  { src: 'https://images.unsplash.com/photo-1604600695883-afed61ddaa72?w=600&h=400&fit=crop', alt: 'Packaging area', category: 'Factory' },
  { src: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=600&fit=crop', alt: 'Henley shirts', category: 'Products' },
  { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop', alt: 'Shipping preparation', category: 'Factory' },
  { src: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop', alt: 'Premium tees', category: 'Products' },
]

import { useState } from 'react'

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages = filter === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter)

  return (
    <>
      {/* Page Header */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&h=400&fit=crop" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Gallery</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A glimpse into our factory, products, and manufacturing capabilities.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filter */}
          <div className="flex justify-center gap-2 mb-10">
            {['All', 'Factory', 'Products'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-accent-600 text-white shadow-lg shadow-accent-600/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-like Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredImages.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white text-sm font-medium">{img.alt}</span>
                      <span className="block text-xs text-gray-300">{img.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <img
            src={selectedImage.src.replace('w=600', 'w=1200').replace('h=400', 'h=800').replace('h=600', 'h=900')}
            alt={selectedImage.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
