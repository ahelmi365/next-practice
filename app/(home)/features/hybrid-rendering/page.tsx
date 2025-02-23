export default function HybridRenderingPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Hybrid Rendering in Next.js</h1>
      <div className="prose lg:prose-xl">
        <p className="text-lg mb-4">
          Next.js provides multiple rendering strategies that you can leverage
          to optimize your application performance and user experience.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Available Rendering Methods
        </h2>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Static Site Generation (SSG)
            </h3>
            <p>
              Pages are generated at build time and served as static HTML files.
              Perfect for content that doesn&apos;t change frequently.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Server-Side Rendering (SSR)
            </h3>
            <p>
              Pages are generated on each request, ideal for dynamic content
              that needs to be fresh on every visit.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Incremental Static Regeneration (ISR)
            </h3>
            <p>
              Combines the benefits of static generation and server-side
              rendering by regenerating pages at specified intervals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Client-side Rendering
            </h3>
            <p>
              Content is rendered in the browser using JavaScript, suitable for
              highly interactive components.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
