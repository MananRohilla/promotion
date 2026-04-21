'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const words = ['Hospitals', 'Industry Leaders', 'Corporate Events', 'D2C Brands', 'Startups']

function TypewriterWord() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    if (!deleting && displayed === word) {
      const t = setTimeout(() => setDeleting(true), 2000)
      return () => clearTimeout(t)
    }
    if (deleting && displayed === '') {
      setDeleting(false)
      setIndex(i => (i + 1) % words.length)
      return
    }
    const speed = deleting ? 50 : 90
    const t = setTimeout(() => {
      setDisplayed(
        deleting
          ? word.slice(0, displayed.length - 1)
          : word.slice(0, displayed.length + 1)
      )
    }, speed)
    return () => clearTimeout(t)
  }, [displayed, deleting, index])

  return (
    <span className="text-[#ff3c00]">
      {displayed}
      <span className="inline-block w-[3px] h-[0.85em] bg-[#ff3c00] ml-1 align-middle animate-pulse" />
    </span>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 py-24 w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ddd] dark:border-[#222] mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot" />
          <span className="text-xs text-[#555] dark:text-[#888]">Available for new projects</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.05] tracking-tight text-black dark:text-white max-w-5xl"
        >
          A one stop creative
          <br />
          partner for{' '}
          <TypewriterWord />
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 text-lg text-[#555] dark:text-[#888] max-w-xl leading-relaxed font-light"
        >
          We craft crisp, cinematic content — videos, visuals, and digital experiences that drive real results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/projects"
            className="px-7 py-3.5 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full hover:bg-[#ff3c00] dark:hover:bg-[#ff3c00] dark:hover:text-white transition-all duration-200"
          >
            View Our Work
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3.5 border border-[#ddd] dark:border-[#333] text-black dark:text-white text-sm font-semibold rounded-full hover:border-[#ff3c00] hover:text-[#ff3c00] transition-all duration-200"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
