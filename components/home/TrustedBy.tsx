const brands = ['Amazon', 'Flipkart', 'Mamaearth', 'AJIO', 'MDH', 'Licious', 'TagMango']

export function TrustedBy() {
  const doubled = [...brands, ...brands]

  return (
    <section className="py-20 border-b border-[#ddd] dark:border-[#222]">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="text-xs text-[#555] dark:text-[#888] tracking-widest uppercase font-medium">
          Trusted by
        </p>
      </div>

      <div className="overflow-hidden marquee-container">
        <div className="flex gap-16">
          <div className="animate-marquee whitespace-nowrap flex shrink-0 items-center gap-16">
            {doubled.map((brand, i) => (
              <span
                key={i}
                className="text-2xl font-black text-[#ccc] dark:text-[#333] hover:text-[#ff3c00] dark:hover:text-[#ff3c00] transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
          <div aria-hidden className="animate-marquee whitespace-nowrap flex shrink-0 items-center gap-16">
            {doubled.map((brand, i) => (
              <span
                key={i}
                className="text-2xl font-black text-[#ccc] dark:text-[#333] hover:text-[#ff3c00] dark:hover:text-[#ff3c00] transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
