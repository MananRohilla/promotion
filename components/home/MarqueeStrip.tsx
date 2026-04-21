const industries = [
  'Hospitals',
  'Industry Leaders',
  'Corporate Events',
  'D2C Brands',
  'Startups',
  'Media Houses',
  'Personal Brands',
]

const itemStr = industries.map(i => `${i} ·`).join('  ')

export function MarqueeStrip() {
  return (
    <div className="border-y border-[#ddd] dark:border-[#222] overflow-hidden py-4 select-none">
      {/* Row 1 — left */}
      <div className="marquee-container flex mb-3">
        <div className="animate-marquee whitespace-nowrap flex shrink-0 gap-8 pr-8">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-sm font-medium text-[#555] dark:text-[#888] tracking-wide">
              {itemStr}
            </span>
          ))}
        </div>
        <div aria-hidden className="animate-marquee whitespace-nowrap flex shrink-0 gap-8 pr-8">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-sm font-medium text-[#555] dark:text-[#888] tracking-wide">
              {itemStr}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — right */}
      <div className="marquee-container flex">
        <div className="animate-marquee-reverse whitespace-nowrap flex shrink-0 gap-8 pr-8">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-sm font-light text-[#555] dark:text-[#888] tracking-widest uppercase text-xs">
              {itemStr}
            </span>
          ))}
        </div>
        <div aria-hidden className="animate-marquee-reverse whitespace-nowrap flex shrink-0 gap-8 pr-8">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-sm font-light text-[#555] dark:text-[#888] tracking-widest uppercase text-xs">
              {itemStr}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
