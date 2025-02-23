export default function ImageOptimizationPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Image Optimization in Next.js</h1>
      <div className="prose lg:prose-xl">
        <p className="text-lg mb-4">
          Next.js provides built-in Image Optimization through the next/image component, offering automatic image optimization with instant builds.
        </p>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Features</h3>
            <ul className="list-disc pl-6">
              <li>Automatic image optimization</li>
              <li>Lazy loading by default</li>
              <li>Responsive images</li>
              <li>Visual stability</li>
              <li>WebP and AVIF support</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Example Usage</h3>
            <pre className="bg-gray-100 p-4 rounded">
              {`import Image from 'next/image'

<Image
  src="/profile.jpg"
  alt="Profile"
  width={500}
  height={300}
  priority
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}