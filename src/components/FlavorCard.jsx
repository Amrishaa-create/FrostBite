import { Star, ShoppingBag } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function FlavorCard({ flavor, index = 0 }) {
  const [ref, visible] = useReveal(0.1)

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="card-hover relative bg-white rounded-3xl overflow-hidden border border-cream-200/60">
        {/* Tag */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-berry-500 to-lavender-500 text-white text-xs font-semibold shadow-lg">
            {flavor.tag}
          </span>
        </div>

        {/* Visual Area */}
        <div className={`relative h-48 bg-gradient-to-br ${flavor.color} overflow-hidden`}>
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/10 rounded-full" />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-7xl group-hover:scale-110 transition-transform duration-500 drop-shadow-lg filter">
              {flavor.emoji}
            </span>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            ))}
            <span className="text-xs text-chocolate-600/50 ml-1">(4.9)</span>
          </div>

          <h3 className="text-lg font-bold font-display text-chocolate-800 mb-2 group-hover:text-berry-600 transition-colors">
            {flavor.name}
          </h3>

          <p className="text-sm text-chocolate-600/60 leading-relaxed mb-4 line-clamp-2">
            {flavor.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {flavor.ingredients.map((ing) => (
              <span
                key={ing}
                className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${flavor.bgColor} ${flavor.accentColor}`}
              >
                {ing}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold gradient-text-warm">{flavor.price}</span>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-berry-500 to-lavender-500 text-white text-sm font-semibold shadow-lg shadow-berry-500/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              id={`add-to-cart-${flavor.id}`}
            >
              <ShoppingBag className="w-4 h-4" />
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}