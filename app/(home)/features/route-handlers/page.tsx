export default function RouteHandlersPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Route Handlers in Next.js</h1>
      <div className="prose lg:prose-xl">
        <p className="text-lg mb-4">
          Route Handlers allow you to create custom API endpoints within your Next.js application using the Web Request and Response APIs.
        </p>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="list-disc pl-6">
              <li>Support for modern Web APIs</li>
              <li>Built-in TypeScript support</li>
              <li>Edge and Node.js runtimes</li>
              <li>Form and file handling</li>
              <li>Streaming and Response types</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Example Usage</h3>
            <pre className="bg-gray-100 p-4 rounded">
              {`// app/api/route.ts
export async function GET() {
  return Response.json({ message: 'Hello World' })
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}