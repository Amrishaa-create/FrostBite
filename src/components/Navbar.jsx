import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IceCreamCone, Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/about', label: 'About' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-pink-100/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" id="nav-logo">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-berry-500 to-lavender-500 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <IceCreamCone className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-mint-400 rounded-full animate-pulse" />
            </div>
            <span className="text-xl font-bold font-display tracking-tight">
              <span className="gradient-text-warm">Frost</span>
              <span className="text-chocolate-800">bite</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                id={`nav-${link.label.toLowerCase()}`}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-berry-600 bg-berry-500/10'
                    : 'text-chocolate-700 hover:text-berry-500 hover:bg-berry-500/5'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-berry-500 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/menu"
              id="nav-cta"
              className="px-6 py-2.5 bg-gradient-to-r from-berry-500 to-lavender-500 text-white rounded-full text-sm font-semibold shadow-lg shadow-berry-500/25 hover:shadow-xl hover:shadow-berry-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-cream-100 flex items-center justify-center text-chocolate-700 hover:bg-berry-50 hover:text-berry-500 transition-colors"
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl border-t border-cream-200 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                location.pathname === link.path
                  ? 'text-berry-600 bg-berry-500/10'
                  : 'text-chocolate-700 hover:bg-cream-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/menu"
            className="block mt-3 px-4 py-3 bg-gradient-to-r from-berry-500 to-lavender-500 text-white rounded-xl text-sm font-semibold text-center"
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  )
}