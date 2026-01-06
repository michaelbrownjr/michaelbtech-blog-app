// import { drupal } from "@/lib/drupal";
// import { DrupalNode } from "next-drupal";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";

// Mock Data for Initial UI Implementation
const POSTS = [
  {
    title: "Understanding Material Design 3",
    excerpt: "A deep dive into the color system, typography, and elevation layers of Google's latest design language.",
    date: "Jan 06, 2026",
    slug: "understanding-material-design-3",
    category: "Design",
  },
  {
    title: "Building Scalable Frontends with Next.js",
    excerpt: "Best practices for organizing your Next.js project and leveraging Server Components for performance.",
    date: "Dec 12, 2025",
    slug: "building-scalable-frontends",
    category: "Engineering",
  },
   {
    title: "The Future of Web Interactivity",
    excerpt: "How micro-interactions and dynamic state layers enhance user experience without cluttering the UI.",
    date: "Nov 28, 2025",
    slug: "future-web-interactivity",
    category: "UX",
  },
];

export default async function Home() {
  // Use mock data for now to ensure UI is perfect before connecting backend
  const projects = POSTS;

  return (
    <div className="bg-[var(--md-sys-color-background)]">
      <Hero />
      
      <div id="latest-posts" className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display-medium text-[var(--md-sys-color-on-background)] tracking-tight">Latest Writings</h2>
          <p className="mt-2 text-lg leading-8 text-[var(--md-sys-color-on-surface-variant)]">
            Thoughts, tutorials, and insights from my daily work.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projects.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
