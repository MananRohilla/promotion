import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { projects, getProjectBySlug } from '@/data/projects'

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const next = getProjectBySlug(project.nextSlug)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 max-w-7xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full border border-white/30 text-white/70 text-xs font-medium mb-4 w-fit">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Description */}
          <div className="lg:col-span-2">
            <p className="text-xs text-[#555] dark:text-[#888] tracking-widest uppercase font-medium mb-4">
              overview
            </p>
            <p className="text-lg text-[#555] dark:text-[#888] leading-relaxed mb-16 font-light">
              {project.description}
            </p>

            {/* Gallery */}
            <p className="text-xs text-[#555] dark:text-[#888] tracking-widest uppercase font-medium mb-6">
              gallery
            </p>
            <div className="grid grid-cols-2 gap-4">
              {project.gallery.map((img, i) => (
                <div key={i} className="relative h-52 rounded-xl overflow-hidden">
                  <Image
                    src={img}
                    alt={`${project.title} gallery ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <p className="text-xs text-[#555] dark:text-[#888] tracking-widest uppercase font-medium mb-6">
              deliverables
            </p>
            <ul className="flex flex-col gap-3">
              {project.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-black dark:text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff3c00] mt-2 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <Link
                href="/contact"
                className="block w-full text-center py-3.5 bg-[#ff3c00] text-white font-bold rounded-full hover:bg-[#e03500] transition-colors text-sm"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>

        {/* Next project */}
        {next && (
          <div className="mt-24 pt-12 border-t border-[#ddd] dark:border-[#222]">
            <p className="text-xs text-[#555] dark:text-[#888] tracking-widest uppercase font-medium mb-4">
              next project
            </p>
            <Link
              href={`/work/${next.slug}`}
              className="group flex items-center justify-between py-6 hover:text-[#ff3c00] transition-colors"
            >
              <h3 className="text-2xl lg:text-4xl font-black text-black dark:text-white group-hover:text-[#ff3c00] transition-colors">
                {next.title}
              </h3>
              <span className="text-2xl group-hover:translate-x-2 transition-transform duration-200">→</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
