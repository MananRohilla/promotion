'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle } from 'lucide-react'

const WA_NUMBERS = [
  { display: '+91 9810455915', wa: '919810455915', tel: '+919810455915' },
  { display: '+91 8800376390', wa: '918800376390', tel: '+918800376390' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSent(true)
    } catch {
      setError('Something went wrong. Please try again or reach us directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs text-[#555] dark:text-[#888] tracking-widest uppercase font-medium mb-6">
              say hello
            </p>
            <h1 className="text-6xl lg:text-8xl font-black text-black dark:text-white mb-8 leading-[1.05]">
              say<br />hello.
            </h1>
            <p className="text-[#555] dark:text-[#888] leading-relaxed mb-12 max-w-sm">
              Let's collaborate. Feel free to drop us a line about your project.
            </p>

            <div className="flex flex-col gap-4 mb-12">
              <a
                href="mailto:promotion.frames@gmail.com"
                className="flex items-center gap-3 text-sm text-[#555] dark:text-[#888] hover:text-[#ff3c00] transition-colors group"
              >
                <Mail size={16} className="text-[#ff3c00]" />
                promotion.frames@gmail.com
              </a>
              {WA_NUMBERS.map(({ display, wa, tel }) => (
                <div key={wa} className="flex items-center gap-4">
                  <a
                    href={`tel:${tel}`}
                    className="flex items-center gap-3 text-sm text-[#555] dark:text-[#888] hover:text-[#ff3c00] transition-colors"
                  >
                    <Phone size={16} className="text-[#ff3c00]" />
                    {display}
                  </a>
                  <a
                    href={`https://wa.me/${wa}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-[#25D366] hover:text-[#128C7E] transition-colors font-medium"
                  >
                    <MessageCircle size={13} />
                    WhatsApp
                  </a>
                </div>
              ))}
            </div>

            {/* Social links — temporarily hidden
            <div className="flex flex-col gap-4">
              <a
                href="https://instagram.com/promotionmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#555] dark:text-[#888] hover:text-[#ff3c00] transition-colors"
              >
                Instagram — @promotionmedia
              </a>
              <a
                href="https://linkedin.com/company/promotionmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#555] dark:text-[#888] hover:text-[#ff3c00] transition-colors"
              >
                LinkedIn — ProMotion
              </a>
              <a
                href="https://youtube.com/@promotionmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#555] dark:text-[#888] hover:text-[#ff3c00] transition-colors"
              >
                YouTube — @promotionmedia
              </a>
            </div>
            */}
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-96 text-center">
                <div className="w-16 h-16 rounded-full bg-[#ff3c00]/10 flex items-center justify-center mb-6">
                  <span className="text-2xl">✓</span>
                </div>
                <h2 className="text-2xl font-black text-black dark:text-white mb-2">Message sent!</h2>
                <p className="text-[#555] dark:text-[#888]">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="text-xs text-[#555] dark:text-[#888] uppercase tracking-widest font-medium block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-[#ddd] dark:border-[#222] py-3 text-black dark:text-white placeholder-[#555] dark:placeholder-[#555] outline-none focus:border-[#ff3c00] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#555] dark:text-[#888] uppercase tracking-widest font-medium block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-b border-[#ddd] dark:border-[#222] py-3 text-black dark:text-white placeholder-[#555] dark:placeholder-[#555] outline-none focus:border-[#ff3c00] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#555] dark:text-[#888] uppercase tracking-widest font-medium block mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tell us about your project..."
                    className="w-full bg-transparent border-b border-[#ddd] dark:border-[#222] py-3 text-black dark:text-white placeholder-[#555] dark:placeholder-[#555] outline-none focus:border-[#ff3c00] transition-colors text-sm resize-none"
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-full hover:bg-[#ff3c00] dark:hover:bg-[#ff3c00] dark:hover:text-white transition-all duration-200 text-sm mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
