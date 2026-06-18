import { Link } from 'react-router-dom'
import { IceCreamCone, Camera, MessageCircle, Globe, MapPin, Phone, Mail, Heart } from 'lucide-react'

export default function Footer() {
    return (
        <footer id="footer" className="relative bg-chocolate-900 text-cream-200 overflow-hidden">
            {/* Decorative top wave */}
            <div className="absolute top-0 left-0 right-0 overflow-hidden leading-[0]">
                <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="relative block w-full h-[60px]">
                    <path
                        d="M0,0 C300,60 900,0 1200,40 L1200,0 L0,0 Z"
                        className="fill-cream-50"
                    />
                </svg>
            </div>

            {/* Floating decorative blobs */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-berry-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-lavender-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-6 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-berry-500 to-lavender-500 flex items-center justify-center">
                                <IceCreamCone className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold font-display text-white">Frostbite</span>
                        </Link>
                        <p className="text-cream-300/70 text-sm leading-relaxed mb-6">
                            Crafting artisan ice cream with premium ingredients since 2018. Every scoop is a masterpiece.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: Camera, label: 'Instagram' },
                                { icon: MessageCircle, label: 'Twitter' },
                                { icon: Globe, label: 'Facebook' },
                            ].map(({ icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-berry-500/20 hover:border-berry-500/30 transition-all duration-300 group"
                                >
                                    <Icon className="w-4 h-4 text-cream-300 group-hover:text-berry-400 transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Explore</h4>
                        <ul className="space-y-3">
                            {[
                                { to: '/', label: 'Home' },
                                { to: '/menu', label: 'Our Menu' },
                                { to: '/about', label: 'Our Story' },
                                { to: '/gallery', label: 'Gallery' },
                                { to: '/contact', label: 'Contact' },
                            ].map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-cream-300/70 hover:text-berry-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Hours</h4>
                        <ul className="space-y-3 text-sm text-cream-300/70">
                            <li className="flex justify-between">
                                <span>Monday – Friday</span>
                                <span className="text-cream-200">11am – 10pm</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday</span>
                                <span className="text-cream-200">10am – 11pm</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-cream-200">10am – 9pm</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-cream-300/70">
                                <MapPin className="w-4 h-4 mt-0.5 text-berry-400 shrink-0" />
                                <span>123 Gelato Lane, Sweet City, SC 12345</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-cream-300/70">
                                <Phone className="w-4 h-4 text-berry-400 shrink-0" />
                                <span>(555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-cream-300/70">
                                <Mail className="w-4 h-4 text-berry-400 shrink-0" />
                                <span>hello@frostbite.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-cream-300/50 text-xs">
                        © {new Date().getFullYear()} Frostbite Creamery. All rights reserved.
                    </p>
                    <p className="text-cream-300/50 text-xs flex items-center gap-1">
                        Made with <Heart className="w-3 h-3 text-berry-500 fill-berry-500" /> and premium ingredients
                    </p>
                </div>
            </div>
        </footer>
    )
}