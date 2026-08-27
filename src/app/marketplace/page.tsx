'use client'

import { useState } from 'react'

export default function Marketplace() {
  const [filters, setFilters] = useState({
    category: '',
    province: '',
    city: '',
  })

  const provinces = [
    'Eastern Cape',
    'Free State',
    'Gauteng',
    'KwaZulu-Natal',
    'Limpopo',
    'Mpumalanga',
    'Northern Cape',
    'North West',
    'Western Cape',
  ]

  const categories = [
    'Equipment',
    'Vehicles',
    'Technology',
    'Services',
    'Office Space',
    'Industrial',
    'Other',
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-bold text-gray-900">Marketplace</h1>
          <p className="text-gray-600 mt-2">Browse available listings and find what you need</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Category</label>
              <select 
                value={filters.category}
                onChange={(e) => setFilters({...filters, category: e.target.value})}
                className="w-full border-gray-300 border rounded px-3 py-2"
              >
                <option value="">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Province</label>
              <select 
                value={filters.province}
                onChange={(e) => setFilters({...filters, province: e.target.value})}
                className="w-full border-gray-300 border rounded px-3 py-2"
              >
                <option value="">All Provinces</option>
                {provinces.map(prov => (
                  <option key={prov} value={prov}>{prov}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">City</label>
              <input 
                type="text"
                value={filters.city}
                onChange={(e) => setFilters({...filters, city: e.target.value})}
                placeholder="Enter city"
                className="w-full border-gray-300 border rounded px-3 py-2"
              />
            </div>

            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
              Apply Filters
            </button>
          </div>

          {/* Listings Grid */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sample Listing Card */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <div className="bg-gray-200 h-48"></div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900">Office Equipment</h3>
                    <p className="text-gray-600 text-sm mt-1">High-quality equipment available for rent</p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-indigo-600 font-bold">R500/day</span>
                      <a href="#" className="text-indigo-600 hover:text-indigo-700 font-semibold">View Details</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
