import { drupal } from "@/lib/drupal";
import { DrupalNode } from "next-drupal";
import { notFound } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

// export async function generateStaticParams() {
//   const articles = await drupal.getResourceCollection<DrupalNode[]>("node--article", {
//     params: {
//       "filter[status]": 1,
//       "fields[node--article]": "path",
//     },
//   });

//   return articles.map((article) => ({
//     id: article.path?.alias?.replace(/^\//, "") || article.id,
//   }));
// }

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Try to fetch by path alias first, then by UUID
  let article: DrupalNode | null = null;
  
  try {
    const articles = await drupal.getResourceCollection<DrupalNode[]>("node--article", {
      params: {
        "filter[path.alias]": `/${id}`,
        "filter[status]": 1,
        // include: "field_image,uid", 
      },
    });
    
    if (articles.length > 0) {
      article = articles[0];
    } else {
      // Try fetching by UUID
      article = await drupal.getResource<DrupalNode>("node--article", id, {
        params: {
          // include: "field_image,uid",
        },
      });
    }
  } catch {
    notFound();
  }

  if (!article) {
    notFound();
  }

  const date = new Date(article.created).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="bg-[var(--md-sys-color-background)] min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[var(--md-sys-color-primary)] hover:text-[var(--md-sys-color-primary-container)] transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to articles
        </Link>

        <div className="text-center">
          <time className="order-first text-sm leading-7 text-[var(--md-sys-color-secondary)]">
            {date}
          </time>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-[var(--md-sys-color-on-background)] sm:text-6xl">
            {article.title}
          </h1>
        </div>

        <div className="mt-10 max-w-2xl mx-auto">
          <div
            className="prose prose-lg prose-slate dark:prose-invert 
              prose-headings:text-[var(--md-sys-color-on-surface)] 
              prose-p:text-[var(--md-sys-color-on-surface-variant)]
              prose-a:text-[var(--md-sys-color-primary)] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[var(--md-sys-color-on-surface)]
              prose-li:text-[var(--md-sys-color-on-surface-variant)]"
          >
            {article.body?.processed ? (
              <div dangerouslySetInnerHTML={{ __html: article.body.processed }} />
            ) : (
              <p className="text-[var(--md-sys-color-on-surface-variant)]">No content available.</p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

