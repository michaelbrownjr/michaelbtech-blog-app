export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // NOTE: In a real app, you would fetch the data based on the 'id' (slug)
  const post = {
    title: "Understanding Material Design 3",
    date: "Jan 06, 2026",
    content: `
      <p>Material Design 3 is Google's latest design system, designed to allow for more personal, adaptive, and expressive experiences.</p>
      <h3>Key Concepts</h3>
      <ul>
        <li><strong>Dynamic Color:</strong> Color generated from user wallpapers.</li>
        <li><strong>Typography:</strong> Simplified type scale.</li>
        <li><strong>Elevation:</strong> New tonal elevation using color overlays.</li>
      </ul>
      <p>This is a placeholder for the full article content.</p>
    `,
  };

  return (
    <article className="bg-[var(--md-sys-color-background)] min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
            <time className="order-first text-sm leading-7 text-[var(--md-sys-color-secondary)]">{post.date}</time>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-[var(--md-sys-color-on-background)] sm:text-6xl">{post.title}</h1>
        </div>

        <div className="mt-10 max-w-2xl mx-auto">
             <div className="prose prose-lg prose-slate dark:prose-invert 
                prose-headings:text-[var(--md-sys-color-on-surface)] 
                prose-p:text-[var(--md-sys-color-on-surface-variant)]
                prose-a:text-[var(--md-sys-color-primary)] prose-a:no-underline hover:prose-a:underline
                prose-strong:text-[var(--md-sys-color-on-surface)]
                prose-li:text-[var(--md-sys-color-on-surface-variant)]">
               <div dangerouslySetInnerHTML={{ __html: post.content }} />
             </div>
        </div>
      </div>
    </article>
  );
}
