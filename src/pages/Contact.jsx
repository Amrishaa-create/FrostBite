import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [ref, visible] = useReveal()

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormState({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    { icon: MapPin, label: 'Visit Us', value: '123 Gelato Lane, Sweet City, SC 12345', color: 'from-berry-500 to-rose-500' },
    { icon: Phone, label: 'Call Us', value: '(555) 123-4567', color: 'from-lavender-500 to-purple-500' },
    { icon: Mail, label: 'Email Us', value: 'hello@frostbite.com', color: 'from-mint-400 to-emerald-500' },
    { icon: Clock, label: 'Hours', value: 'Mon-Fri 11am-10pm • Sat-Sun 10am-11pm', color: 'from-peach-400 to-orange-500' },
  ]

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-pink-50/40 to-violet-50/20" />
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-berry-400/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-[10%] w-48 h-48 bg-lavender-400/10 rounded-full blur-3xl animate-blob delay-500" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-cream-200 shadow-sm mb-6 animate-fadeIn">
            <MessageSquare className="w-4 h-4 text-berry-500" />
            <span className="text-sm font-medium text-chocolate-700">Get in Touch</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-chocolate-800 mb-6 animate-slideUp">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-lg text-chocolate-600/70 max-w-2xl mx-auto animate-slideUp delay-200">
            Have a question, catering request, or just want to say hi? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <div
                key={info.label}
                className={`card-hover p-6 rounded-3xl bg-cream-50 border border-cream-200/60 text-center transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg`}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-bold text-chocolate-800 mb-1">{info.label}</h3>
                <p className="text-sm text-chocolate-600/60">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-cream-200/60 shadow-xl shadow-berry-500/5">
                <h2 className="text-2xl font-bold font-display text-chocolate-800 mb-2">Send a Message</h2>
                <p className="text-sm text-chocolate-600/60 mb-8">We'll get back to you within 24 hours.</p>

                {submitted ? (
                  <div className="text-center py-16 animate-scaleIn">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-mint-400/10 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-mint-500" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-chocolate-800 mb-2">Message Sent!</h3>
                    <p className="text-sm text-chocolate-600/60">Thank you for reaching out. We'll be in touch soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-chocolate-700 mb-2">Name</label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 text-chocolate-800 placeholder:text-chocolate-600/40 focus:outline-none focus:ring-2 focus:ring-berry-500/30 focus:border-berry-500/50 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium text-chocolate-700 mb-2">Email</label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          placeholder="you@email.com"
                          className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 text-chocolate-800 placeholder:text-chocolate-600/40 focus:outline-none focus:ring-2 focus:ring-berry-500/30 focus:border-berry-500/50 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className="block text-sm font-medium text-chocolate-700 mb-2">Subject</label>
                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        placeholder="What's this about?"
                        className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 text-chocolate-800 placeholder:text-chocolate-600/40 focus:outline-none focus:ring-2 focus:ring-berry-500/30 focus:border-berry-500/50 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-chocolate-700 mb-2">Message</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us what's on your mind..."
                        className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 text-chocolate-800 placeholder:text-chocolate-600/40 focus:outline-none focus:ring-2 focus:ring-berry-500/30 focus:border-berry-500/50 transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      id="contact-submit"
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-berry-500 to-lavender-500 text-white rounded-xl font-semibold shadow-lg shadow-berry-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-28 rounded-3xl overflow-hidden border border-cream-200/60 shadow-xl shadow-berry-500/5">
                <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] bg-gradient-to-br from-cream-100 via-pink-50 to-lavender-50 flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-6 gap-px h-full">
                      {[...Array(24)].map((_, i) => (
                        <div key={i} className="bg-chocolate-600/20 rounded" />
                      ))}
                    </div>
                  </div>

                  <div className="absolute inset-0">
                    <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-chocolate-600/10" />
                    <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-chocolate-600/10" />
                    <div className="absolute left-1/3 top-0 bottom-0 w-0.5 bg-chocolate-600/10" />
                    <div className="absolute left-2/3 top-0 bottom-0 w-0.5 bg-chocolate-600/10" />
                  </div>

                  <div className="relative z-10 text-center">
                    <div className="animate-float">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-berry-500 to-lavender-500 flex items-center justify-center shadow-xl">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="glass px-6 py-3 rounded-2xl">
                      <p className="text-sm font-bold text-chocolate-800">Frostbite Creamery</p>
                      <p className="text-xs text-chocolate-600/60">123 Gelato Lane</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="FAQ" title="Common Questions" description="Everything you need to know about Frostbite Creamery." />
          <FAQList />
        </div>
      </section>
    </>
  )
}

function FAQList() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    { q: 'Do you offer dairy-free options?', a: 'Absolutely! We have a dedicated dairy-free line including our Mango Tango sorbet, coconut-based flavors, and seasonal fruit sorbets. All made with the same attention to quality.' },
    { q: 'Can I order online for delivery?', a: 'Yes! You can order through our website for local delivery or pick-up. We also ship select pints nationwide with dry ice packaging to ensure perfect freshness.' },
    { q: 'Do you cater for events?', a: 'We love events! From weddings to corporate gatherings, our catering team creates custom flavor menus with beautiful presentation. Contact us to discuss your event.' },
    { q: 'How do you keep your ice cream fresh?', a: 'Every batch is made fresh daily in small quantities. We never use preservatives — just pure, real ingredients stored at the perfect temperature.' },
    { q: 'Are your ingredients organic?', a: 'We source organic and sustainably farmed ingredients whenever possible. Our dairy comes from local grass-fed farms, and our fruits are sourced from certified organic suppliers.' },
  ]

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i} className="rounded-2xl bg-white border border-cream-200/60 overflow-hidden transition-all duration-300">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left"
              id={`faq-${i}`}
            >
              <span className="text-sm font-semibold text-chocolate-800 pr-4">{faq.q}</span>
              <span
                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300 ${
                  isOpen
                    ? 'bg-gradient-to-br from-berry-500 to-lavender-500 text-white rotate-45'
                    : 'bg-cream-100 text-chocolate-600'
                }`}
              >
                +
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
              <p className="px-6 pb-6 text-sm text-chocolate-600/60 leading-relaxed">{faq.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}