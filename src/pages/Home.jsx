import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Sparkles,
  Award,
  Leaf,
  Clock,
  Star,
  ChevronRight,
  IceCreamCone,
  Quote,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import FlavorCard from '../components/FlavorCard'
import { useReveal, useCountUp } from '../hooks/useReveal'
import { flavors, testimonials } from '../data/content'

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-pink-50/50 to-violet-50/30" />

      <div className="absolute top-20 right-[10%] w-72 h-72 bg-berry-400/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-lavender-400/10 rounded-full blur-3xl animate-blob delay-300" />
      <div className="absolute top-[40%] left-[30%] w-48 h-48 bg-mint-400/10 rounded-full blur-3xl animate-blob delay-700" />

      <div className="absolute top-32 right-[15%] animate-float delay-200 hidden lg:block">
        <div className="text-6xl">🍦</div>
      </div>
      <div className="absolute bottom-32 right-[25%] animate-float-slow delay-500 hidden lg:block">
        <div className="text-4xl">🍓</div>
      </div>
      <div className="absolute top-[45%] left-[8%] animate-float delay-1000 hidden lg:block">
        <div className="text-5xl">🍨</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-cream-200 shadow-sm mb-8 animate-fadeIn">
              <Sparkles className="w-4 h-4 text-berry-500" />
              <span className="text-sm font-medium text-chocolate-700">Handcrafted with love since 2018</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display leading-[1.1] mb-6 animate-slideUp">
              <span className="text-chocolate-800">Artisan</span>
              <br />
              <span className="gradient-text">Ice Cream</span>
              <br />
              <span className="text-chocolate-800">Perfection</span>
            </h1>

            <p className="text-lg text-chocolate-600/70 leading-relaxed mb-8 animate-slideUp delay-200">
              Experience the extraordinary. Every scoop is crafted from the world's finest ingredients
              — from Sicilian pistachios to Madagascar vanilla beans — delivering pure, premium bliss.
            </p>

            <div className="flex flex-wrap gap-4 animate-slideUp delay-300">
              <Link
                to="/menu"
                id="hero-explore-cta"
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-berry-500 to-lavender-500 text-white rounded-full font-semibold shadow-xl shadow-berry-500/25 hover:shadow-2xl hover:shadow-berry-500/30 hover:-translate-y-1 transition-all duration-300"
              >
                Explore Flavors
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                id="hero-story-cta"
                className="flex items-center gap-2 px-8 py-4 bg-white/70 backdrop-blur-sm border border-cream-200 text-chocolate-700 rounded-full font-semibold hover:bg-white hover:-translate-y-1 transition-all duration-300"
              >
                Our Story
              </Link>
            </div>

            <div className="flex items-center gap-6 mt-10 animate-slideUp delay-500">
              <div className="flex -space-x-2">
                {['bg-berry-400', 'bg-lavender-400', 'bg-mint-400', 'bg-peach-400'].map((bg, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${bg} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                    {['S', 'J', 'E', 'D'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-chocolate-600/60 mt-0.5">Loved by 10,000+ customers</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-berry-400/20 via-lavender-400/20 to-mint-400/20 animate-blob flex items-center justify-center">
                <div className="text-[12rem] animate-float drop-shadow-2xl">🍦</div>
              </div>

              <div className="absolute -top-4 right-0 animate-float delay-100">
                <div className="glass px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-berry-500/10 flex items-center justify-center">
                    <Award className="w-4 h-4 text-berry-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-chocolate-800">Award Winning</p>
                    <p className="text-[10px] text-chocolate-600/60">Best Creamery 2024</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 animate-float delay-500">
                <div className="glass px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-mint-400/10 flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-mint-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-chocolate-800">100% Natural</p>
                    <p className="text-[10px] text-chocolate-600/60">No preservatives</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 animate-float-slow delay-300">
                <div className="glass px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-lavender-400/10 flex items-center justify-center">
                    <IceCreamCone className="w-4 h-4 text-lavender-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-chocolate-800">30+ Flavors</p>
                    <p className="text-[10px] text-chocolate-600/60">Rotating monthly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-[60px] block">
          <path d="M0,40 C360,100 1080,0 1440,60 L1440,100 L0,100 Z" className="fill-white" />
        </svg>
      </div>
    </section>
  )
}

function Stats() {
  const stats = [
    { label: 'Flavors Crafted', end: 30, suffix: '+', icon: IceCreamCone, color: 'from-berry-500 to-rose-500' },
    { label: 'Happy Customers', end: 10, suffix: 'K+', icon: Star, color: 'from-lavender-500 to-purple-500' },
    { label: 'Years of Craft', end: 8, suffix: '+', icon: Award, color: 'from-mint-400 to-emerald-500' },
    { label: 'Awards Won', end: 15, suffix: '+', icon: Sparkles, color: 'from-peach-400 to-orange-500' },
  ]

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ label, end, suffix, icon: Icon, color }) => {
            const [ref, count] = useCountUp(end)
            return (
              <div key={label} ref={ref} className="text-center group">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold font-display text-chocolate-800">
                  {count}{suffix}
                </p>
                <p className="text-sm text-chocolate-600/60 mt-1">{label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FeaturedFlavors() {
  const featured = flavors.slice(0, 4)

  return (
    <section id="featured-flavors" className="py-24 bg-gradient-to-b from-white via-cream-50 to-white relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-berry-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-lavender-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          subtitle="Our Flavors"
          title="Signature Creations"
          description="Each flavor is a carefully composed masterpiece, blending rare ingredients with artisan technique."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((flavor, i) => (
            <FlavorCard key={flavor.id} flavor={flavor} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            id="view-all-flavors"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-berry-500 text-berry-500 font-semibold hover:bg-berry-500 hover:text-white transition-all duration-300 group"
          >
            View All Flavors
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  const [ref, visible] = useReveal()

  const features = [
    {
      icon: Leaf,
      title: '100% Natural',
      description: 'No artificial colors, flavors, or preservatives. Just pure, real ingredients sourced from the best farms.',
      color: 'from-mint-400 to-emerald-500',
    },
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Recognized by the International Gelato Festival and featured in Food & Wine magazine.',
      color: 'from-berry-500 to-rose-500',
    },
    {
      icon: Clock,
      title: 'Made Fresh Daily',
      description: 'Small-batch production ensures every scoop is made with care, within hours of serving.',
      color: 'from-lavender-500 to-purple-500',
    },
    {
      icon: Sparkles,
      title: 'Unique Flavors',
      description: 'Our flavor lab constantly innovates — from classic favorites to daring seasonal creations.',
      color: 'from-peach-400 to-orange-500',
    },
  ]

  return (
    <section id="why-choose-us" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-chocolate-900 via-chocolate-800 to-chocolate-900" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-berry-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lavender-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Why Frostbite"
          title="Crafted for Perfection"
          description="We obsess over every detail so you can enjoy pure, indulgent bliss in every bite."
          light
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-cream-200/60 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const [ref, visible] = useReveal()

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white via-cream-50 to-white relative">
      <div className="absolute top-20 left-10 w-64 h-64 bg-berry-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-lavender-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          subtitle="Testimonials"
          title="What People Say"
          description="Don't just take our word for it — hear from the ice cream lovers who keep coming back."
        />

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`card-hover p-6 rounded-3xl bg-white border border-cream-200/60 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Quote className="w-8 h-8 text-berry-400/20 mb-4" />
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-chocolate-600/70 leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-berry-400 to-lavender-400 flex items-center justify-center text-white text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-chocolate-800">{t.name}</p>
                  <p className="text-xs text-chocolate-600/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTABanner() {
  const [ref, visible] = useReveal()

  return (
    <section id="cta-banner" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-berry-500 via-lavender-500 to-mint-400" />

      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-[10%] text-8xl animate-float">🍦</div>
        <div className="absolute bottom-10 right-[15%] text-6xl animate-float-slow delay-300">🍨</div>
        <div className="absolute top-[40%] right-[5%] text-5xl animate-float delay-700">🍧</div>
        <div className="absolute bottom-[20%] left-[20%] text-7xl animate-float-slow delay-500">🧁</div>
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl sm:text-5xl font-bold font-display text-white mb-6">
          Ready to Taste the Magic?
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
          Visit us today or order online. Your perfect scoop is just a click away.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/menu"
            id="cta-order"
            className="px-8 py-4 bg-white text-berry-600 rounded-full font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Order Now
          </Link>
          <Link
            to="/contact"
            id="cta-visit"
            className="px-8 py-4 bg-white/15 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold hover:bg-white/25 hover:-translate-y-1 transition-all duration-300"
          >
            Find a Store
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedFlavors />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  )
}