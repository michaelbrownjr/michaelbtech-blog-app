export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--md-sys-color-surface)] py-24 sm:py-32">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--md-sys-color-primary)] via-[var(--md-sys-color-tertiary)] to-transparent"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-start gap-6">
        <h1 className="display-large text-[var(--md-sys-color-on-surface)] max-w-3xl">
          Explorations in <span className="text-[var(--md-sys-color-primary)]">Tech</span>, <span className="text-[var(--md-sys-color-tertiary)]">Design</span>, and <span className="text-[var(--md-sys-color-secondary)]">Code</span>.
        </h1>
        <p className="headline-small text-[var(--md-sys-color-on-surface-variant)] max-w-2xl mt-4">
          Welcome to the digital garden of MichaelBTech. Here I document my journey building modern web experiences and solving complex problems.
        </p>
        
        <div className="mt-8 flex gap-4">
          <a href="#latest-posts" className="rounded-full bg-[var(--md-sys-color-primary)] px-6 py-3 text-[var(--md-sys-color-on-primary)] label-large shadow-sm hover:bg-[var(--md-sys-color-primary)]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--md-sys-color-primary)] transition-all transform hover:-translate-y-0.5 active:translate-y-0">
            Read Latest
          </a>
           <a href="/about" className="rounded-full border border-[var(--md-sys-color-outline)] px-6 py-3 text-[var(--md-sys-color-primary)] label-large hover:bg-[var(--md-sys-color-primary)]/10 transition-all">
            More About Me
          </a>
        </div>
      </div>
    </section>
  );
}
