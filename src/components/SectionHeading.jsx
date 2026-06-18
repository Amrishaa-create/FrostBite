import { useReveal } from '../hooks/useReveal'

export default function SectionHeading({ subtitle, title, description, light = false }) {
    const [ref, visible] = useReveal()

    return (
        <div
            ref={ref}
            className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
        >
            {subtitle && (
                <span className="inline-block px-4 py-1.5 rounded-full bg-berry-500/10 text-berry-500 text-xs font-semibold uppercase tracking-widest mb-4">
                    {subtitle}
                </span>
            )}
            <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4 ${light ? 'text-white' : 'text-chocolate-800'
                    }`}
            >
                {title}
            </h2>
            {description && (
                <p className={`text-base sm:text-lg leading-relaxed ${light ? 'text-cream-200/70' : 'text-chocolate-600/70'}`}>
                    {description}
                </p>
            )}
        </div>
    )
}