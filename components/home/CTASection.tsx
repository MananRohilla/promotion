'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function CTASection() {
  return (
    <section className="py-32 border-t border-[#ddd] dark:border-[#222] bg-[#f5f5f5] dark:bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs text-[#555] dark:text-[#888] tracking-widest uppercase font-medium mb-8"
        >
          say hello
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-black dark:text-white mb-6 leading-tight"
        >
          Have a project
          <br />
          in mind?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#555] dark:text-[#888] max-w-md mx-auto mb-10 leading-relaxed"
        >
          Drop us a line — we'd love to collaborate and create something impactful together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-[#ff3c00] text-white font-bold rounded-full hover:bg-[#e03500] transition-colors duration-200 text-sm"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
