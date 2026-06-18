import { useState } from 'react'
import { Camera, X } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { galleryImages } from '../data/content'
import { useReveal } from '../hooks/useReveal'

const categories = ['All', 'products', 'process', 'behind-scenes', 'people']
const categoryLabels = { All: 'All', products: 'Products', process: 'Process', 'behind-scenes': 'Behind the Scenes', people: 'People' }

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)
  const [ref, visible] = useReveal()

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-pink-50/40 to-violet-50/20" />
        <div className="absolute top-20 right-[15%] w-64 h-64 bg-lavender-400/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 left-[10%] w-48 h-48 bg-mint-400/10 rounded-full blur-3xl animate-blob delay-500" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-cream-200 shadow-sm mb-6 animate-fadeIn">
            <Camera className="w-4 h-4 text-berry-500" />
            <span className="text-sm font-medium text-chocolate-700">Visual Stories</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-chocolate-800 mb-6 animate-slideUp">
            Our <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-lg text-chocolate-600/70 max-w-2xl mx-auto animate-slideUp delay-200">
            A visual feast of our artisan creations, behind-the-scenes moments, and happy customers.
          </p>
        </div>
      </section>

      <section className="pb-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                id={`gallery-filter-${cat}`}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-berry-500 to-lavender-500 text-white shadow-lg shadow-berry-500/20'
                    : 'bg-cream-50 border border-cream-200 text-chocolate-700 hover:border-berry-300 hover:text-berry-500'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img, i) => (
              <div
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className={`group relative cursor-pointer overflow-hidden rounded-3xl aspect-[4/3] transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
                id={`gallery-item-${img.id}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${img.gradient}`} />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-40 group-hover:scale-125 transition-transform duration-500">
                    {img.category === 'products' ? '🍦' : img.category === 'process' ? '🔧' : img.category === 'behind-scenes' ? '🎬' : '😊'}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-lg font-bold font-display text-white">{img.title}</h3>
                  <p className="text-sm text-white/70 capitalize">{img.category.replace('-', ' ')}</p>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                  <Camera className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-xl font-bold font-display text-chocolate-800 mb-2">No images found</h3>
              <p className="text-chocolate-600/60">Try a different category.</p>
            </div>
          )}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-3xl overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`aspect-[16/10] bg-gradient-to-br ${selectedImage.gradient} flex items-center justify-center`}>
              <div className="text-9xl">
                {selectedImage.category === 'products' ? '🍦' : selectedImage.category === 'process' ? '🔧' : selectedImage.category === 'behind-scenes' ? '🎬' : '😊'}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-2xl font-bold font-display text-white">{selectedImage.title}</h3>
              <p className="text-sm text-white/70 capitalize mt-1">{selectedImage.category.replace('-', ' ')}</p>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              id="lightbox-close"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}