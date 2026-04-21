'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function AboutSnippet() {
  return (
    <section className="py-24 border-t border-[#ddd] dark:border-[#222]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs text-[#555] dark:text-[#888] tracking-widest uppercase font-medium mb-12">
          .about
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl font-light italic leading-snug text-black dark:text-white">
              "Our craft is building experiences that bring value to people and celebrate function over form. We hide the ego and give freedom to creativity."
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-10 text-sm text-[#555] dark:text-[#888] hover:text-[#ff3c00] dark:hover:text-[#ff3c00] transition-colors group"
            >
              Learn more about us
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative h-96 rounded-2xl overflow-hidden"
          >
            <Image
              src="https://picsum.photos/id/100/800/600"
              alt="ProMotion team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
