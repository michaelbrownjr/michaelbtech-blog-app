import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  imageUrl?: string;
  category?: string;
}

export default function BlogCard({ title, excerpt, date, slug, imageUrl, category }: BlogCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[12px] bg-[var(--md-sys-color-surface-container-low,var(--md-sys-color-surface))] border border-[var(--md-sys-color-outline-variant)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* State Layer (Hover) */}
      <div className="absolute inset-0 bg-[var(--md-sys-color-on-surface)] opacity-0 transition-opacity duration-300 group-hover:opacity-[0.05]" />
      
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden bg-[var(--md-sys-color-surface-variant)]">
           {/* Placeholder for real image implementation using Next/Image if available, otherwise div */}
           {/* <Image src={imageUrl} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" /> */}
           <div className="absolute inset-0 flex items-center justify-center text-[var(--md-sys-color-on-surface-variant)]">
             [Image Placeholder]
           </div>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={date} className="text-[var(--md-sys-color-on-surface-variant)]">
            {date}
          </time>
          {category && (
            <span className="relative z-10 rounded-full bg-[var(--md-sys-color-secondary-container)] px-3 py-1.5 font-medium text-[var(--md-sys-color-on-secondary-container)] hover:bg-[var(--md-sys-color-secondary-container)]/80">
              {category}
            </span>
          )}
        </div>
        <div className="group relative max-w-xl">
          <h3 className="mt-3 headline-small text-[var(--md-sys-color-on-surface)]">
            <Link href={`/article/${slug}`}>
              <span className="absolute inset-0" />
              {title}
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm/6 text-[var(--md-sys-color-on-surface-variant)]">
            {excerpt}
          </p>
        </div>
        
        {/* Card Actions (Optional) */}
        <div className="mt-6 flex items-center gap-4">
             <span className="label-large text-[var(--md-sys-color-primary)] group-hover:underline">Read Article</span>
        </div>
      </div>
    </div>
  );
}
