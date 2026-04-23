'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs text-[#555] dark:text-[#888] tracking-widest uppercase font-medium mb-6">
            .legal
          </p>
          <h1 className="text-5xl lg:text-7xl font-black text-black dark:text-white mb-12 leading-[1.05]">
            privacy<br />policy.
          </h1>

          <div className="flex flex-col gap-10 text-[#555] dark:text-[#888] text-sm leading-relaxed">
            <div>
              <h2 className="text-base font-bold text-black dark:text-white mb-3">Information We Collect</h2>
              <p>When you contact us through our website, we collect your name, email address, and any message you provide. We do not collect data beyond what you voluntarily submit.</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-black dark:text-white mb-3">How We Use Your Information</h2>
              <p>We use your contact details solely to respond to your inquiries and communicate about potential projects. We do not sell, trade, or share your information with third parties.</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-black dark:text-white mb-3">Cookies</h2>
              <p>This website may use minimal cookies for theme preference and basic analytics. No personal data is stored in cookies.</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-black dark:text-white mb-3">Data Security</h2>
              <p>We take reasonable measures to protect your information. However, no internet transmission is completely secure.</p>
            </div>

            <div>
              <h2 className="text-base font-bold text-black dark:text-white mb-3">Contact</h2>
              <p>
                Questions about this policy?{' '}
                <a
                  href="mailto:promotion.frames@gmail.com"
                  className="text-[#ff3c00] hover:underline"
                >
                  promotion.frames@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#ddd] dark:border-[#222]">
            <Link
              href="/"
              className="text-sm text-[#555] dark:text-[#888] hover:text-[#ff3c00] transition-colors"
            >
              ← Back to home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
