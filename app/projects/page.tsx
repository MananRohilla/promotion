'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'

type Filter = 'All' | 'Video' | 'Design'
const filters: Filter[] = ['All', 'Video', 'Design']

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs text-[#555] dark:text-[#888] tracking-widest uppercase font-medium mb-4">
            our work
          </p>
          <h1 className="text-5xl lg:text-7xl font-black text-black dark:text-white">Projects</h1>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === f
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'border border-[#ddd] dark:border-[#222] text-[#555] dark:text-[#888] hover:border-[#ff3c00] hover:text-[#ff3c00]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <Link href={`/work/${p.slug}`} className="group block">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={p.heroImage}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                      View Work →
                    </span>
                  </div>
                </div>
                <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#f5f5f5] dark:bg-[#1a1a1a] text-[#555] dark:text-[#888] mb-2">
                  {p.category}
                </span>
                <h2 className="font-bold text-black dark:text-white group-hover:text-[#ff3c00] transition-colors">
                  {p.title}
                </h2>
                <p className="text-sm text-[#555] dark:text-[#888] mt-1 line-clamp-2">{p.tagline}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
