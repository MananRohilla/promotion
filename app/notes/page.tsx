'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-32"
        >
          <p className="text-xs text-[#555] dark:text-[#888] tracking-widest uppercase font-medium mb-6">
            .notes & blog
          </p>
          <h1 className="text-6xl lg:text-8xl font-black text-black dark:text-white mb-8 leading-[1.05]">
            coming<br />soon.
          </h1>
          <p className="text-[#555] dark:text-[#888] leading-relaxed mb-12 max-w-sm mx-auto">
            We're working on something worth reading. Check back soon.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#555] dark:text-[#888] hover:text-[#ff3c00] transition-colors"
          >
            ← Back to home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
