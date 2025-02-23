export default function FileBasedRoutingPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">File-based Routing in Next.js</h1>
      <div className="prose lg:prose-xl">
        <p className="text-lg mb-4">
          Next.js uses a file-system based router built on top of Server Components that supports layouts, nested routing, and more.
        </p>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Key Concepts</h3>
            <ul className="list-disc pl-6">
              <li>Pages and Layouts</li>
              <li>Dynamic Routes</li>
              <li>Route Groups</li>
              <li>Parallel Routes</li>
              <li>Intercepting Routes</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Directory Structure</h3>
            <pre className="bg-gray-100 p-4 rounded">
              {`app/
  page.tsx
  layout.tsx
  about/
    page.tsx
  blog/
    [slug]/
      page.tsx`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}