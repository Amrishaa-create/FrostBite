import { Link } from 'react-router-dom'
import { Heart, Users, Award, Leaf, Target, Eye, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { useReveal } from '../hooks/useReveal'

function Timeline() {
  const milestones = [
    { year: '2018', title: 'The Dream Begins', description: 'Founded in a small kitchen with a passion for crafting the perfect scoop using only natural ingredients.' },
    { year: '2019', title: 'First Shop Opens', description: "Opened our flagship store on Gelato Lane, quickly becoming the neighborhood's favorite sweet spot." },
    { year: '2021', title: 'Award Recognition', description: 'Won "Best Artisan Creamery" at the International Gelato Festival in Bologna, Italy.' },
    { year: '2023', title: 'Going National', description: 'Expanded to 5 locations and launched our online ordering platform with nationwide delivery.' },
    { year: '2025', title: 'Sustainability Pledge', description: 'Achieved 100% sustainable sourcing and zero-waste operations across all locations.' },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-0 w-64 h-64 bg-berry-400/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Our Journey" title="From Dream to Reality" description="Every great thing starts with a single scoop. Here's how we got here." />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-berry-400 via-lavender-400 to-mint-400" />

          {milestones.map((m, i) => {
            const [ref, visible] = useReveal(0.2)
            const isLeft = i % 2 === 0

            return (
              <div
                key={m.year}
                ref={ref}
                className={`relative flex items-center mb-12 last:mb-0 transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-berry-500 to-lavender-500 border-4 border-white shadow-lg z-10" />

                <div className={`ml-12 md:ml-0 md:w-[45%] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="card-hover p-6 rounded-2xl bg-cream-50 border border-cream-200/60">
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-berry-500 to-lavender-500 text-white text-xs font-bold mb-3">
                      {m.year}
                    </span>
                    <h3 className="text-lg font-bold font-display text-chocolate-800 mb-2">{m.title}</h3>
                    <p className="text-sm text-chocolate-600/60 leading-relaxed">{m.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Values() {
  const [ref, visible] = useReveal()

  const values = [
    { icon: Heart, title: 'Passion', description: 'Every flavor is born from genuine love for the craft of ice cream making.', color: 'from-berry-500 to-rose-500' },
    { icon: Leaf, title: 'Sustainability', description: "We source ethically, reduce waste, and invest in our planet's future.", color: 'from-mint-400 to-emerald-500' },
    { icon: Users, title: 'Community', description: 'We believe in bringing people together, one scoop at a time.', color: 'from-lavender-500 to-purple-500' },
    { icon: Target, title: 'Quality', description: 'No shortcuts, no compromises. Only the finest ingredients make the cut.', color: 'from-peach-400 to-orange-500' },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-chocolate-900 via-chocolate-800 to-chocolate-900" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-berry-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Our Values" title="What We Stand For" description="The principles that guide every decision we make." light />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`group text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <v.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-3">{v.title}</h3>
              <p className="text-sm text-cream-200/60 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MissionVision() {
  const [ref1, v1] = useReveal()
  const [ref2, v2] = useReveal()

  return (
    <section className="py-24 bg-gradient-to-b from-white to-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div
            ref={ref1}
            className={`p-10 rounded-3xl bg-gradient-to-br from-berry-50 to-pink-50 border border-berry-100 transition-all duration-700 ${
              v1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-berry-500 to-rose-500 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold font-display text-chocolate-800 mb-4">Our Mission</h3>
            <p className="text-chocolate-600/70 leading-relaxed">
              To craft the world's most extraordinary ice cream experiences using only the finest natural ingredients,
              bringing joy and wonder to every customer while championing sustainable practices.
            </p>
          </div>

          <div
            ref={ref2}
            className={`p-10 rounded-3xl bg-gradient-to-br from-lavender-50 to-violet-50 border border-lavender-100 transition-all duration-700 ${
              v2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-lavender-500 to-purple-500 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold font-display text-chocolate-800 mb-4">Our Vision</h3>
            <p className="text-chocolate-600/70 leading-relaxed">
              To become the global benchmark for artisan ice cream, inspiring a new generation of flavor artisans
              and proving that the best things in life are crafted with care, creativity, and conscience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Team() {
  const [ref, visible] = useReveal()

  const team = [
    { name: 'Elena Rossi', role: 'Founder & Head Gelato Artisan', color: 'from-berry-400 to-rose-500', initials: 'ER' },
    { name: 'Marcus Chen', role: 'Executive Pastry Chef', color: 'from-lavender-400 to-purple-500', initials: 'MC' },
    { name: 'Sofia Andersson', role: 'Flavor Innovation Lead', color: 'from-mint-400 to-emerald-500', initials: 'SA' },
  ]

  return (
    <section className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Our Team" title="The Artisans Behind the Magic" description="Meet the passionate people who craft every scoop." />

        <div ref={ref} className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`card-hover text-center p-8 rounded-3xl bg-white border border-cream-200/60 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-bold font-display shadow-lg`}>
                {member.initials}
              </div>
              <h3 className="text-lg font-bold font-display text-chocolate-800 mb-1">{member.name}</h3>
              <p className="text-sm text-chocolate-600/60">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-pink-50/40 to-violet-50/20" />
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-berry-400/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 left-[5%] w-48 h-48 bg-mint-400/10 rounded-full blur-3xl animate-blob delay-500" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-cream-200 shadow-sm mb-6 animate-fadeIn">
            <Heart className="w-4 h-4 text-berry-500" />
            <span className="text-sm font-medium text-chocolate-700">Our Story</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-chocolate-800 mb-6 animate-slideUp">
            Passion in Every <span className="gradient-text">Scoop</span>
          </h1>
          <p className="text-lg text-chocolate-600/70 max-w-2xl mx-auto animate-slideUp delay-200">
            What started as a dream in a tiny kitchen has grown into a beloved creamery,
            but our commitment to quality has never changed.
          </p>
        </div>
      </section>

      <Timeline />
      <Values />
      <MissionVision />
      <Team />

      <section className="py-20 bg-gradient-to-r from-berry-500 via-lavender-500 to-mint-400 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-[10%] text-8xl animate-float">🍦</div>
          <div className="absolute bottom-10 right-[15%] text-6xl animate-float-slow delay-300">🍨</div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">Come Taste Our Story</h2>
          <p className="text-white/80 mb-8">Visit any of our locations and experience the magic firsthand.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-berry-600 rounded-full font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            Find a Location <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}