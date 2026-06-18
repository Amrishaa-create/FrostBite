import { useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import FlavorCard from '../components/FlavorCard'
import { flavors } from '../data/content'

const categories = ['All', 'Best Seller', 'Premium', 'New', 'Vegan', 'Seasonal', 'Classic', 'Exotic', 'Kids Love']

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = flavors.filter((f) => {
    const matchCategory = activeCategory === 'All' || f.tag === activeCategory
    const matchSearch =
      f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-pink-50/40 to-violet-50/20" />
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-berry-400/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 left-[10%] w-48 h-48 bg-lavender-400/10 rounded-full blur-3xl animate-blob delay-500" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Menu"
            title="Discover Our Flavors"
            description="From timeless classics to bold seasonal experiments — find your perfect scoop."
          />

          <div className="max-w-2xl mx-auto mb-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-chocolate-600/40" />
              <input
                type="text"
                id="menu-search"
                placeholder="Search flavors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-12 py-4 rounded-2xl bg-white border border-cream-200 shadow-sm text-chocolate-800 placeholder:text-chocolate-600/40 focus:outline-none focus:ring-2 focus:ring-berry-500/30 focus:border-berry-500/50 transition-all"
              />
              <SlidersHorizontal className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-chocolate-600/40" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-berry-500 to-lavender-500 text-white shadow-lg shadow-berry-500/20'
                    : 'bg-white border border-cream-200 text-chocolate-700 hover:border-berry-300 hover:text-berry-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 bg-gradient-to-b from-white to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((flavor, i) => (
                <FlavorCard key={flavor.id} flavor={flavor} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold font-display text-chocolate-800 mb-2">No flavors found</h3>
              <p className="text-chocolate-600/60">Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}