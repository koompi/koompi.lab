import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl font-black text-koompi-primary/10 mb-2">404</p>
        <h1 className="text-3xl font-bold text-koompi-primary mb-3">Page not found</h1>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-koompi-primary text-white rounded-full font-semibold hover:bg-blue-900 transition-colors"
          >
            Go Home
          </Link>
          <Link
            to="/schools"
            className="px-6 py-3 bg-white text-koompi-primary rounded-full font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            View Schools
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
