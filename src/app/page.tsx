'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">
                SA Business Exchange
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/businesses" className="text-gray-600 hover:text-gray-900">
                Businesses
              </Link>
              <Link href="/listings" className="text-gray-600 hover:text-gray-900">
                Listings
              </Link>
              <Link 
                href="/register" 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to SA Business Exchange
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Connect, trade, and grow with South African businesses
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/businesses" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Browse Businesses
            </Link>
            <Link 
              href="/listings" 
              className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300"
            >
              View Listings
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-600">Registered Businesses</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <p className="text-gray-600">Active Listings</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
            <p className="text-gray-600">Successful Transactions</p>
          </div>
        </div>
      </div>
    </main>
  )
}
