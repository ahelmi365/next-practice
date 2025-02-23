export default function CssSupportPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">CSS Support in Next.js</h1>
      <div className="prose lg:prose-xl">
        <p className="text-lg mb-4">
          Next.js comes with built-in support for CSS and various styling solutions to help you create beautiful applications.
        </p>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Supported Features</h3>
            <ul className="list-disc pl-6">
              <li>Global CSS</li>
              <li>CSS Modules</li>
              <li>Sass/SCSS</li>
              <li>CSS-in-JS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">CSS Modules Example</h3>
            <pre className="bg-gray-100 p-4 rounded">
              {`// styles/component.module.css
.container {
  padding: 1rem;
}

// Component.tsx
import styles from './component.module.css'

export default function Component() {
  return <div className={styles.container}>...</div>
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}