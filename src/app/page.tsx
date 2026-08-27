export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-indigo-600">SA Business Exchange</div>
            <div className="space-x-4">
              <a href="/marketplace" className="text-gray-700 hover:text-indigo-600">Marketplace</a>
              <a href="/register" className="text-gray-700 hover:text-indigo-600">Register</a>
              <a href="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">Login</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Connect. Trade. Grow.</h1>
          <p className="text-xl text-gray-600 mb-8">The premier platform for South African businesses to exchange services and assets</p>
          <div className="space-x-4">
            <a href="/marketplace" className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 inline-block">Browse Listings</a>
            <a href="/register" className="bg-white text-indigo-600 px-8 py-3 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 inline-block">Get Started</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose SA Business Exchange?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-2">Business Directory</h3>
              <p className="text-gray-600">Browse thousands of verified South African businesses</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-2">Asset Listings</h3>
              <p className="text-gray-600">List equipment and services for rent or sale</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-2">Trust & Safety</h3>
              <p className="text-gray-600">Verified businesses with trust scores and reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to grow your business?</h2>
          <a href="/register" className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-gray-100 inline-block font-bold">Register Your Business Today</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 SA Business Exchange. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="/contact" className="hover:text-white">Contact Us</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
