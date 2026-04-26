'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const stats = [
  { value: 5, suffix: '+', label: 'Years of Experience' },
  { value: 5, suffix: '+', label: 'Satisfied Clients' },
  { value: 300, suffix: '+', label: 'Campaigns Delivered' },
]

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let frame = 0
    const total = 60
    const timer = setInterval(() => {
      frame++
      setCount(Math.round((frame / total) * end))
      if (frame >= total) clearInterval(timer)
    }, 20)
    return () => clearInterval(timer)
  }, [isInView, end])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function StatsBar() {
  return (
    <section className="border-y border-[#ddd] dark:border-[#222] bg-[#f5f5f5] dark:bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#ddd] dark:lg:divide-[#222]">
          {stats.map((s, i) => (
            <div key={i} className="lg:px-10 first:lg:pl-0 last:lg:pr-0 text-center lg:text-left">
              <p className="text-5xl lg:text-6xl font-black text-black dark:text-white">
                <CountUp end={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-[#555] dark:text-[#888]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
