'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const posts = [
  {
    title: 'How to Build a Brand with Video Content',
    date: 'Apr 2024',
    image: 'https://picsum.photos/id/200/800/600',
    slug: 'build-brand-video-content',
  },
  {
    title: 'Why Cinematic Quality Matters for D2C Brands',
    date: 'Mar 2024',
    image: 'https://picsum.photos/id/210/800/600',
    slug: 'cinematic-quality-d2c',
  },
  {
    title: 'Social Media Strategy That Actually Works',
    date: 'Feb 2024',
    image: 'https://picsum.photos/id/220/800/600',
    slug: 'social-media-strategy',
  },
]

export function BlogPreview() {
  return (
    <section className="py-24 border-t border-[#ddd] dark:border-[#222]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <p className="text-xs text-[#555] dark:text-[#888] tracking-widest uppercase font-medium">
            latest notes
          </p>
          <Link
            href="/notes"
            className="text-sm text-[#555] dark:text-[#888] hover:text-[#ff3c00] transition-colors"
          >
            Visit Blog →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link href={`/notes/${p.slug}`} className="group block">
                <div className="relative h-52 rounded-xl overflow-hidden mb-5">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="text-xs text-[#555] dark:text-[#888] mb-2">{p.date}</p>
                <h3 className="text-base font-semibold text-black dark:text-white group-hover:text-[#ff3c00] transition-colors leading-snug">
                  {p.title}
                </h3>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
