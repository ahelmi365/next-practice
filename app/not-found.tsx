import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100">
      <h2 className="text-4xl font-bold text-slate-800 mb-4">Page Not Found</h2>
      <p className="text-slate-600 mb-6">Could not find the requested resource</p>
      <Link 
        href="/" 
        className="px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
}