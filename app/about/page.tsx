'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const team = [
  { name: 'Arjun Sharma', role: 'Creative Director', image: 'https://picsum.photos/id/91/400/400' },
  { name: 'Priya Mehta', role: 'Lead Videographer', image: 'https://picsum.photos/id/92/400/400' },
  { name: 'Ravi Kumar', role: 'Motion Designer', image: 'https://picsum.photos/id/93/400/400' },
  { name: 'Sara Nair', role: 'Brand Strategist', image: 'https://picsum.photos/id/64/400/400' },
]

const tools = [
  'Premiere Pro', 'After Effects', 'Photoshop', 'DaVinci Resolve',
  'Figma', 'Cinema 4D', 'Lightroom', 'Final Cut Pro', 'Illustrator',
  'Blender', 'CapCut', 'Notion',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-20 border-b border-[#ddd] dark:border-[#222]"
        >
          <p className="text-xs text-[#555] dark:text-[#888] tracking-widest uppercase font-medium mb-6">
            .about us
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-black dark:text-white leading-[1.05] mb-8">
            We are
            <br />
            ProMotion.
          </h1>
          <p className="text-lg text-[#555] dark:text-[#888] max-w-2xl leading-relaxed font-light">
            A full-service creative media agency helping brands communicate with precision and artistry. From concept to distribution, we handle it all.
          </p>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 border-b border-[#ddd] dark:border-[#222]"
        >
          <p className="text-xs text-[#555] dark:text-[#888] tracking-widest uppercase font-medium mb-8">
            .philosophy
          </p>
          <p className="text-3xl lg:text-5xl font-light italic text-black dark:text-white leading-snug max-w-4xl">
            "Our craft is building experiences that bring value to people and celebrate function over form. We hide the ego and give freedom to creativity."
          </p>
        </motion.div>

        {/* Team */}
        <div className="py-20 border-b border-[#ddd] dark:border-[#222]">
          <p className="text-xs text-[#555] dark:text-[#888] tracking-widest uppercase font-medium mb-12">
            .the team
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <p className="font-bold text-black dark:text-white">{member.name}</p>
                <p className="text-sm text-[#555] dark:text-[#888]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools marquee */}
        <div className="py-20 border-b border-[#ddd] dark:border-[#222] overflow-hidden">
          <p className="text-xs text-[#555] dark:text-[#888] tracking-widest uppercase font-medium mb-10">
            .tools we use
          </p>
          <div className="marquee-container flex">
            <div className="animate-marquee flex shrink-0 gap-6">
              {[...tools, ...tools].map((t, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5 rounded-full border border-[#ddd] dark:border-[#222] text-sm text-[#555] dark:text-[#888] whitespace-nowrap"
                >
                  {t}
                </span>
              ))}
            </div>
            <div aria-hidden className="animate-marquee flex shrink-0 gap-6">
              {[...tools, ...tools].map((t, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5 rounded-full border border-[#ddd] dark:border-[#222] text-sm text-[#555] dark:text-[#888] whitespace-nowrap"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-20 text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-black dark:text-white mb-8">
            Work with us.
          </h2>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-[#ff3c00] text-white font-bold rounded-full hover:bg-[#e03500] transition-colors text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
