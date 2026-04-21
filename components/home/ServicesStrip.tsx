'use client'

import Link from 'next/link'
import Image from 'next/image'

const services = [
  { title: 'Videography & Photography', slug: 'videography-photography', image: 'https://picsum.photos/id/1/600/800' },
  { title: 'Video Editing & Cinematic Audio', slug: 'video-editing', image: 'https://picsum.photos/id/20/600/800' },
  { title: 'Motion Graphics & Animation', slug: 'motion-graphics', image: 'https://picsum.photos/id/30/600/800' },
  { title: 'Pre-Production & Creative Planning', slug: 'pre-production', image: 'https://picsum.photos/id/40/600/800' },
  { title: 'Social Media & Digital Marketing', slug: 'social-media', image: 'https://picsum.photos/id/50/600/800' },
  { title: 'Website Design & Development', slug: 'web-design', image: 'https://picsum.photos/id/60/600/800' },
  { title: 'Graphic Design', slug: 'graphic-design', image: 'https://picsum.photos/id/70/600/800' },
]

export function ServicesStrip() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-xs text-[#555] dark:text-[#888] tracking-widest uppercase font-medium">
          .what we do
        </p>
      </div>

      {/* Scrolling strip */}
      <div className="marquee-container flex gap-4">
        <div className="animate-marquee-fast flex gap-4 shrink-0">
          {[...services, ...services].map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
        <div aria-hidden className="animate-marquee-fast flex gap-4 shrink-0">
          {[...services, ...services].map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ title, slug, image }: { title: string; slug: string; image: string }) {
  return (
    <Link href={`/work/${slug}`} className="group relative shrink-0 w-64 h-80 rounded-2xl overflow-hidden block">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="256px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-white font-semibold text-sm leading-snug">{title}</p>
        <p className="text-white/60 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Work →
        </p>
      </div>
    </Link>
  )
}
