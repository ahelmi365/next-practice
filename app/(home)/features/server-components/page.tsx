export default function ServerComponentsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Server Components in Next.js</h1>
      <div className="prose lg:prose-xl">
        <p className="text-lg mb-4">
          React Server Components allow you to write UI that can be rendered and
          cached on the server while maintaining interactivity on the client.
        </p>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Benefits of Server Rendering
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold">Data Fetching:</span> Move data
                fetching closer to your data source, improving performance by
                reducing fetch time and client requests.
              </li>
              <li>
                <span className="font-semibold">Security:</span> Keep sensitive
                data and logic on the server, protecting tokens and API keys
                from client exposure.
              </li>
              <li>
                <span className="font-semibold">Caching:</span> Cache and reuse
                rendered results across requests and users, optimizing
                performance and reducing costs.
              </li>
              <li>
                <span className="font-semibold">Performance:</span> Optimize by
                moving non-interactive UI to Server Components, reducing
                client-side JavaScript load.
              </li>
              <li>
                <span className="font-semibold">
                  Initial Page Load and FCP:
                </span>{" "}
                Generate HTML on server for immediate viewing, eliminating
                client-side render waiting time.
              </li>
              <li>
                <span className="font-semibold">SEO and Social Sharing:</span>{" "}
                Provide rendered HTML for search engine indexing and social
                network preview generation.
              </li>
              <li>
                <span className="font-semibold">Streaming:</span> Split
                rendering into chunks for progressive content delivery,
                improving user experience.
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Use Cases</h3>
            <p>
              Perfect for data fetching, accessing backend resources, and
              rendering static content that does not require client
              interactivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
