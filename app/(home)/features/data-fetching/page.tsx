export default function DataFetchingPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Data Fetching in Next.js</h1>
      <div className="prose lg:prose-xl">
        <p className="text-lg mb-4">
          Next.js provides powerful data fetching patterns that work seamlessly with React Server Components and the app router.
        </p>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Fetching Methods</h3>
            <ul className="list-disc pl-6">
              <li>Server-side fetching</li>
              <li>Static Data Fetching</li>
              <li>Dynamic Data Fetching</li>
              <li>Incremental Static Regeneration</li>
              <li>Streaming with Suspense</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Example</h3>
            <pre className="bg-gray-100 p-4 rounded">
              {`async function getData() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <main>{/* Use data */}</main>
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}