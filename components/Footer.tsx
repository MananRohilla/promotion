import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const socials = [
  { href: 'https://instagram.com/promotionmedia', label: 'Instagram' },
  { href: 'https://linkedin.com/company/promotionmedia', label: 'LinkedIn' },
  { href: 'https://youtube.com/@promotionmedia', label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="border-t border-[#ddd] dark:border-[#222] bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <p className="text-xl font-black text-black dark:text-white mb-2">ProMotion</p>
            <p className="text-sm text-[#555] dark:text-[#888] leading-relaxed max-w-xs">
              A one-stop creative partner for brands that demand cinematic quality and real results.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#555] dark:text-[#888] hover:text-black dark:hover:text-white transition-colors w-fit"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#555] dark:text-[#888] hover:text-[#ff3c00] transition-colors w-fit"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#ddd] dark:border-[#222]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#555] dark:text-[#888]">
            © 2025 ProMotion. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="text-xs text-[#555] dark:text-[#888] hover:text-black dark:hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
