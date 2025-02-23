export default function MiddlewarePage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Middleware in Next.js</h1>
      <div className="prose lg:prose-xl">
        <p className="text-lg mb-4">
          Middleware allows you to run code before a request is completed, enabling custom authentication, redirects, and request manipulation.
        </p>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Common Use Cases</h3>
            <ul className="list-disc pl-6">
              <li>Authentication</li>
              <li>Security headers</li>
              <li>Bot protection</li>
              <li>Redirects and rewrites</li>
              <li>A/B testing</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Example Implementation</h3>
            <pre className="bg-gray-100 p-4 rounded">
              {`// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check auth token
  const token = request.cookies.get('token')
  
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  return NextResponse.next()
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}