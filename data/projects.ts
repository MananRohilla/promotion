export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  category: 'Video' | 'Design'
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
    nextSlug: 'videography-photography',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
