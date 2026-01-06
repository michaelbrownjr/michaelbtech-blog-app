import { drupal } from "@/lib/drupal";
import { DrupalNode } from "next-drupal";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";

export default async function Home() {
  const projects = await drupal.getResourceCollection<DrupalNode[]>("node--article", {
    params: {
      "filter[status]": 1,
      sort: "-created",
    },
  });

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
          {projects.map((node) => {
             // Map Drupal Node to Blog Card Props
             const slug = node.path.alias?.replace(/^\//, "") || node.id;
             const excerpt = node.body?.summary || node.body?.processed?.slice(0, 150) + "..." || "No summary available.";
             const date = new Date(node.created).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
             
             return (
              <BlogCard 
                key={node.id} 
                title={node.title} 
                excerpt={excerpt} 
                date={date} 
                slug={slug} 
                category="Project" // Default category for now
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
