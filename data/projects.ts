export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  category: 'Video' | 'Design' | 'Marketing'
  heroImage: string
  gallery: string[]
  deliverables: string[]
  nextSlug: string
}

export const projects: Project[] = [
  {
    slug: 'videography-photography',
    title: 'Videography & Photography',
    tagline: 'Cinematic visuals that tell your story.',
    description:
      "From brand films to product shoots, we capture moments with precision and artistry. Our team brings professional-grade equipment and a director's eye to every frame.",
    category: 'Video',
    heroImage: 'https://picsum.photos/id/1/1600/900',
    gallery: [
      'https://picsum.photos/id/10/800/600',
      'https://picsum.photos/id/11/800/600',
      'https://picsum.photos/id/12/800/600',
      'https://picsum.photos/id/13/800/600',
    ],
    deliverables: [
      'Brand films & corporate videos',
      'Product photography & lifestyle shoots',
      'Event coverage & testimonials',
      'Aerial/drone footage',
      'Edited delivery in 4K',
    ],
    nextSlug: 'video-editing',
  },
  {
    slug: 'video-editing',
    title: 'Video Editing & Cinematic Audio',
    tagline: 'Raw footage transformed into compelling narratives.',
    description:
      'Our post-production studio refines every cut, color grade, and audio mix to match the emotional tone of your brand. We turn hours of footage into punchy, platform-ready content.',
    category: 'Video',
    heroImage: 'https://picsum.photos/id/20/1600/900',
    gallery: [
      'https://picsum.photos/id/21/800/600',
      'https://picsum.photos/id/22/800/600',
      'https://picsum.photos/id/23/800/600',
      'https://picsum.photos/id/24/800/600',
    ],
    deliverables: [
      'Cinematic color grading',
      'Custom sound design & mixing',
      'Subtitle & caption integration',
      'Platform-optimized exports (Reels, YouTube, LinkedIn)',
      'Motion title sequences',
    ],
    nextSlug: 'motion-graphics',
  },
  {
    slug: 'motion-graphics',
    title: 'Motion Graphics & Animation',
    tagline: 'Ideas brought to life through movement.',
    description:
      'We design and animate everything from logo reveals to explainer videos. Our motion work elevates brand identity and makes complex ideas instantly digestible.',
    category: 'Video',
    heroImage: 'https://picsum.photos/id/30/1600/900',
    gallery: [
      'https://picsum.photos/id/31/800/600',
      'https://picsum.photos/id/32/800/600',
      'https://picsum.photos/id/33/800/600',
      'https://picsum.photos/id/34/800/600',
    ],
    deliverables: [
      'Logo animations & sting sequences',
      'Explainer & product demo videos',
      '2D / 3D character animation',
      'Kinetic typography',
      'Social media motion graphics',
    ],
    nextSlug: 'pre-production',
  },
  {
    slug: 'pre-production',
    title: 'Pre-Production & Creative Planning',
    tagline: 'Strategy before the lens cap comes off.',
    description:
      'Great content starts with a great plan. We handle concept development, scripting, storyboarding, location scouting, talent sourcing, and full shoot logistics.',
    category: 'Video',
    heroImage: 'https://picsum.photos/id/40/1600/900',
    gallery: [
      'https://picsum.photos/id/41/800/600',
      'https://picsum.photos/id/42/800/600',
      'https://picsum.photos/id/43/800/600',
      'https://picsum.photos/id/44/800/600',
    ],
    deliverables: [
      'Creative concept & moodboard',
      'Script & dialogue writing',
      'Storyboarding & shot lists',
      'Location & talent management',
      'Equipment & crew coordination',
    ],
    nextSlug: 'social-media',
  },
  {
    slug: 'social-media',
    title: 'Social Media & Digital Marketing',
    tagline: 'Content that converts, not just impresses.',
    description:
      'We manage end-to-end social media strategy — from content calendars to paid campaigns. Data-driven decisions married with creative execution to grow your brand online.',
    category: 'Marketing',
    heroImage: 'https://picsum.photos/id/50/1600/900',
    gallery: [
      'https://picsum.photos/id/51/800/600',
      'https://picsum.photos/id/52/800/600',
      'https://picsum.photos/id/53/800/600',
      'https://picsum.photos/id/54/800/600',
    ],
    deliverables: [
      'Monthly content calendar',
      'Reel & short-form video production',
      'Paid ad creative & campaign management',
      'Analytics & monthly performance reports',
      'Community management',
    ],
    nextSlug: 'web-design',
  },
  {
    slug: 'web-design',
    title: 'Website Design & Development',
    tagline: 'Digital homes that work as hard as you do.',
    description:
      'We design and build fast, conversion-optimized websites. From landing pages to full-stack platforms — clean aesthetics, pixel-perfect UI, and rock-solid performance.',
    category: 'Design',
    heroImage: 'https://picsum.photos/id/60/1600/900',
    gallery: [
      'https://picsum.photos/id/61/800/600',
      'https://picsum.photos/id/62/800/600',
      'https://picsum.photos/id/63/800/600',
      'https://picsum.photos/id/64/800/600',
    ],
    deliverables: [
      'UI/UX design & prototyping',
      'Responsive web development',
      'CMS integration (Sanity, Contentful)',
      'SEO & performance optimization',
      'Ongoing maintenance & support',
    ],
    nextSlug: 'graphic-design',
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    tagline: 'Visual identity that speaks before you do.',
    description:
      'Logos, brand kits, packaging, pitch decks, print collateral — our designers craft cohesive visual systems that make your brand instantly recognizable and deeply memorable.',
    category: 'Design',
    heroImage: 'https://picsum.photos/id/70/1600/900',
    gallery: [
      'https://picsum.photos/id/71/800/600',
      'https://picsum.photos/id/72/800/600',
      'https://picsum.photos/id/73/800/600',
      'https://picsum.photos/id/74/800/600',
    ],
    deliverables: [
      'Logo design & brand identity',
      'Brand style guide',
      'Social media templates',
      'Packaging & print design',
      'Pitch decks & presentations',
    ],
    nextSlug: 'videography-photography',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
