'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Strategy',
    desc: 'Goal-oriented content planning aligned with your brand objectives and target audience.',
  },
  {
    num: '02',
    title: 'Pre-Production',
    desc: 'Studio, equipment, models, scripts, and shoot logistics all handled in advance.',
  },
  {
    num: '03',
    title: 'Shoot',
    desc: 'Professional filming with cinematic-grade gear and an experienced creative team.',
  },
  {
    num: '04',
    title: 'Edit',
    desc: 'Post-production refinement — color grading, audio mixing, motion graphics.',
  },
  {
    num: '05',
    title: 'Distribute',
    desc: 'Platform-optimized delivery across social media, digital ads, and online presence.',
  },
]

export function ProcessSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs text-[#555] dark:text-[#888] tracking-widest uppercase font-medium mb-16">
          .how we work
        </p>

        {/* Desktop: horizontal */}
        <div className="hidden lg:grid grid-cols-5 gap-0 relative">
          <div className="absolute top-6 left-[10%] right-[10%] h-px bg-[#ddd] dark:bg-[#222]" />
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="px-4 first:pl-0 last:pr-0"
            >
              <div className="w-12 h-12 rounded-full border-2 border-[#ddd] dark:border-[#222] flex items-center justify-center mb-6 bg-white dark:bg-black relative z-10">
                <span className="text-xs font-black text-[#ff3c00]">{s.num}</span>
              </div>
              <h3 className="font-bold text-black dark:text-white mb-2">{s.title}</h3>
              <p className="text-sm text-[#555] dark:text-[#888] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden flex flex-col relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#ddd] dark:bg-[#222]" />
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="pl-16 pb-10 last:pb-0 relative"
            >
              <div className="absolute left-0 w-12 h-12 rounded-full border-2 border-[#ddd] dark:border-[#222] flex items-center justify-center bg-white dark:bg-black">
                <span className="text-xs font-black text-[#ff3c00]">{s.num}</span>
              </div>
              <h3 className="font-bold text-black dark:text-white mb-1">{s.title}</h3>
              <p className="text-sm text-[#555] dark:text-[#888] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
